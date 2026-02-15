import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";

// Lazy load below-the-fold sections
const WhatWeDo = lazy(() => import("@/components/WhatWeDo"));
const Services = lazy(() => import("@/components/Services"));
const HowWeWork = lazy(() => import("@/components/HowWeWork"));
const Nichos = lazy(() => import("@/components/Nichos"));
const ImpactMetrics = lazy(() => import("@/components/ImpactMetrics"));
const Benefits = lazy(() => import("@/components/Benefits"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const SectionFallback = () => (
  <div className="section-padding">
    <div className="container-narrow mx-auto animate-pulse space-y-6">
      <div className="h-10 w-2/3 mx-auto rounded bg-muted/30" />
      <div className="h-4 w-1/2 mx-auto rounded bg-muted/20" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-48 rounded-xl bg-muted/10" />
        ))}
      </div>
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <WhatWeDo />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Services />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <HowWeWork />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Nichos />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ImpactMetrics />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Benefits />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
