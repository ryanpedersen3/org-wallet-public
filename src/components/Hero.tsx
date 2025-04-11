
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, VerifiedIcon, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-12">
          <div className="md:w-1/2 space-y-6 md:space-y-8 mb-10 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your Organization's <span className="gradient-text">Digital Trust Wallet</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-xl">
              Securely manage your organization's digital certificates, domain ownership, social identities, and present verifiable credentials to partners and customers.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-2">
              <Button className="btn-primary text-base">Create Your Wallet</Button>
              <Button variant="outline" className="btn-secondary text-base">See Demo</Button>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Secure & Trusted</span>
              </div>
              <div className="flex items-center space-x-2">
                <VerifiedIcon className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Verifiable Credentials</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Web3 Standards</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-brand-blue text-white p-4 font-medium">MyOrgWallet Dashboard</div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                    <div className="font-medium">Organization Trust Score</div>
                    <div className="flex items-center">
                      <span className="text-green-500 font-bold mr-2">92%</span>
                      <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: '92%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <div className="text-sm text-gray-500">Verified Domains</div>
                      <div className="text-2xl font-bold text-brand-blue">3</div>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                      <div className="text-sm text-gray-500">SSL Certificates</div>
                      <div className="text-2xl font-bold text-green-600">5</div>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
                      <div className="text-sm text-gray-500">Social Accounts</div>
                      <div className="text-2xl font-bold text-purple-600">4</div>
                    </div>
                    <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
                      <div className="text-sm text-gray-500">Business Attestations</div>
                      <div className="text-2xl font-bold text-amber-600">7</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 to-brand-lightblue/20 rounded-2xl -m-4 blur-xl animate-pulse-soft"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
