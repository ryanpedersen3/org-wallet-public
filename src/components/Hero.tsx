
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, VerifiedIcon, CheckCircle, Edit, Save, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Form, FormField, FormItem, FormControl } from '@/components/ui/form';
import { useForm } from 'react-hook-form';

// Define the form data structure
type HeroFormData = {
  heading: string;
  subheading: string;
  description: string;
  trustScore: number;
};

const Hero = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [heroData, setHeroData] = useState({
    heading: "Your Organization's",
    subheading: "Digital Smart Wallet",
    description: "Securely manage your organization's digital certificates, domain ownership, social identities, and present verifiable credentials to partners and customers.",
    trustScore: 92
  });

  // Initialize the form with current values
  const form = useForm<HeroFormData>({
    defaultValues: heroData
  });

  // Toggle edit mode
  const toggleEditMode = () => {
    if (isEditing) {
      // When canceling edit mode, reset form values
      form.reset(heroData);
    }
    setIsEditing(!isEditing);
  };

  // Save changes
  const saveChanges = (data: HeroFormData) => {
    setHeroData(data);
    setIsEditing(false);
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-end mb-4">
          {!isEditing ? (
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-1"
              onClick={toggleEditMode}
            >
              <Edit className="h-4 w-4" />
              Edit Content
            </Button>
          ) : (
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center gap-1 text-red-500 border-red-500 hover:bg-red-50"
                onClick={toggleEditMode}
              >
                <X className="h-4 w-4" />
                Cancel
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center gap-1 text-green-500 border-green-500 hover:bg-green-50"
                onClick={form.handleSubmit(saveChanges)}
              >
                <Save className="h-4 w-4" />
                Save Changes
              </Button>
            </div>
          )}
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:space-x-12">
          <div className="md:w-1/2 space-y-6 md:space-y-8 mb-10 md:mb-0 animate-fade-in">
            {!isEditing ? (
              <>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  {heroData.heading} <span className="gradient-text">{heroData.subheading}</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-xl">
                  {heroData.description}
                </p>
              </>
            ) : (
              <Form {...form}>
                <form className="space-y-4">
                  <FormField
                    control={form.control}
                    name="heading"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            placeholder="Heading" 
                            className="text-xl font-bold" 
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subheading"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            placeholder="Subheading" 
                            className="text-xl font-bold text-brand-blue" 
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <textarea 
                            placeholder="Description" 
                            className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-base"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </form>
              </Form>
            )}

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
                      {isEditing ? (
                        <FormField
                          control={form.control}
                          name="trustScore"
                          render={({ field }) => (
                            <FormItem className="w-24 mr-2">
                              <FormControl>
                                <Input 
                                  type="number" 
                                  min="0" 
                                  max="100" 
                                  className="h-8 p-1"
                                  {...field}
                                  onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      ) : (
                        <span className="text-green-500 font-bold mr-2">{heroData.trustScore}%</span>
                      )}
                      <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-green-500 rounded-full" 
                          style={{ width: `${isEditing ? form.watch('trustScore') : heroData.trustScore}%` }}
                        ></div>
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
