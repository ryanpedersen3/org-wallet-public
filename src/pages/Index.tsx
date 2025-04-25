
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import AttestationShowcase from '@/components/AttestationShowcase';
import DashboardPreview from '@/components/DashboardPreview';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <AttestationShowcase />
        <DashboardPreview />
        
        {/* CTA Section */}
        <section className="py-16 bg-brand-blue">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to build digital trust for your organization?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Create your MyOrgWallet today! and start managing your digital identity credentials with confidence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-white text-brand-blue hover:bg-gray-100 font-semibold py-3 px-8 text-lg">
                Get Started for Free
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 font-semibold py-3 px-8 text-lg">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
