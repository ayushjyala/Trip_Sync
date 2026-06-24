"use client";

import React, { useEffect, useRef } from 'react';

interface MapPlace {
  name: string;
  lat: number;
  lng: number;
  rating: number;
  address: string;
  type: string;
  distance?: number;
}

interface InteractiveMapProps {
  centerLat: number;
  centerLng: number;
  centerName: string;
  places: MapPlace[];
  activeType: string;
}

export default function InteractiveMap({
  centerLat,
  centerLng,
  centerName,
  places,
  activeType
}: InteractiveMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    let mapInstance: any;

    const initMap = async () => {
      // Dynamic imports of Leaflet to avoid SSR errors
      const L = (await import('leaflet')).default;
      await import('leaflet/dist/leaflet.css');

      // Prevent duplicate map initialization
      if (mapRef.current) {
        mapInstance = mapRef.current;
        mapInstance.setView([centerLat, centerLng], 13);
      } else {
        mapInstance = L.map(mapContainerRef.current!).setView([centerLat, centerLng], 13);
        
        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          maxZoom: 20
        }).addTo(mapInstance);
        
        mapRef.current = mapInstance;
      }

      // 1. Clear previous markers
      markersRef.current.forEach((marker) => marker.remove());
      markersRef.current = [];

      // 2. Add Center Destination Marker (Orange Lotus/Dot style)
      const centerIcon = L.divIcon({
        html: `
          <div class="relative flex items-center justify-center">
            <span class="absolute inline-flex h-8 w-8 animate-ping rounded-full bg-orange-400 opacity-75"></span>
            <div class="relative h-5 w-5 rounded-full bg-orange-600 border-2 border-white shadow-lg flex items-center justify-center text-white text-[9px] font-extrabold">I</div>
          </div>
        `,
        className: 'center-marker-icon',
        iconSize: [32, 32],
        iconAnchor: [16, 16]
      });

      const centerMarker = L.marker([centerLat, centerLng], { icon: centerIcon })
        .addTo(mapInstance)
        .bindPopup(`
          <div class="p-1">
            <h4 class="font-extrabold text-sm text-zinc-900">${centerName}</h4>
            <p class="text-xs text-zinc-500 m-0">Destination Center</p>
          </div>
        `);
      
      markersRef.current.push(centerMarker);

      // 3. Add Category Markers
      places.forEach((place) => {
        let markerColor = '#f97316'; // Food (Saffron)
        let labelChar = 'F';
        
        if (place.type === 'hotel') {
          markerColor = '#10b981'; // Hotel (Green)
          labelChar = 'H';
        } else if (place.type === 'hostel') {
          markerColor = '#06b6d4'; // Hostel (Teal)
          labelChar = 'Y';
        }

        const placeIcon = L.divIcon({
          html: `
            <div class="flex items-center justify-center hover:scale-110 transition-transform">
              <div class="h-6 w-6 rounded-full flex items-center justify-center text-white text-[10px] font-bold border-2 border-white shadow-md" style="background-color: ${markerColor};">
                ${labelChar}
              </div>
            </div>
          `,
          className: 'place-marker-icon',
          iconSize: [24, 24],
          iconAnchor: [12, 12]
        });

        const distanceText = place.distance !== undefined ? `<div class="text-xs text-primary font-bold mt-1">${place.distance} km away</div>` : '';

        const marker = L.marker([place.lat, place.lng], { icon: placeIcon })
          .addTo(mapInstance)
          .bindPopup(`
            <div class="p-1 space-y-1">
              <h4 class="font-extrabold text-sm text-zinc-900 m-0">${place.name}</h4>
              <div class="flex items-center text-xs text-amber-500 font-semibold">
                ★ ${place.rating.toFixed(1)}
              </div>
              <p class="text-xs text-zinc-500 m-0">${place.address}</p>
              ${distanceText}
            </div>
          `);

        markersRef.current.push(marker);
      });
    };

    initMap();

    // Cleanup on unmount
    return () => {
      // Clear markers
      markersRef.current.forEach((marker) => marker.remove());
      markersRef.current = [];
    };
  }, [centerLat, centerLng, centerName, places, activeType]);

  // Handle destruction of map on component unmount
  useEffect(() => {
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative h-full w-full rounded-2xl overflow-hidden border border-border shadow-inner">
      <div ref={mapContainerRef} className="h-full w-full min-h-[350px] md:min-h-[450px]" style={{ zIndex: 10 }} />
    </div>
  );
}
