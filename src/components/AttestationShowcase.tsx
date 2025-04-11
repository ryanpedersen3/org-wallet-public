
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Shield, 
  Globe, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Building, 
  FileCheck,
  CheckCircle
} from 'lucide-react';

const AttestationShowcase = () => {
  return (
    <section id="attestations" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Showcase Your Digital Attestations</h2>
          <p className="text-lg text-gray-600">
            Build trust with partners and customers by sharing verifiable credentials that prove your organization's identity and claims.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-3 mb-4">
            <h3 className="text-xl font-semibold text-brand-blue">Domain Ownership</h3>
          </div>
          
          <Card className="attestation-card">
            <CardContent className="p-0">
              <div className="flex items-start p-6">
                <div className="mr-4 mt-1">
                  <Globe className="h-8 w-8 text-green-500" />
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <h4 className="font-semibold text-lg">example.com</h4>
                    <span className="ml-2 bg-green-100 text-green-700 text-xs py-1 px-2 rounded-full flex items-center">
                      <CheckCircle className="h-3 w-3 mr-1" /> Verified
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">Domain verified through DNS record validation</p>
                  <div className="text-xs text-gray-500">Verified on Apr 3, 2025 • Valid until Apr 3, 2026</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="attestation-card">
            <CardContent className="p-0">
              <div className="flex items-start p-6">
                <div className="mr-4 mt-1">
                  <Shield className="h-8 w-8 text-green-500" />
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <h4 className="font-semibold text-lg">SSL Certificate</h4>
                    <span className="ml-2 bg-green-100 text-green-700 text-xs py-1 px-2 rounded-full flex items-center">
                      <CheckCircle className="h-3 w-3 mr-1" /> Active
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">DigiCert SSL Certificate for example.com</p>
                  <div className="text-xs text-gray-500">Issued on Feb 15, 2025 • Expires Feb 15, 2026</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="attestation-card">
            <CardContent className="p-0">
              <div className="flex items-start p-6">
                <div className="mr-4 mt-1">
                  <FileCheck className="h-8 w-8 text-green-500" />
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <h4 className="font-semibold text-lg">DNS Configuration</h4>
                    <span className="ml-2 bg-green-100 text-green-700 text-xs py-1 px-2 rounded-full flex items-center">
                      <CheckCircle className="h-3 w-3 mr-1" /> Verified
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">Properly configured DNS records with SPF, DKIM and DMARC</p>
                  <div className="text-xs text-gray-500">Last verified on Apr 1, 2025</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="col-span-1 md:col-span-3 mb-4 mt-8">
            <h3 className="text-xl font-semibold text-brand-blue">Social Accounts</h3>
          </div>
          
          <Card className="attestation-card">
            <CardContent className="p-0">
              <div className="flex items-start p-6">
                <div className="mr-4 mt-1">
                  <Linkedin className="h-8 w-8 text-[#0A66C2]" />
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <h4 className="font-semibold text-lg">LinkedIn</h4>
                    <span className="ml-2 bg-green-100 text-green-700 text-xs py-1 px-2 rounded-full flex items-center">
                      <CheckCircle className="h-3 w-3 mr-1" /> Verified
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">linkedin.com/company/example-company</p>
                  <div className="text-xs text-gray-500">Connected on Mar 12, 2025</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="attestation-card">
            <CardContent className="p-0">
              <div className="flex items-start p-6">
                <div className="mr-4 mt-1">
                  <Twitter className="h-8 w-8 text-[#1DA1F2]" />
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <h4 className="font-semibold text-lg">Twitter</h4>
                    <span className="ml-2 bg-green-100 text-green-700 text-xs py-1 px-2 rounded-full flex items-center">
                      <CheckCircle className="h-3 w-3 mr-1" /> Verified
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">twitter.com/examplecompany</p>
                  <div className="text-xs text-gray-500">Connected on Mar 10, 2025</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="attestation-card">
            <CardContent className="p-0">
              <div className="flex items-start p-6">
                <div className="mr-4 mt-1">
                  <Facebook className="h-8 w-8 text-[#1877F2]" />
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <h4 className="font-semibold text-lg">Facebook</h4>
                    <span className="ml-2 bg-green-100 text-green-700 text-xs py-1 px-2 rounded-full flex items-center">
                      <CheckCircle className="h-3 w-3 mr-1" /> Verified
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">facebook.com/examplecompany</p>
                  <div className="text-xs text-gray-500">Connected on Feb 28, 2025</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="col-span-1 md:col-span-3 mb-4 mt-8">
            <h3 className="text-xl font-semibold text-brand-blue">Business Registrations</h3>
          </div>
          
          <Card className="attestation-card">
            <CardContent className="p-0">
              <div className="flex items-start p-6">
                <div className="mr-4 mt-1">
                  <Building className="h-8 w-8 text-amber-500" />
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <h4 className="font-semibold text-lg">Business Registration</h4>
                    <span className="ml-2 bg-green-100 text-green-700 text-xs py-1 px-2 rounded-full flex items-center">
                      <CheckCircle className="h-3 w-3 mr-1" /> Verified
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">Delaware Corporation #12345678</p>
                  <div className="text-xs text-gray-500">Registered on Jan 15, 2022 • Good Standing</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="attestation-card">
            <CardContent className="p-0">
              <div className="flex items-start p-6">
                <div className="mr-4 mt-1">
                  <FileCheck className="h-8 w-8 text-amber-500" />
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <h4 className="font-semibold text-lg">Tax Registration</h4>
                    <span className="ml-2 bg-green-100 text-green-700 text-xs py-1 px-2 rounded-full flex items-center">
                      <CheckCircle className="h-3 w-3 mr-1" /> Verified
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">EIN: XX-XXXXXXX</p>
                  <div className="text-xs text-gray-500">Verified on Feb 20, 2025</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="attestation-card">
            <CardContent className="p-0">
              <div className="flex items-start p-6">
                <div className="mr-4 mt-1">
                  <Shield className="h-8 w-8 text-amber-500" />
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <h4 className="font-semibold text-lg">Business License</h4>
                    <span className="ml-2 bg-green-100 text-green-700 text-xs py-1 px-2 rounded-full flex items-center">
                      <CheckCircle className="h-3 w-3 mr-1" /> Active
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">City of San Francisco Business License</p>
                  <div className="text-xs text-gray-500">Issued on Mar 1, 2025 • Expires Mar 1, 2026</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AttestationShowcase;
