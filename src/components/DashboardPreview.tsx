
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  BarChart3, 
  Wallet, 
  Shield, 
  Globe, 
  FileCheck, 
  Users, 
  PlusCircle,
  Bell,
  User,
  Settings
} from 'lucide-react';

const DashboardPreview = () => {
  return (
    <section id="dashboard" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Management Dashboard</h2>
          <p className="text-lg text-gray-600">
            Take control of your organization's digital identity with our intuitive dashboard - manage all your attestations in one secure place.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
          <div className="grid grid-cols-12">
            {/* Sidebar */}
            <div className="hidden md:block col-span-2 bg-gray-50 border-r border-gray-200 py-8">
              <div className="px-4 mb-8">
                <div className="font-bold text-xl text-brand-blue">MyOrgWallet</div>
              </div>
              <nav className="space-y-1 px-2">
                <a className="flex items-center py-3 px-4 bg-brand-blue text-white rounded-md">
                  <BarChart3 className="h-5 w-5 mr-3" />
                  <span>Dashboard</span>
                </a>
                <a className="flex items-center py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-md">
                  <Wallet className="h-5 w-5 mr-3" />
                  <span>My Wallet</span>
                </a>
                <a className="flex items-center py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-md">
                  <Shield className="h-5 w-5 mr-3" />
                  <span>Certificates</span>
                </a>
                <a className="flex items-center py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-md">
                  <Globe className="h-5 w-5 mr-3" />
                  <span>Domains</span>
                </a>
                <a className="flex items-center py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-md">
                  <FileCheck className="h-5 w-5 mr-3" />
                  <span>Registrations</span>
                </a>
                <a className="flex items-center py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-md">
                  <Users className="h-5 w-5 mr-3" />
                  <span>Team</span>
                </a>
                <a className="flex items-center py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-md">
                  <Settings className="h-5 w-5 mr-3" />
                  <span>Settings</span>
                </a>
              </nav>
            </div>
            
            {/* Main content */}
            <div className="col-span-12 md:col-span-10">
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold">Dashboard Overview</h3>
                <div className="flex items-center space-x-4">
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <Bell className="h-5 w-5 text-gray-600" />
                  </button>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center text-white">
                      <User className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium">Acme Corp</span>
                  </div>
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Total Attestations</p>
                      <h4 className="text-2xl font-bold">24</h4>
                    </div>
                    <div className="bg-blue-100 p-2 rounded-md">
                      <FileCheck className="h-6 w-6 text-brand-blue" />
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-green-600 flex items-center">
                    <span className="font-medium">+3 this month</span>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-lg p-6 border border-green-100">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Trust Score</p>
                      <h4 className="text-2xl font-bold">92%</h4>
                    </div>
                    <div className="bg-green-100 p-2 rounded-md">
                      <Shield className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-green-600 flex items-center">
                    <span className="font-medium">+4% from last month</span>
                  </div>
                </div>
                
                <div className="bg-amber-50 rounded-lg p-6 border border-amber-100">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Verified Domains</p>
                      <h4 className="text-2xl font-bold">3</h4>
                    </div>
                    <div className="bg-amber-100 p-2 rounded-md">
                      <Globe className="h-6 w-6 text-amber-600" />
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-gray-600 flex items-center">
                    <span className="font-medium">All active</span>
                  </div>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-6 border border-purple-100">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Team Members</p>
                      <h4 className="text-2xl font-bold">5</h4>
                    </div>
                    <div className="bg-purple-100 p-2 rounded-md">
                      <Users className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-purple-600 flex items-center">
                    <span className="font-medium">3 admins, 2 viewers</span>
                  </div>
                </div>
              </div>
              
              {/* Recent activity */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-lg font-semibold">Recent Activity</h4>
                  <Button variant="outline" size="sm" className="text-brand-blue border-brand-blue">
                    View All
                  </Button>
                </div>
                
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Event
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Type
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">SSL Certificate Renewed</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">Certificate</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">Apr 10, 2025</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Completed
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">Domain Verification</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">Domain</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">Apr 8, 2025</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Verified
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">Team Member Added</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">Team</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">Apr 5, 2025</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Completed
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">Social Account Linked</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">Social</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">Apr 3, 2025</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Verified
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              {/* Action buttons */}
              <div className="p-6 border-t border-gray-200">
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-brand-blue hover:bg-brand-darkblue flex items-center">
                    <PlusCircle className="h-4 w-4 mr-2" /> Add New Attestation
                  </Button>
                  <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
                    Generate Trust Report
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
