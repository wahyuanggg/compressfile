"use client";

import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, X, Download, ImageIcon, Info, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

type ImageFile = {
	id: string;
	file: File;
	preview: string;
	status: "idle" | "compressing" | "done" | "error";
	progress: number;
	originalSize: number;
	compressedSize?: number;
	compressedUrl?: string;
	error?: string;
};

const compressImage = async (file: File, quality: number): Promise<Blob> => {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.src = URL.createObjectURL(file);

		img.onload = () => {
			URL.revokeObjectURL(img.src);
			const canvas = document.createElement("canvas");
			const ctx = canvas.getContext("2d");

			canvas.width = img.width;
			canvas.height = img.height;

			if (!ctx) {
				reject(new Error("Could not get canvas context"));
				return;
			}

			ctx.drawImage(img, 0, 0);

			canvas.toBlob(
				(blob) => {
					if (blob) {
						resolve(blob);
					} else {
						reject(new Error("Could not compress image"));
					}
				},
				"image/jpeg",
				quality / 100
			);
		};

		img.onerror = () => {
			reject(new Error("Could not load image"));
		};
	});
};

export default function ImageCompressor() {
	const [files, setFiles] = useState<ImageFile[]>([]);
	const [quality, setQuality] = useState(80);
	const [format, setFormat] = useState("auto");
	const [preserveExif, setPreserveExif] = useState(false);
	const [isCompressing, setIsCompressing] = useState(false);
	const [isDragging, setIsDragging] = useState(false);

	const onDrop = useCallback((acceptedFiles: File[]) => {
		const newFiles = acceptedFiles.map((file) => ({
			id: Math.random().toString(36).substring(2, 9),
			file,
			preview: URL.createObjectURL(file),
			status: "idle" as const,
			progress: 0,
			originalSize: file.size,
		}));

		setFiles((prev) => [...prev, ...newFiles]);
	}, []);

	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
		accept: {
			"image/*": [".jpeg", ".jpg", ".png", ".gif", ".webp", ".svg"],
		},
		onDragEnter: () => setIsDragging(true),
		onDragLeave: () => setIsDragging(false),
		onDropAccepted: () => setIsDragging(false),
		onDropRejected: () => setIsDragging(false),
	});

	const removeFile = (id: string) => {
		setFiles((prev) => {
			const filtered = prev.filter((file) => file.id !== id);
			// Revoke object URL to avoid memory leaks
			const fileToRemove = prev.find((file) => file.id === id);
			if (fileToRemove) {
				URL.revokeObjectURL(fileToRemove.preview);
				if (fileToRemove.compressedUrl) {
					URL.revokeObjectURL(fileToRemove.compressedUrl);
				}
			}
			return filtered;
		});
	};

	const clearAllFiles = () => {
		files.forEach((file) => {
			URL.revokeObjectURL(file.preview);
			if (file.compressedUrl) {
				URL.revokeObjectURL(file.compressedUrl);
			}
		});
		setFiles([]);
	};

	const compressImages = async () => {
		if (files.length === 0 || isCompressing) return;

		setIsCompressing(true);

		for (let i = 0; i < files.length; i++) {
			const file = files[i];
			if (file.status === "done") continue;

			try {
				setFiles((prev) =>
					prev.map((f) =>
						f.id === file.id
							? {
									...f,
									status: "compressing" as const,
									progress: 0,
							  }
							: f
					)
				);

				// Actual compression
				const compressedBlob = await compressImage(file.file, quality);
				const compressedUrl = URL.createObjectURL(compressedBlob);

				setFiles((prev) =>
					prev.map((f) =>
						f.id === file.id
							? {
									...f,
									status: "done" as const,
									progress: 100,
									compressedSize: compressedBlob.size,
									compressedUrl: compressedUrl,
							  }
							: f
					)
				);
			} catch (error) {
				console.error("Error compressing image:", error);
				setFiles((prev) =>
					prev.map((f) =>
						f.id === file.id
							? {
									...f,
									status: "error" as const,
									error: "Failed to compress image",
							  }
							: f
					)
				);
			}

			// Small delay between files
			if (i < files.length - 1) {
				await new Promise((resolve) => setTimeout(resolve, 300));
			}
		}

		setIsCompressing(false);
	};

	const downloadFile = (file: ImageFile) => {
		if (!file.compressedUrl) return;

		const link = document.createElement("a");
		link.href = file.compressedUrl;

		// Create a filename with "-compressed" suffix
		const originalName = file.file.name;
		const lastDotIndex = originalName.lastIndexOf(".");
		const nameWithoutExt =
			lastDotIndex !== -1
				? originalName.substring(0, lastDotIndex)
				: originalName;
		const extension =
			lastDotIndex !== -1 ? originalName.substring(lastDotIndex) : "";
		const newFilename = `${nameWithoutExt}-compressed${extension}`;

		link.download = newFilename;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	const downloadAll = () => {
		const completedFiles = files.filter(
			(file) => file.status === "done" && file.compressedUrl
		);
		completedFiles.forEach((file) => {
			downloadFile(file);
		});
	};

	const formatBytes = (bytes: number, decimals = 2) => {
		if (bytes === 0) return "0 Bytes";

		const k = 1024;
		const dm = decimals < 0 ? 0 : decimals;
		const sizes = ["Bytes", "KB", "MB", "GB"];

		const i = Math.floor(Math.log(bytes) / Math.log(k));

		return (
			Number.parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) +
			" " +
			sizes[i]
		);
	};

	const calculateSavings = (original: number, compressed?: number) => {
		if (!compressed) return "0%";
		const saving = original - compressed;
		const percentage = (saving / original) * 100;
		return `${percentage.toFixed(1)}%`;
	};

	const allCompleted =
		files.length > 0 && files.every((file) => file.status === "done");
	const anyCompressing = files.some((file) => file.status === "compressing");
	const totalOriginalSize = files.reduce(
		(acc, file) => acc + file.originalSize,
		0
	);
	const totalCompressedSize = files.reduce(
		(acc, file) => acc + (file.compressedSize || 0),
		0
	);
	const totalSavings = calculateSavings(
		totalOriginalSize,
		totalCompressedSize
	);

	return (
		<Tabs defaultValue='upload' className='w-full'>
			<TabsList className='grid w-full max-w-md mx-auto grid-cols-2 mb-8'>
				<TabsTrigger value='upload'>Upload & Compress</TabsTrigger>
				<TabsTrigger value='settings'>Settings</TabsTrigger>
			</TabsList>

			<TabsContent value='upload' className='space-y-8'>
				<div
					{...getRootProps()}
					className={cn(
						"file-drop-area border rounded-md p-18 border-muted-foreground/20 cursor-pointer",
						isDragging && "dragging",
						files.length > 0 &&
							"border-dashed border-muted-foreground/20"
					)}>
					<input {...getInputProps()} />
					<div className='flex flex-col items-center justify-center gap-4'>
						<div className='p-4 rounded-full bg-muted'>
							<Upload className='h-8 w-8 text-muted-foreground' />
						</div>
						<div className='text-center'>
							<p className='font-medium'>
								Drag & drop images here, or click to select
								files
							</p>
							<p className='text-sm text-muted-foreground mt-1'>
								Supports JPG, PNG, SVG, GIF, WebP and more
							</p>
						</div>
					</div>
				</div>

				{files.length > 0 && (
					<div className='space-y-6'>
						<div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4'>
							<div>
								<h3 className='text-lg font-medium'>
									{files.length}{" "}
									{files.length === 1 ? "Image" : "Images"}
								</h3>
								<p className='text-sm text-muted-foreground'>
									Original: {formatBytes(totalOriginalSize)}
									{totalCompressedSize > 0 && (
										<>
											{" • "}Compressed:{" "}
											{formatBytes(totalCompressedSize)}
											{" • "}Saved: {totalSavings}
										</>
									)}
								</p>
							</div>
							<div className='flex gap-3'>
								<Button
									variant='outline'
									size='sm'
									onClick={clearAllFiles}
									disabled={isCompressing}>
									<Trash2 className='h-4 w-4 mr-2' />
									Clear All
								</Button>
								{allCompleted ? (
									<Button size='sm' onClick={downloadAll}>
										<Download className='h-4 w-4 mr-2' />
										Download All
									</Button>
								) : (
									<Button
										size='sm'
										onClick={compressImages}
										disabled={
											isCompressing || files.length === 0
										}>
										<ImageIcon className='h-4 w-4 mr-2' />
										{anyCompressing
											? "Compressing..."
											: "Compress All"}
									</Button>
								)}
							</div>
						</div>

						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
							{files.map((file) => (
								<Card key={file.id} className='overflow-hidden'>
									<div className='aspect-square relative overflow-hidden bg-muted'>
										<img
											src={
												file.preview ||
												"/placeholder.svg"
											}
											alt={file.file.name}
											className='h-full w-full object-cover'
										/>
										<button
											onClick={(e) => {
												e.stopPropagation();
												removeFile(file.id);
											}}
											className='absolute top-2 right-2 p-1 rounded-full bg-background/80 hover:bg-background text-muted-foreground hover:text-foreground'
											disabled={isCompressing}>
											<X className='h-4 w-4' />
										</button>
									</div>
									<CardContent className='p-4'>
										<div className='space-y-2'>
											<div className='flex justify-between items-start'>
												<div className='truncate pr-4'>
													<p className='font-medium truncate'>
														{file.file.name}
													</p>
													<p className='text-xs text-muted-foreground'>
														{formatBytes(
															file.originalSize
														)}
														{file.compressedSize && (
															<>
																{" "}
																→{" "}
																{formatBytes(
																	file.compressedSize
																)}
															</>
														)}
													</p>
												</div>
												{file.status === "done" &&
													file.compressedSize && (
														<div className='text-xs font-medium text-green-600 bg-green-50 dark:bg-green-950/30 px-2 py-1 rounded-full'>
															-
															{calculateSavings(
																file.originalSize,
																file.compressedSize
															)}
														</div>
													)}
											</div>

											{file.status === "compressing" && (
												<Progress
													value={file.progress}
													className='h-2'
												/>
											)}

											{file.status === "done" &&
												file.compressedUrl && (
													<Button
														variant='outline'
														size='sm'
														className='w-full'
														onClick={() =>
															downloadFile(file)
														}>
														<Download className='h-4 w-4 mr-2' />
														Download
													</Button>
												)}

											{file.status === "idle" && (
												<Button
													variant='outline'
													size='sm'
													className='w-full'
													onClick={(e) => {
														e.stopPropagation();
														compressImages();
													}}
													disabled={isCompressing}>
													<ImageIcon className='h-4 w-4 mr-2' />
													Compress
												</Button>
											)}

											{file.status === "error" && (
												<p className='text-xs text-destructive'>
													{file.error ||
														"Error compressing image"}
												</p>
											)}
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				)}
			</TabsContent>

			<TabsContent value='settings' className='space-y-8'>
				<Card>
					<CardHeader>
						<CardTitle>Compression Settings</CardTitle>
						<CardDescription>
							Adjust these settings to control the compression
							quality and output format.
						</CardDescription>
					</CardHeader>
					<CardContent className='space-y-6'>
						<div className='space-y-2'>
							<div className='flex justify-between items-center'>
								<Label htmlFor='quality'>
									Quality ({quality}%)
								</Label>
								<TooltipProvider>
									<Tooltip>
										<TooltipTrigger asChild>
											<Info className='h-4 w-4 text-muted-foreground' />
										</TooltipTrigger>
										<TooltipContent>
											<p className='max-w-xs'>
												Higher quality means larger file
												size. Lower quality means
												smaller file size but may
												introduce artifacts.
											</p>
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>
							</div>
							<Slider
								id='quality'
								min={1}
								max={100}
								step={1}
								value={[quality]}
								onValueChange={(value) => setQuality(value[0])}
							/>
							<p className='text-xs text-muted-foreground'>
								Recommended: 70-85% for web images, 85-95% for
								printing
							</p>
						</div>

						<div className='space-y-2'>
							<div className='flex justify-between items-center'>
								<Label htmlFor='format'>Output Format</Label>
								<TooltipProvider>
									<Tooltip>
										<TooltipTrigger asChild>
											<Info className='h-4 w-4 text-muted-foreground' />
										</TooltipTrigger>
										<TooltipContent>
											<p className='max-w-xs'>
												Different formats have different
												compression characteristics.
												WebP usually offers the best
												compression.
											</p>
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>
							</div>
							<Select value={format} onValueChange={setFormat}>
								<SelectTrigger id='format'>
									<SelectValue placeholder='Select format' />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value='auto'>
										Auto (Same as original)
									</SelectItem>
									<SelectItem value='jpg'>JPG</SelectItem>
									<SelectItem value='png'>PNG</SelectItem>
									<SelectItem value='webp'>
										WebP (Recommended)
									</SelectItem>
								</SelectContent>
							</Select>
							<p className='text-xs text-muted-foreground'>
								WebP offers the best compression but may not be
								supported by all applications
							</p>
						</div>

						<div className='flex items-center justify-between space-x-2'>
							<div className='space-y-0.5'>
								<Label htmlFor='preserve-exif'>
									Preserve EXIF Data
								</Label>
								<p className='text-xs text-muted-foreground'>
									Keep metadata like camera settings and GPS
									location
								</p>
							</div>
							<Switch
								id='preserve-exif'
								checked={preserveExif}
								onCheckedChange={setPreserveExif}
							/>
						</div>
					</CardContent>
					<CardFooter>
						<p className='text-xs text-muted-foreground'>
							Settings are applied to all images in the current
							session
						</p>
					</CardFooter>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Advanced Options</CardTitle>
						<CardDescription>
							These settings are for users who need more control
							over the compression process.
						</CardDescription>
					</CardHeader>
					<CardContent className='space-y-4'>
						<div className='flex items-center justify-between space-x-2'>
							<div className='space-y-0.5'>
								<Label>Resize Images</Label>
								<p className='text-xs text-muted-foreground'>
									Automatically resize large images
								</p>
							</div>
							<Switch defaultChecked={true} />
						</div>

						<div className='flex items-center justify-between space-x-2'>
							<div className='space-y-0.5'>
								<Label>Progressive Loading</Label>
								<p className='text-xs text-muted-foreground'>
									Create progressive JPGs for faster perceived
									loading
								</p>
							</div>
							<Switch defaultChecked={true} />
						</div>

						<div className='flex items-center justify-between space-x-2'>
							<div className='space-y-0.5'>
								<Label>Strip Color Profile</Label>
								<p className='text-xs text-muted-foreground'>
									Remove color profile data to reduce file
									size
								</p>
							</div>
							<Switch defaultChecked={false} />
						</div>
					</CardContent>
				</Card>
			</TabsContent>
		</Tabs>
	);
}
