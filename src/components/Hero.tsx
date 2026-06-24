"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Search, MapPin, Calendar, Sparkles } from 'lucide-react';
import { destinations } from '@/data/destinations';

export default function Hero() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<typeof destinations>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [budget, setBudget] = useState('any');
  const [style, setStyle] = useState('any');
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle clicking outside suggestions to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Update autocomplete list based on input query
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    if (val.trim().length > 0) {
      const filtered = destinations.filter(
        (d) =>
          d.name.toLowerCase().includes(val.toLowerCase()) ||
          d.state.toLowerCase().includes(val.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  // Handle suggestion selection
  const selectSuggestion = (id: string, name: string) => {
    setQuery(name);
    setShowSuggestions(false);
    router.push(`/destinations/${id}`);
  };

  // Handle search submit button
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    // Check if exact match exists in mock dataset
    const matched = destinations.find(
      (d) => d.name.toLowerCase() === query.trim().toLowerCase()
    );

    if (matched) {
      router.push(`/destinations/${matched.id}`);
    } else {
      // Find closest fuzzy match, or fallback to first matching query
      const fuzzyMatch = destinations.find(
        (d) =>
          d.name.toLowerCase().includes(query.toLowerCase()) ||
          d.state.toLowerCase().includes(query.toLowerCase())
      );
      if (fuzzyMatch) {
        router.push(`/destinations/${fuzzyMatch.id}`);
      } else {
        alert(`We couldn't find "${query}" in our sample destinations. Try "Jaipur", "Goa", "Munnar", or "Ladakh"!`);
      }
    }
  };

  return (
    <div className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-zinc-900 px-4 py-20 sm:px-6 lg:px-8">
      {/* Background Image with Premium Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 scale-105"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/45 to-background" />

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Animated Badge */}
        <div className="inline-flex items-center space-x-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md text-sm text-primary-foreground font-medium mb-6 animate-fade-in">
          <Sparkles className="h-4 w-4 text-amber-400 fill-amber-400" />
          <span>India\'s Premium Travel Startup</span>
        </div>

        {/* Catchy Main Heading */}
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl animate-slide-up">
          Discover the <span className="text-primary bg-linear-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Soul of India</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-200 sm:text-xl">
          From majestic forts and desert dunes to tranquil hill stations and tropical backwaters, plan your customized Indian escape.
        </p>

        {/* Search Engine Container */}
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-lg shadow-2xl dark:border-zinc-800/50 dark:bg-black/40">
          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 gap-3 sm:grid-cols-4">
            
            {/* Destination Input Field with Autocomplete */}
            <div className="relative sm:col-span-2 text-left" ref={containerRef}>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 px-1 mb-1">
                Where to?
              </label>
              <div className="relative">
                <MapPin className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-zinc-400" />
                <input
                  type="text"
                  value={query}
                  onChange={handleInputChange}
                  onFocus={() => query.trim().length > 0 && setShowSuggestions(true)}
                  placeholder="e.g. Jaipur, Munnar, Goa..."
                  className="w-full rounded-xl border border-white/10 bg-white/10 py-3 pr-4 pl-10 text-white placeholder-zinc-400 outline-hidden backdrop-blur-sm transition-all focus:border-primary focus:bg-white/20 text-sm"
                />
              </div>

              {/* Suggestions Dropdown Menu */}
              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute left-0 right-0 z-50 mt-2 max-h-60 overflow-y-auto rounded-xl border border-zinc-200 bg-white p-2 shadow-2xl dark:border-zinc-800 dark:bg-zinc-950">
                  <div className="px-2 py-1 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                    Recommended Destinations
                  </div>
                  {suggestions.map((dest) => (
                    <button
                      key={dest.id}
                      type="button"
                      onClick={() => selectSuggestion(dest.id, dest.name)}
                      className="flex w-full items-center space-x-3 rounded-lg px-3 py-2 text-left text-sm hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
                    >
                      <MapPin className="h-4 w-4 text-primary" />
                      <div>
                        <div className="font-semibold text-zinc-900 dark:text-zinc-100">
                          {dest.name}
                        </div>
                        <div className="text-xs text-zinc-500 dark:text-zinc-400">
                          {dest.state}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Travel Budget Selector */}
            <div className="text-left">
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 px-1 mb-1">
                Budget
              </label>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/10 py-3 px-3 text-white outline-hidden backdrop-blur-sm transition-all focus:border-primary focus:bg-white/20 text-sm cursor-pointer"
              >
                <option value="any" className="text-zinc-900 dark:text-zinc-100 dark:bg-zinc-950">Any Budget</option>
                <option value="Budget" className="text-zinc-900 dark:text-zinc-100 dark:bg-zinc-950">Budget</option>
                <option value="Mid-Range" className="text-zinc-900 dark:text-zinc-100 dark:bg-zinc-950">Mid-Range</option>
                <option value="Luxury" className="text-zinc-900 dark:text-zinc-100 dark:bg-zinc-950">Luxury</option>
              </select>
            </div>

            {/* Travel style/type Selector */}
            <div className="flex items-end">
              <button
                type="submit"
                className="flex w-full items-center justify-center space-x-2 rounded-xl bg-primary py-3 px-4 font-bold text-primary-foreground hover:bg-primary/95 transition-all shadow-lg cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <Search className="h-5 w-5" />
                <span>Search</span>
              </button>
            </div>

          </form>
        </div>

        {/* Popular Tags */}
        <div className="mt-8 flex items-center justify-center space-x-3 text-sm text-zinc-300">
          <span className="font-semibold text-zinc-400">Try searching:</span>
          {['Jaipur', 'Goa', 'Ladakh'].map((val) => (
            <button
              key={val}
              onClick={() => {
                const target = destinations.find(d => d.name === val);
                if (target) router.push(`/destinations/${target.id}`);
              }}
              className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs hover:bg-white/15 transition-all cursor-pointer"
            >
              {val}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
