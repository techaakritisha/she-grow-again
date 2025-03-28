
import React from "react";
import { Shield, Check, AlertTriangle, MessageSquare } from "lucide-react";
import AnimatedPage from "./AnimatedPage";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const TransparencyReport: React.FC = () => {
  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Feedback Submitted",
      description: "Thank you for your feedback. We'll review it promptly.",
    });
  };

  return (
    <AnimatedPage className="page-container">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="section-title">Transparency & Bias Mitigation</h2>
          <p className="section-subtitle">
            Our commitment to addressing systemic biases and creating a fair financial platform for all women entrepreneurs.
          </p>
        </div>

        <div className="mb-10">
          <Card>
            <CardHeader>
              <div className="flex items-center mb-2">
                <Shield className="h-5 w-5 text-purple-500 mr-2" />
                <CardTitle>Our Approach to Fairness</CardTitle>
              </div>
              <CardDescription>
                How we're working to eliminate historical biases in financial services
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Addressing Algorithmic Bias</h3>
                <p className="text-gray-600">
                  Our AI credit evaluation system is regularly audited by independent third parties to ensure it does not perpetuate historical biases. We train our models on diverse datasets that represent a wide range of business types, sizes, and owner backgrounds.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Alternative Evaluation Metrics</h3>
                <p className="text-gray-600">
                  Traditional credit scoring systems often disadvantage women entrepreneurs. Our platform uses alternative metrics that better reflect business potential, such as growth rate, customer retention, and market adaptation rather than solely focusing on credit history or collateral.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Transparent Decision-Making</h3>
                <p className="text-gray-600">
                  We provide clear explanations for all credit decisions, showing which factors influenced the outcome and offering actionable steps for improvement. No more "black box" lending decisions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <Card>
            <CardHeader>
              <div className="flex items-center mb-2">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <CardTitle>Our Commitments</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-3 w-3 text-green-600" />
                  </div>
                  <p className="text-gray-600">Regular bias audits by third-party experts</p>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-3 w-3 text-green-600" />
                  </div>
                  <p className="text-gray-600">Diverse representation in our product development team</p>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-3 w-3 text-green-600" />
                  </div>
                  <p className="text-gray-600">Continuous community feedback integration</p>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-3 w-3 text-green-600" />
                  </div>
                  <p className="text-gray-600">Transparent impact reporting</p>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-3 w-3 text-green-600" />
                  </div>
                  <p className="text-gray-600">Education on systemic financial barriers</p>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center mb-2">
                <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
                <CardTitle>Areas for Improvement</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                We believe in transparency about our challenges. Here are areas we're actively working to improve:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-amber-100 flex items-center justify-center mr-3 mt-0.5">
                    <AlertTriangle className="h-3 w-3 text-amber-600" />
                  </div>
                  <p className="text-gray-600">Expanding our alternative data sources for rural entrepreneurs</p>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-amber-100 flex items-center justify-center mr-3 mt-0.5">
                    <AlertTriangle className="h-3 w-3 text-amber-600" />
                  </div>
                  <p className="text-gray-600">Incorporating more industry-specific success metrics</p>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-amber-100 flex items-center justify-center mr-3 mt-0.5">
                    <AlertTriangle className="h-3 w-3 text-amber-600" />
                  </div>
                  <p className="text-gray-600">Increasing accessibility features for users with disabilities</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mb-8">
          <Card>
            <CardHeader>
              <div className="flex items-center mb-2">
                <MessageSquare className="h-5 w-5 text-purple-500 mr-2" />
                <CardTitle>Report a Concern</CardTitle>
              </div>
              <CardDescription>
                Help us improve by sharing your feedback or reporting potential biases
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="concern-type">Type of Concern</Label>
                  <select 
                    id="concern-type"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="algorithm">Algorithm Bias</option>
                    <option value="interface">User Interface Issue</option>
                    <option value="language">Problematic Language</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <textarea 
                    id="description"
                    className="min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    placeholder="Please describe the issue or concern in detail"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Your Email</Label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                  />
                  <p className="text-xs text-gray-500">We'll only use this to follow up on your report if needed.</p>
                </div>
                
                <Button type="submit" className="w-full">Submit Feedback</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default TransparencyReport;