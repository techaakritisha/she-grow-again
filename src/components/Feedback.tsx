
import React, { useState } from "react";
import AnimatedPage from "./AnimatedPage";
import { MessageSquare, Send, Smile, Frown, Meh } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const Feedback: React.FC = () => {
  const [sentiment, setSentiment] = useState<"positive" | "neutral" | "negative" | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSentimentSelect = (value: "positive" | "neutral" | "negative") => {
    setSentiment(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Thank you for your feedback!",
        description: "We appreciate your input and will use it to improve our platform.",
      });
      
      // Reset form
      setSentiment(null);
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 1000);
  };

  return (
    <AnimatedPage className="page-container">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h2 className="section-title">Share Your Feedback</h2>
          <p className="section-subtitle">
            Your thoughts help us build a better platform for women entrepreneurs
          </p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <MessageSquare className="h-5 w-5 text-purple-500" />
              <CardTitle>We're Listening</CardTitle>
            </div>
            <CardDescription>
              Help us understand your experience and how we can better serve your needs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label>How was your experience?</Label>
                <div className="flex justify-center gap-8 py-4">
                  <Button
                    type="button"
                    variant="outline"
                    className={`h-auto w-24 flex flex-col items-center py-4 ${
                      sentiment === "positive" ? "bg-green-50 border-green-200 text-green-600" : "border-gray-200 text-gray-500"
                    }`}
                    onClick={() => handleSentimentSelect("positive")}
                  >
                    <Smile className={`h-8 w-8 mb-2 ${sentiment === "positive" ? "text-green-500" : "text-gray-400"}`} />
                    <span>Positive</span>
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className={`h-auto w-24 flex flex-col items-center py-4 ${
                      sentiment === "neutral" ? "bg-amber-50 border-amber-200 text-amber-600" : "border-gray-200 text-gray-500"
                    }`}
                    onClick={() => handleSentimentSelect("neutral")}
                  >
                    <Meh className={`h-8 w-8 mb-2 ${sentiment === "neutral" ? "text-amber-500" : "text-gray-400"}`} />
                    <span>Neutral</span>
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className={`h-auto w-24 flex flex-col items-center py-4 ${
                      sentiment === "negative" ? "bg-red-50 border-red-200 text-red-600" : "border-gray-200 text-gray-500"
                    }`}
                    onClick={() => handleSentimentSelect("negative")}
                  >
                    <Frown className={`h-8 w-8 mb-2 ${sentiment === "negative" ? "text-red-500" : "text-gray-400"}`} />
                    <span>Negative</span>
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="feedback-topic">What would you like to tell us about?</Label>
                <select 
                  id="feedback-topic"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  required
                >
                  <option value="" disabled selected>Select a topic</option>
                  <option value="credit-eval">Credit Evaluation</option>
                  <option value="funding">Funding Options</option>
                  <option value="courses">Financial Literacy Courses</option>
                  <option value="interface">User Interface</option>
                  <option value="accessibility">Accessibility</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="feedback-details">Tell us more</Label>
                <textarea 
                  id="feedback-details"
                  className="min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  placeholder="Share your thoughts, suggestions, or concerns..."
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="contact-email">Email</Label>
                <Input 
                  id="contact-email"
                  type="email"
                  placeholder="your@email.com"
                />
                <p className="text-xs text-gray-500">Provide your email if you'd like us to follow up with you.</p>
              </div>
            
              <Button 
                type="submit" 
                disabled={isSubmitting || !sentiment}
                className="w-full"
              >
                {isSubmitting ? "Submitting..." : "Submit Feedback"}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center border-t pt-6">
            <p className="text-sm text-gray-500 text-center">
              Your feedback helps us address systemic biases and build a more inclusive financial platform.
            </p>
          </CardFooter>
        </Card>
      </div>
    </AnimatedPage>
  );
};

export default Feedback;