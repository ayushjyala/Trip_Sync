import React from 'react';
import Link from 'next/link';
import { Star, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { destinations } from '@/data/destinations';

export default function FeaturedDestinations() {
  return (
    <section id="destinations" className="py-20 bg-background scroll-mt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Popular Destinations to Explore
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From regal palaces to tropical escapes, discover the diverse landscapes of India.
          </p>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-xl transition-all duration-300 hover-lift"
            >
              {/* Image Container with Zoom Effect */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-zinc-100">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-108"
                  loading="lazy"
                />
                
                {/* Overlay State Badge */}
                <div className="absolute top-4 left-4 flex items-center space-x-1 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                  <MapPin className="h-3 w-3 text-primary" />
                  <span>{dest.state}</span>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 flex items-center space-x-1 rounded-full bg-white/95 dark:bg-zinc-900/95 px-2.5 py-1 text-xs font-bold text-zinc-900 dark:text-zinc-100 shadow-md">
                  <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
                  <span>{dest.rating.toFixed(1)}</span>
                </div>
              </div>

              {/* Card Details */}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-foreground">
                    {dest.name}
                  </h3>
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                    {dest.budget}
                  </span>
                </div>
                
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
                  {dest.description}
                </p>

                {/* Info summary */}
                <div className="border-t border-border pt-4 mt-auto">
                  <div className="flex items-center text-xs text-muted-foreground mb-4">
                    <Calendar className="mr-1.5 h-4 w-4 text-primary" />
                    <span>Best: {dest.bestTime.split(' (')[0]}</span>
                  </div>

                  {/* Explore Button */}
                  <Link
                    href={`/destinations/${dest.id}`}
                    className="inline-flex w-full items-center justify-center space-x-2 rounded-xl border border-primary px-4 py-2.5 text-sm font-bold text-primary hover:bg-primary hover:text-primary-foreground transition-all group-hover:scale-[1.01]"
                  >
                    <span>Discover Details</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
