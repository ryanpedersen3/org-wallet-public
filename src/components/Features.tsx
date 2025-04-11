import React from 'react';
import { 
  Shield, 
  Link, 
  Globe, 
  Database, 
  Share2, 
  UserCheck, 
  FileCheck, 
  QrCode,
  Umbrella 
} from 'lucide-react';

const features = [
  {
    icon: <Shield className="h-10 w-10 text-brand-blue" />,
    title: "Digital Certificate Management",
    description: "Securely store and manage all your organization's digital certificates in one place."
  },
  {
    icon: <Globe className="h-10 w-10 text-brand-blue" />,
    title: "Domain Ownership Verification",
    description: "Prove ownership of your domains with verifiable attestations that build trust."
  },
  {
    icon: <Link className="h-10 w-10 text-brand-blue" />,
    title: "Social Account Linking",
    description: "Connect and verify your organization's social media accounts to boost credibility."
  },
  {
    icon: <Database className="h-10 w-10 text-brand-blue" />,
    title: "Secure Credential Storage",
    description: "Store sensitive business credentials with enterprise-grade security and encryption."
  },
  {
    icon: <Umbrella className="h-10 w-10 text-brand-blue" />,
    title: "Insurance Certificate Verification",
    description: "Manage and share verifiable Certificates of Insurance (COI) with partners and clients."
  },
  {
    icon: <Share2 className="h-10 w-10 text-brand-blue" />,
    title: "Selective Disclosure",
    description: "Share only the credentials you choose with partners and customers."
  },
  {
    icon: <UserCheck className="h-10 w-10 text-brand-blue" />,
    title: "Partner Verification",
    description: "Verify the identity and credentials of your business partners easily."
  },
  {
    icon: <FileCheck className="h-10 w-10 text-brand-blue" />,
    title: "Business Registration Proof",
    description: "Manage and share your state registrations and business licenses."
  },
  {
    icon: <QrCode className="h-10 w-10 text-brand-blue" />,
    title: "QR Code Sharing",
    description: "Generate QR codes to share your wallet or specific attestations with others."
  },
  {
    icon: <Shield className="h-10 w-10 text-brand-blue" />,
    title: "Digital Attestation Management",
    description: "Securely store and manage all your organization's digital attestations in one place."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Digital Trust Features</h2>
          <p className="text-lg text-gray-600">
            MyOrgWallet provides everything your organization needs to establish, manage, and share your digital trust credentials.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
