"use client";

import { useState } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { BookingForm } from "@/components/sections/BookingForm";
import { FloatingWhatsApp } from "@/components/sections/FloatingWhatsApp";
import { Hero } from "@/components/sections/Hero";
import { Portfolio } from "@/components/sections/Portfolio";
import { Services } from "@/components/sections/Services";
import { WhyWMfilms } from "@/components/sections/WhyWMfilms";
import { Workflow } from "@/components/sections/Workflow";

export function HomePage() {
  const [selectedServiceId, setSelectedServiceId] = useState("");

  function handleSelectService(serviceId: string) {
    setSelectedServiceId(serviceId);

    window.requestAnimationFrame(() => {
      document.getElementById("booking")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services onSelectService={handleSelectService} />
        <Portfolio />
        <WhyWMfilms />
        <Workflow />
        <BookingForm
          selectedServiceId={selectedServiceId}
          onServiceChange={setSelectedServiceId}
        />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
