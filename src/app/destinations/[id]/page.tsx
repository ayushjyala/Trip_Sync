"use client";

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  Star, MapPin, Calendar, Cloud, Info, BookOpen, 
  Map, Utensils, Lightbulb, CheckCircle2, ArrowLeft,
  Compass, AlertTriangle, Navigation
} from 'lucide-react';
import { destinations } from '@/data/destinations';
import NearbyDiscovery from '@/components/NearbyDiscovery';

type TabType = 'overview' | 'attractions' | 'food' | 'tips' | 'nearby';

export default function DestinationDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  const id = params?.id as string;
  const destination = destinations.find((d) => d.id === id);

  // If destination is not found, display a beautiful error/404 state
  if (!destination) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 text-center min-h-[70vh] flex flex-col items-center justify-center">
        <AlertTriangle className="h-16 w-16 text-primary mb-4" />
        <h1 className="text-3xl font-extrabold text-foreground mb-2">Destination Not Found</h1>
        <p className="text-muted-foreground mb-8 max-w-md">
          We couldn\'t find the destination you are looking for in our database. Try searching for Jaipur, Munnar, Goa, or Ladakh.
        </p>
        <Link
          href="/"
          className="inline-flex items-center space-x-2 rounded-xl bg-primary px-6 py-3 font-bold text-primary-foreground hover:bg-primary/95 transition-all shadow-md"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Home</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      
      {/* 1. HERO BANNER SECTION */}
      <div className="relative h-[55vh] md:h-[60vh] w-full overflow-hidden bg-zinc-900">
        <img
          src={destination.bannerImage}
          alt={destination.name}
          className="h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
        
        {/* Navigation back button */}
        <div className="absolute top-6 left-6 z-10">
          <button
            onClick={() => router.push('/')}
            className="flex items-center space-x-2 rounded-full bg-black/45 hover:bg-black/60 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition-all cursor-pointer shadow-md"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Explorer</span>
          </button>
        </div>

        {/* Hero details card overlay */}
        <div className="absolute bottom-10 left-0 right-0 z-10 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              {/* State breadcrumb */}
              <div className="inline-flex items-center space-x-1.5 rounded-full bg-primary/20 border border-primary/30 px-3 py-1 text-xs font-semibold text-orange-200 backdrop-blur-sm">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                <span>{destination.state}, India</span>
              </div>
              
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl drop-shadow-md">
                {destination.name}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-200">
                <div className="flex items-center space-x-1 font-semibold">
                  <Star className="h-4.5 w-4.5 text-amber-400 fill-amber-400" />
                  <span className="text-white">{destination.rating.toFixed(1)}</span>
                  <span className="text-zinc-300 font-normal">(Sample reviews)</span>
                </div>
                <span className="text-zinc-400">|</span>
                <span className="font-semibold text-white bg-primary/30 rounded-md px-2 py-0.5 text-xs">
                  {destination.budget} Tier
                </span>
              </div>
            </div>

            {/* Quick overview facts in hero */}
            <div className="flex flex-wrap gap-4 bg-black/40 border border-white/10 p-4 rounded-2xl backdrop-blur-md max-w-md text-white">
              <div className="flex items-start space-x-2">
                <Calendar className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">Best Season</div>
                  <div className="text-sm font-semibold">{destination.bestTime.split(' (')[0]}</div>
                </div>
              </div>
              <div className="border-l border-white/10 mx-2 hidden sm:block" />
              <div className="flex items-start space-x-2">
                <Cloud className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">Weather Status</div>
                  <div className="text-sm font-semibold">Comfortable</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. TAB SELECTION BAR */}
      <div className="sticky top-16 z-40 border-b border-border bg-background/95 backdrop-blur-md shadow-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto py-4 scrollbar-none">
            {[
              { id: 'overview', label: 'Overview & Culture', icon: BookOpen },
              { id: 'attractions', label: 'Attractions', icon: Map },
              { id: 'food', label: 'Local Food', icon: Utensils },
              { id: 'nearby', label: 'Nearby Places', icon: Navigation },
              { id: 'tips', label: 'Travel Tips', icon: Lightbulb }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as TabType)}
                  className={`flex items-center space-x-2 border-b-2 py-1 px-1 text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'border-primary text-primary'
                      : 'border-transparent text-muted-foreground hover:border-muted-foreground/30 hover:text-foreground'
                  }`}
                >
                  <Icon className="h-4.5 w-4.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. DYNAMIC CONTENT PANEL */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        
        {/* A. OVERVIEW PANEL */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 animate-in fade-in slide-in-from-bottom-4 duration-300">
            {/* Left Column: Long description, History, Culture */}
            <div className="lg:col-span-2 space-y-10">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground flex items-center space-x-2">
                  <Compass className="h-6 w-6 text-primary" />
                  <span>Discover {destination.name}</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {destination.longDescription}
                </p>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-border pt-8">
                <section className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">Culture & Lifestyle</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {destination.culture}
                  </p>
                </section>
                <section className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">Historical Legacy</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {destination.history}
                  </p>
                </section>
              </div>
            </div>

            {/* Right Column: Things To Do Checklist, Weather details */}
            <div className="space-y-8 bg-card border border-border p-6 rounded-2xl h-fit shadow-xs">
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-foreground">Quick Climate Guide</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {destination.weather}
                </p>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Must-Do Experiences</h3>
                <ul className="space-y-3">
                  {destination.thingsToDo.map((thing, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-sm text-muted-foreground leading-snug">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{thing}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* B. ATTRACTIONS PANEL */}
        {activeTab === 'attractions' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Famous Landmarks & Attractions</h2>
              <p className="text-sm text-muted-foreground">The most iconic places you absolutely must visit in {destination.name}.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destination.attractions.map((attraction, idx) => (
                <div key={idx} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-lg transition-all hover-lift">
                  <div className="relative aspect-16/10 overflow-hidden bg-zinc-100">
                    <img
                      src={attraction.image}
                      alt={attraction.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {attraction.name}
                    </h3>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <MapPin className="mr-1 h-3.5 w-3.5 text-primary" />
                      <span>{attraction.location}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {attraction.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* C. FOOD PANEL */}
        {activeTab === 'food' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Iconic Local Cuisine</h2>
              <p className="text-sm text-muted-foreground">Embark on a culinary journey and try these famous dishes native to {destination.name}.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {destination.famousFood.map((food, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-all hover-lift">
                  <div className="relative h-48 sm:h-auto sm:w-48 shrink-0 bg-zinc-100">
                    <img
                      src={food.image}
                      alt={food.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-center space-y-2">
                    <h3 className="text-lg font-bold text-foreground">
                      {food.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {food.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* D. TIPS PANEL */}
        {activeTab === 'tips' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 animate-in fade-in slide-in-from-bottom-4 duration-300">
            {/* Travel Advice Column */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Important Travel Guidelines</h2>
                <p className="text-sm text-muted-foreground">Essential suggestions for a smooth, respectful, and safe journey.</p>
              </div>

              <div className="rounded-2xl bg-amber-500/10 border border-amber-500/20 p-6 space-y-4">
                <h3 className="text-md font-bold text-amber-800 dark:text-amber-300 flex items-center space-x-2">
                  <Info className="h-5 w-5 text-amber-500" />
                  <span>Pro Tips for Visitors</span>
                </h3>
                <ul className="space-y-4">
                  {destination.travelTips.map((tip, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-sm text-muted-foreground">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/20 font-bold text-xs text-amber-600 dark:text-amber-400">
                        {idx + 1}
                      </span>
                      <span className="leading-normal">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quick Advisory Panel */}
            <div className="bg-card border border-border p-6 rounded-2xl h-fit space-y-4">
              <h3 className="text-lg font-bold text-foreground">Local Travel Stats</h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Best Season</span>
                  <span className="font-semibold">{destination.bestTime.split(' (')[0]}</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Budget Class</span>
                  <span className="font-semibold">{destination.budget}</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Languages</span>
                  <span className="font-semibold">Hindi, English</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Transport Modes</span>
                  <span className="font-semibold">Cabs, Rickshaws</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* E. NEARBY DISCOVERY PANEL */}
        {activeTab === 'nearby' && (
          <NearbyDiscovery
            destId={destination.id}
            centerLat={destination.lat}
            centerLng={destination.lng}
            centerName={destination.name}
          />
        )}

      </main>

      {/* 4. PLANNER FOOTER CTA */}
      <section className="bg-card border-t border-border py-16">
        <div className="mx-auto max-w-5xl px-4 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-foreground">
            Love {destination.name}? Plan Your Dream Itinerary
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Use our AI travel planner to generate a detailed day-wise itinerary, estimate budget costs, and order famous sights by distance.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="rounded-xl bg-primary px-6 py-3 font-bold text-primary-foreground hover:bg-primary/95 transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer">
              Generate AI Itinerary
            </button>
            <button
              onClick={() => router.push('/')}
              className="rounded-xl border border-border bg-background px-6 py-3 font-semibold text-foreground hover:bg-muted transition-all cursor-pointer"
            >
              Explore Other Places
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
