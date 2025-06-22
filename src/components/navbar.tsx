"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const closeMenu = () => {
		setIsOpen(false);
	};

	const navItems = [
		{ name: "Home", href: "/" },
		{ name: "Image Compression", href: "/compress/image" },
		{ name: "PDF Compression", href: "/compress/pdf" },
		{ name: "About", href: "/about" },
		{ name: "Contact", href: "/contact" },
	];

	return (
		<header
			className={cn(
				"sticky top-0 z-50 w-full transition-all duration-200",
				isScrolled
					? "bg-background/80 backdrop-blur-md shadow-sm"
					: "bg-transparent"
			)}>
			<div className='container mx-auto flex h-16 items-center justify-between px-4 md:px-6'>
				<Link
					href='/'
					className='flex items-center gap-2'
					onClick={closeMenu}>
					<span className='text-2xl font-bold gradient-text'>
						CompressEase
					</span>
				</Link>

				<nav className='hidden md:flex gap-6'>
					{navItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className={cn(
								"text-sm font-medium transition-colors hover:text-primary",
								pathname === item.href
									? "text-primary"
									: "text-muted-foreground"
							)}>
							{item.name}
						</Link>
					))}
				</nav>

				<div className='flex items-center gap-4'>
					<ThemeToggle />
					<Button asChild className='hidden md:inline-flex'>
						<Link href='/compress/image'>Get Started</Link>
					</Button>
					<button
						className='md:hidden'
						onClick={toggleMenu}
						aria-label='Toggle menu'>
						{isOpen ? (
							<X className='h-6 w-6' />
						) : (
							<Menu className='h-6 w-6' />
						)}
					</button>
				</div>
			</div>

			{/* Mobile menu */}
			{isOpen && (
				<div className='md:hidden fixed inset-0 top-16 z-50 bg-background/95 backdrop-blur-sm'>
					<nav className='container flex flex-col gap-6 p-6'>
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className={cn(
									"text-lg font-medium transition-colors hover:text-primary",
									pathname === item.href
										? "text-primary"
										: "text-muted-foreground"
								)}
								onClick={closeMenu}>
								{item.name}
							</Link>
						))}
						<Button asChild className='mt-4'>
							<Link href='/compress/image' onClick={closeMenu}>
								Get Started
							</Link>
						</Button>
					</nav>
				</div>
			)}
		</header>
	);
}
