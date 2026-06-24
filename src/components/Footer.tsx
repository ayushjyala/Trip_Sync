"use client";

import React from 'react';
import Link from 'next/link';
import { Compass } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card text-card-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center space-x-2 text-primary font-bold text-xl tracking-tight">
              <Compass className="h-6 w-6 stroke-[2.5]" />
              <span className="text-foreground font-extrabold">Travel India<span className="text-primary font-normal"> Explorer</span></span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Discover the royal heritage, tranquil hills, serene beaches, and rich cultural traditions of India. Plan your ultimate Indian getaway.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Destinations</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/destinations/jaipur" className="text-muted-foreground hover:text-foreground transition-colors">
                  Jaipur (The Pink City)
                </Link>
              </li>
              <li>
                <Link href="/destinations/munnar" className="text-muted-foreground hover:text-foreground transition-colors">
                  Munnar (Tea Estates)
                </Link>
              </li>
              <li>
                <Link href="/destinations/ladakh" className="text-muted-foreground hover:text-foreground transition-colors">
                  Leh-Ladakh (High Passes)
                </Link>
              </li>
              <li>
                <Link href="/destinations/goa" className="text-muted-foreground hover:text-foreground transition-colors">
                  Goa (Golden Beaches)
                </Link>
              </li>
            </ul>
          </div>

          {/* Support / Info */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Explore</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/#experiences" className="text-muted-foreground hover:text-foreground transition-colors">
                  Experiences
                </Link>
              </li>
              <li>
                <Link href="/#planner" className="text-muted-foreground hover:text-foreground transition-colors">
                  Trip Planner
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Travel Advisory
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Local Food Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">Subscribe to receive exclusive itineraries and travel tips.</p>
            <form className="flex space-x-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter email"
                className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm focus:border-primary focus:outline-none"
              />
              <button className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shadow">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Travel India Explorer. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Twitter X">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.523-10-10-10z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
