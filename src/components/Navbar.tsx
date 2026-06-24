"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from './ThemeProvider';
import { Sun, Moon, Menu, X, Compass, MapPin, Calendar, Heart } from 'lucide-react';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 text-primary font-bold text-xl tracking-tight">
              <Compass className="h-6 w-6 stroke-[2.5]" />
              <span className="text-foreground font-extrabold">Travel India<span className="text-primary font-normal"> Explorer</span></span>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/#destinations" className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
              Destinations
            </Link>
            <Link href="/#experiences" className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
              Experiences
            </Link>
            <Link href="/#planner" className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
              Trip Planner
            </Link>
          </div>

          {/* Controls & Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-all cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5 text-amber-500" /> : <Moon className="h-5 w-5" />}
            </button>
            <button className="rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-all cursor-pointer">
              <Heart className="h-5 w-5" />
            </button>
            <button className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all cursor-pointer hover:scale-105 active:scale-95 shadow-md">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-all"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5 text-amber-500" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-all"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background px-2 pt-2 pb-4 space-y-1 shadow-lg animate-in fade-in slide-in-from-top duration-200">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block rounded-lg px-3 py-2 text-base font-semibold text-foreground hover:bg-muted"
          >
            Home
          </Link>
          <Link
            href="/#destinations"
            onClick={() => setIsOpen(false)}
            className="block rounded-lg px-3 py-2 text-base font-semibold text-foreground hover:bg-muted"
          >
            Destinations
          </Link>
          <Link
            href="/#experiences"
            onClick={() => setIsOpen(false)}
            className="block rounded-lg px-3 py-2 text-base font-semibold text-foreground hover:bg-muted"
          >
            Experiences
          </Link>
          <Link
            href="/#planner"
            onClick={() => setIsOpen(false)}
            className="block rounded-lg px-3 py-2 text-base font-semibold text-foreground hover:bg-muted"
          >
            Trip Planner
          </Link>
          <div className="border-t border-border mt-4 pt-4 px-3 flex justify-between items-center">
            <button className="flex items-center space-x-2 text-sm font-semibold text-muted-foreground hover:text-foreground">
              <Heart className="h-5 w-5" />
              <span>Favorites</span>
            </button>
            <button className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all w-28">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
