import React from 'react';
import Hero from '@/components/Hero';
import FeaturedDestinations from '@/components/FeaturedDestinations';
import { ShieldCheck, Compass, Sparkles, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex-1">
      {/* 1. Hero & Search Section */}
      <Hero />

      {/* 2. Curated Experiences Section */}
      <section id="experiences" className="py-20 bg-muted/30 border-y border-border scroll-mt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Curated Indian Experiences
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Explore the rich tapestry of India themed by your personal style of travel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Royal Heritage",
                desc: "Walk through majestic palaces, massive sandstone forts, and royal heritage courts.",
                icon: ShieldCheck,
                color: "from-amber-500 to-orange-600"
              },
              {
                title: "Spiritual Journeys",
                desc: "Experience morning prayers along holy rivers, ancient temples, and calm ashrams.",
                icon: Compass,
                color: "from-orange-500 to-red-600"
              },
              {
                title: "Tropical Paradise",
                desc: "Relax under coconut palms, sail backwater houseboats, and feel the sea breeze.",
                icon: Sparkles,
                color: "from-emerald-500 to-teal-600"
              },
              {
                title: "Mountain Escapes",
                desc: "Discover high mountain roads, snowy valleys, mist gardens, and tea plantations.",
                icon: MapPin,
                color: "from-sky-500 to-indigo-600"
              }
            ].map((exp, idx) => {
              const Icon = exp.icon;
              return (
                <div
                  key={idx}
                  className="relative group overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-xs hover:shadow-lg transition-all hover-lift"
                >
                  <div className={`inline-flex items-center justify-center rounded-xl bg-linear-to-br ${exp.color} p-3 text-white shadow-md mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Featured Destinations (Cards and details) */}
      <FeaturedDestinations />

      {/* 4. AI Travel Assistant Preview Widget */}
      <section id="planner" className="py-20 bg-linear-to-br from-primary/10 via-background to-background border-t border-border scroll-mt-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-primary/20 bg-card p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center gap-10">
            <div className="space-y-6 md:w-3/5">
              <div className="inline-flex items-center space-x-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                <span>AI Travel Assistant</span>
              </div>
              <h2 className="text-3xl font-extrabold text-foreground tracking-tight sm:text-4xl">
                Ready to customize your Indian journey?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Enter your preferred style, select a budget, and let our smart travel assistant construct a dynamic day-wise itinerary, list attractions sorted by distance, and offer local recommendations instantly.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-semibold text-muted-foreground">
                <span className="flex items-center"><ShieldCheck className="h-4 w-4 mr-1 text-primary" /> Verified Tips</span>
                <span className="flex items-center"><Compass className="h-4 w-4 mr-1 text-primary" /> Multi-Route Navigation</span>
                <span className="flex items-center"><MapPin className="h-4 w-4 mr-1 text-primary" /> Real-time Weather Updates</span>
              </div>
            </div>
            <div className="bg-muted border border-border p-6 rounded-2xl w-full md:w-2/5 space-y-4">
              <div className="font-semibold text-foreground text-sm flex items-center justify-between">
                <span>AI Prompt Example</span>
                <Sparkles className="h-4 w-4 text-amber-500 fill-amber-500 animate-pulse" />
              </div>
              <div className="bg-background border border-border rounded-xl p-3.5 text-xs text-muted-foreground italic shadow-xs">
                "Recommend a 4-day heritage tour of Jaipur for a family of 3 with a mid-range budget, focusing on historical forts and local Rajasthani dinner places..."
              </div>
              <button className="w-full rounded-xl bg-primary py-3 px-4 text-sm font-bold text-primary-foreground hover:bg-primary/95 transition-all shadow-md cursor-pointer hover:scale-102">
                Launch AI Planner
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
