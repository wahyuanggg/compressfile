"use client";

import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, X, Download, FileText, Info, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
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

type PDFFile = {
	id: string;
	file: File;
	status: "idle" | "compressing" | "done" | "error";
	progress: number;
	originalSize: number;
	compressedSize?: number;
	compressedUrl?: string;
	error?: string;
	pages?: number;
};

export default function PDFCompressor() {
	const [files, setFiles] = useState<PDFFile[]>([]);
	const [quality, setQuality] = useState(70);
	const [imageQuality, setImageQuality] = useState(75);
	const [optimizeFonts, setOptimizeFonts] = useState(true);
	const [isCompressing, setIsCompressing] = useState(false);
	const [isDragging, setIsDragging] = useState(false);

	const onDrop = useCallback((acceptedFiles: File[]) => {
		const newFiles = acceptedFiles.map((file) => ({
			id: Math.random().toString(36).substring(2, 9),
			file,
			status: "idle" as const,
			progress: 0,
			originalSize: file.size,
			pages: Math.floor(Math.random() * 20) + 1, // Simulate random page count
		}));

		setFiles((prev) => [...prev, ...newFiles]);
	}, []);

	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
		accept: {
			"application/pdf": [".pdf"],
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
			if (fileToRemove?.compressedUrl) {
				URL.revokeObjectURL(fileToRemove.compressedUrl);
			}
			return filtered;
		});
	};

	const clearAllFiles = () => {
		files.forEach((file) => {
			if (file.compressedUrl) {
				URL.revokeObjectURL(file.compressedUrl);
			}
		});
		setFiles([]);
	};

	const compressPDFs = async () => {
		if (files.length === 0 || isCompressing) return;

		setIsCompressing(true);

		// Simulate compression for each file
		for (let i = 0; i < files.length; i++) {
			const file = files[i];
			if (file.status === "done") continue;

			// Update status to compressing
			setFiles((prev) =>
				prev.map((f) =>
					f.id === file.id
						? { ...f, status: "compressing" as const }
						: f
				)
			);

			// Simulate progress updates
			for (let progress = 0; progress <= 100; progress += 2) {
				await new Promise((resolve) => setTimeout(resolve, 50));
				setFiles((prev) =>
					prev.map((f) => (f.id === file.id ? { ...f, progress } : f))
				);
			}

			// Simulate compression result (in a real app, this would be actual compression)
			const compressionRatio = Math.random() * 0.5 + 0.3; // Random between 30% and 80%
			const compressedSize = Math.floor(
				file.originalSize * compressionRatio
			);

			// Create a fake blob URL for the "compressed" PDF
			const compressedUrl = URL.createObjectURL(
				new Blob([new ArrayBuffer(compressedSize)], {
					type: "application/pdf",
				})
			);

			// Update with compressed result
			setFiles((prev) =>
				prev.map((f) =>
					f.id === file.id
						? {
								...f,
								status: "done" as const,
								progress: 100,
								compressedSize,
								compressedUrl,
						  }
						: f
				)
			);

			// Small delay between files
			if (i < files.length - 1) {
				await new Promise((resolve) => setTimeout(resolve, 300));
			}
		}

		setIsCompressing(false);
	};

	const downloadFile = (file: PDFFile) => {
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
								Drag & drop PDF files here, or click to select
								files
							</p>
							<p className='text-sm text-muted-foreground mt-1'>
								Only PDF files are supported
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
									{files.length === 1 ? "PDF" : "PDFs"}
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
										onClick={compressPDFs}
										disabled={
											isCompressing || files.length === 0
										}>
										<FileText className='h-4 w-4 mr-2' />
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
									<div className='aspect-[3/4] relative overflow-hidden bg-muted flex items-center justify-center'>
										<FileText className='h-16 w-16 text-muted-foreground/50' />
										{file.pages && (
											<div className='absolute bottom-2 right-2 bg-background/80 text-xs px-2 py-1 rounded-md'>
												{file.pages}{" "}
												{file.pages === 1
													? "page"
													: "pages"}
											</div>
										)}
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
														compressPDFs();
													}}
													disabled={isCompressing}>
													<FileText className='h-4 w-4 mr-2' />
													Compress
												</Button>
											)}

											{file.status === "error" && (
												<p className='text-xs text-destructive'>
													{file.error ||
														"Error compressing PDF"}
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
						<CardTitle>PDF Compression Settings</CardTitle>
						<CardDescription>
							Adjust these settings to control the compression
							quality and output options.
						</CardDescription>
					</CardHeader>
					<CardContent className='space-y-6'>
						<div className='space-y-2'>
							<div className='flex justify-between items-center'>
								<Label htmlFor='quality'>
									Overall Quality ({quality}%)
								</Label>
								<TooltipProvider>
									<Tooltip>
										<TooltipTrigger asChild>
											<Info className='h-4 w-4 text-muted-foreground' />
										</TooltipTrigger>
										<TooltipContent>
											<p className='max-w-xs'>
												Controls the overall compression
												level. Lower quality means
												smaller file size but may affect
												readability.
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
								Recommended: 60-80% for web sharing, 80-100% for
								printing
							</p>
						</div>

						<div className='space-y-2'>
							<div className='flex justify-between items-center'>
								<Label htmlFor='image-quality'>
									Image Quality ({imageQuality}%)
								</Label>
								<TooltipProvider>
									<Tooltip>
										<TooltipTrigger asChild>
											<Info className='h-4 w-4 text-muted-foreground' />
										</TooltipTrigger>
										<TooltipContent>
											<p className='max-w-xs'>
												Controls the quality of images
												embedded in the PDF. Lower
												quality means smaller file size.
											</p>
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>
							</div>
							<Slider
								id='image-quality'
								min={1}
								max={100}
								step={1}
								value={[imageQuality]}
								onValueChange={(value) =>
									setImageQuality(value[0])
								}
							/>
						</div>

						<div className='flex items-center justify-between space-x-2'>
							<div className='space-y-0.5'>
								<Label htmlFor='optimize-fonts'>
									Optimize Fonts
								</Label>
								<p className='text-xs text-muted-foreground'>
									Subset and compress fonts to reduce file
									size
								</p>
							</div>
							<Switch
								id='optimize-fonts'
								checked={optimizeFonts}
								onCheckedChange={setOptimizeFonts}
							/>
						</div>
					</CardContent>
					<CardFooter>
						<p className='text-xs text-muted-foreground'>
							Settings are applied to all PDFs in the current
							session
						</p>
					</CardFooter>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Advanced Options</CardTitle>
						<CardDescription>
							These settings are for users who need more control
							over the PDF compression process.
						</CardDescription>
					</CardHeader>
					<CardContent className='space-y-4'>
						<div className='flex items-center justify-between space-x-2'>
							<div className='space-y-0.5'>
								<Label>Flatten Form Fields</Label>
								<p className='text-xs text-muted-foreground'>
									Convert interactive form fields to static
									content
								</p>
							</div>
							<Switch defaultChecked={false} />
						</div>

						<div className='flex items-center justify-between space-x-2'>
							<div className='space-y-0.5'>
								<Label>Remove Annotations</Label>
								<p className='text-xs text-muted-foreground'>
									Remove comments, form fields, and other
									annotations
								</p>
							</div>
							<Switch defaultChecked={false} />
						</div>

						<div className='flex items-center justify-between space-x-2'>
							<div className='space-y-0.5'>
								<Label>Grayscale Conversion</Label>
								<p className='text-xs text-muted-foreground'>
									Convert colored elements to grayscale to
									reduce file size
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
