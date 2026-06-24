"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { 
  Utensils, Hotel, Home, Star, MapPin, 
  Navigation, SlidersHorizontal, ArrowUpDown, Loader2 
} from 'lucide-react';

// Dynamic import of the map component to bypass SSR errors
const InteractiveMap = dynamic(
  () => import('./InteractiveMap'),
  { 
    ssr: false,
    loading: () => (
      <div className="flex h-[350px] md:h-[450px] w-full items-center justify-center rounded-2xl border border-border bg-muted">
        <div className="flex flex-col items-center space-y-2 text-muted-foreground text-sm font-semibold">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <span>Loading Map Engine...</span>
        </div>
      </div>
    )
  }
);

interface Place {
  name: string;
  rating: number;
  lat: number;
  lng: number;
  distance: number;
  address: string;
  priceLevel?: string;
  image?: string;
  type: string;
}

interface NearbyDiscoveryProps {
  destId: string;
  centerLat: number;
  centerLng: number;
  centerName: string;
}

type PlaceCategory = 'restaurant' | 'hotel' | 'hostel';
type SortOption = 'distance' | 'rating';

export default function NearbyDiscovery({
  destId,
  centerLat,
  centerLng,
  centerName
}: NearbyDiscoveryProps) {
  const [activeCategory, setActiveCategory] = useState<PlaceCategory>('restaurant');
  const [sortBy, setSortBy] = useState<SortOption>('distance');
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch places based on coordinates, category, and sorting
  useEffect(() => {
    const fetchPlaces = async () => {
      setLoading(true);
      setError(null);
      try {
        const queryParams = new URLSearchParams({
          lat: centerLat.toString(),
          lng: centerLng.toString(),
          type: activeCategory,
          destId: destId,
          sortBy: sortBy
        });

        const res = await fetch(`/api/places?${queryParams.toString()}`);
        if (!res.ok) {
          throw new Error('Failed to fetch nearby recommendations.');
        }
        
        const data = await res.json();
        setPlaces(data.results || []);
      } catch (err: any) {
        console.error(err);
        setError(err.message || 'Something went wrong while fetching recommendations.');
      } finally {
        setLoading(false);
      }
    };

    fetchPlaces();
  }, [destId, centerLat, centerLng, activeCategory, sortBy]);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
      
      {/* Title & Introduction */}
      <div>
        <h2 className="text-2xl font-bold text-foreground">Nearby Discovery</h2>
        <p className="text-sm text-muted-foreground">
          Discover handpicked restaurants, boutique hotels, and hostels within walking or driving distance of {centerName}.
        </p>
      </div>

      {/* Main Controls Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border pb-4">
        
        {/* Category Tab Buttons */}
        <div className="flex bg-muted p-1 rounded-xl w-fit">
          {[
            { id: 'restaurant', label: 'Restaurants', icon: Utensils },
            { id: 'hotel', label: 'Hotels', icon: Hotel },
            { id: 'hostel', label: 'Hostels', icon: Home }
          ].map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as PlaceCategory)}
                className={`flex items-center space-x-2 rounded-lg px-4 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-background text-primary shadow-xs'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Sort & Filter Controls */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 text-xs text-muted-foreground font-semibold">
            <SlidersHorizontal className="h-4 w-4" />
            <span>Sort by:</span>
          </div>
          
          <div className="flex bg-muted p-1 rounded-lg">
            <button
              onClick={() => setSortBy('distance')}
              className={`rounded-md px-3 py-1 text-xs font-semibold cursor-pointer ${
                sortBy === 'distance'
                  ? 'bg-background text-foreground shadow-xs'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Distance
            </button>
            <button
              onClick={() => setSortBy('rating')}
              className={`rounded-md px-3 py-1 text-xs font-semibold cursor-pointer ${
                sortBy === 'rating'
                  ? 'bg-background text-foreground shadow-xs'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Rating
            </button>
          </div>
        </div>

      </div>

      {/* Main Grid: Listings Left, Map Right */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        
        {/* Left Column: Places Listings */}
        <div className="lg:col-span-2 space-y-4 max-h-[500px] overflow-y-auto pr-2">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 text-muted-foreground text-sm font-semibold">
              <Loader2 className="h-8 w-8 animate-spin text-primary mb-2" />
              <span>Fetching recommended places...</span>
            </div>
          ) : error ? (
            <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-6 text-center text-sm text-red-600 dark:text-red-400">
              {error}
            </div>
          ) : places.length === 0 ? (
            <div className="rounded-xl border border-dashed border-border p-12 text-center text-sm text-muted-foreground">
              No results found in this range.
            </div>
          ) : (
            places.map((place, idx) => (
              <div
                key={idx}
                className="group flex gap-4 p-4 rounded-xl border border-border bg-card hover:bg-muted/10 hover:border-primary/30 transition-all hover-lift"
              >
                {/* Visual Thumbnail */}
                {place.image && (
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-muted shadow-sm">
                    <img
                      src={place.image}
                      alt={place.name}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform"
                      loading="lazy"
                    />
                  </div>
                )}
                
                {/* Info Text */}
                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-extrabold text-sm text-foreground truncate group-hover:text-primary transition-colors">
                      {place.name}
                    </h3>
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 whitespace-nowrap shrink-0">
                      {place.priceLevel}
                    </span>
                  </div>

                  <div className="flex items-center space-x-1 text-xs text-amber-500 font-semibold">
                    <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                    <span>{place.rating.toFixed(1)}</span>
                  </div>

                  <div className="flex items-center text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 mr-1 text-primary shrink-0" />
                    <span className="truncate">{place.address}</span>
                  </div>

                  <div className="flex items-center text-xs text-primary font-bold pt-1">
                    <Navigation className="h-3.5 w-3.5 mr-1 stroke-[2.5]" />
                    <span>{place.distance} km from center</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Right Column: Dynamic Leaflet Map */}
        <div className="lg:col-span-3 h-[350px] md:h-[450px] sticky top-36">
          <InteractiveMap
            centerLat={centerLat}
            centerLng={centerLng}
            centerName={centerName}
            places={places}
            activeType={activeCategory}
          />
        </div>

      </div>
    </div>
  );
}
