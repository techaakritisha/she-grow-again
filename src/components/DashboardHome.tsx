
import React, { useState } from "react";
import AnimatedPage from "./AnimatedPage";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { 
  CreditCard, 
  BarChart4, 
  BookOpen, 
  TrendingUp, 
  Calendar as CalendarIcon, 
  Lightbulb, 
  BadgeDollarSign, 
  Users
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";

const DashboardHome: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [bankDetails, setBankDetails] = useState({
    bankName: '',
    accountNumber: '',
    routingNumber: ''
  });

  // Dummy data for dashboard stats - Updated for 2024-2025
  const stats = {
    creditScore: 68,
    fundingEligibility: 75,
    coursesCompleted: 2,
    totalCourses: 5
  };

  // Dummy data for insights - Updated for 2024-2025
  const insights = [
    {
      title: "2024 Funding Opportunities",
      description: "You're eligible for 3 new funding options with competitive 2024 rates!",
      icon: <BadgeDollarSign className="h-5 w-5 text-purple-500" />,
      action: () => navigate("/loan-application")
    },
    {
      title: "Credit Score Improvement",
      description: "Your credit score has improved by 12% in Q2 2024.",
      icon: <TrendingUp className="h-5 w-5 text-teal-500" />,
      action: () => navigate("/credit-evaluation")
    },
    {
      title: "2024 Financial Education",
      description: "New course: 'Financial Planning for 2024-2025' is available.",
      icon: <Lightbulb className="h-5 w-5 text-amber-500" />,
      action: () => navigate("/financial-literacy")
    }
  ];

  const handleLinkBank = () => {
    setIsDialogOpen(true);
  };

  const handleBankDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBankDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitBankDetails = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate bank details
    if (!bankDetails.bankName || !bankDetails.accountNumber || !bankDetails.routingNumber) {
      toast({
        title: "Missing Information",
        description: "Please complete all bank account fields",
        variant: "destructive",
      });
      return;
    }
    
    // Success toast and close dialog
    toast({
      title: "Bank Account Linked",
      description: `Successfully linked account with ${bankDetails.bankName}`,
      duration: 5000,
    });
    
    setIsDialogOpen(false);
    navigate("/loan-application");
  };

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date) {
      toast({
        title: "Date Selected",
        description: `You selected ${format(date, "PPP")}`,
        duration: 3000,
      });
    }
  };

  return (
    <AnimatedPage>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Last updated: Today</span>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm" className="hover:bg-pink-50 hover:border-pink-200 transition-all">
                  <CalendarIcon className="h-4 w-4 mr-2 text-purple-500" />
                  <span>{selectedDate ? format(selectedDate, "PPP") : "Select date"}</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="end">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={handleDateSelect}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Credit Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-bold">{stats.creditScore}%</span>
                <BarChart4 className="h-5 w-5 text-purple-500" />
              </div>
              <Progress value={stats.creditScore} className="h-2 mb-2" />
              <p className="text-xs text-gray-500">
                {stats.creditScore < 40 ? "Low" : stats.creditScore < 70 ? "Medium" : "High"} credit rating
              </p>
            </CardContent>
            <CardFooter className="pt-0">
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full text-purple-600 border-purple-200 hover:bg-purple-50"
                onClick={() => navigate("/credit-evaluation")}
              >
                Check Details
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Funding Eligibility</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-bold">{stats.fundingEligibility}%</span>
                <CreditCard className="h-5 w-5 text-teal-500" />
              </div>
              <Progress value={stats.fundingEligibility} className="h-2 mb-2 bg-gray-100">
                <div className="h-full bg-teal-500 rounded-full" />
              </Progress>
              <p className="text-xs text-gray-500">3 funding options available for 2024-2025</p>
            </CardContent>
            <CardFooter className="pt-0">
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full text-teal-600 border-teal-200 hover:bg-teal-50"
                onClick={() => navigate("/loan-application")}
              >
                Apply for Funding
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Learning Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-bold">{Math.round((stats.coursesCompleted / stats.totalCourses) * 100)}%</span>
                <BookOpen className="h-5 w-5 text-amber-500" />
              </div>
              <Progress value={(stats.coursesCompleted / stats.totalCourses) * 100} className="h-2 mb-2 bg-gray-100">
                <div className="h-full bg-amber-500 rounded-full" />
              </Progress>
              <p className="text-xs text-gray-500">{stats.coursesCompleted} of {stats.totalCourses} courses completed</p>
            </CardContent>
            <CardFooter className="pt-0">
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full text-amber-600 border-amber-200 hover:bg-amber-50"
                onClick={() => navigate("/financial-literacy")}
              >
                Continue Learning
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Insights Section */}
        <div className="mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Data-Driven Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {insights.map((insight, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start mb-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center mr-3">
                    {insight.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-base text-gray-900">{insight.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{insight.description}</p>
                  </div>
                </div>
                <Button 
                  variant="link" 
                  size="sm" 
                  onClick={insight.action}
                  className="p-0 h-auto text-purple-600 hover:text-purple-700"
                >
                  Learn more
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions - Updated with better text visibility */}
        <div>
          <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button 
              variant="outline" 
              className="h-auto py-6 flex flex-col items-center justify-center bg-purple-dark border-gray-100"
              onClick={() => navigate("/credit-evaluation")}
            >
              <BarChart4 className="h-6 w-6 mb-2 text-pink-light" />
              <span className="font-semibold text-white">Check Credit Score</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-auto py-6 flex flex-col items-center justify-center bg-purple-dark border-gray-100"
              onClick={() => navigate("/loan-application")}
            >
              <CreditCard className="h-6 w-6 mb-2 text-pink-light" />
              <span className="font-semibold text-white">Apply for Funding</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-auto py-6 flex flex-col items-center justify-center bg-purple-dark border-gray-100"
              onClick={() => navigate("/financial-literacy")}
            >
              <BookOpen className="h-6 w-6 mb-2 text-pink-light" />
              <span className="font-semibold text-white">Explore Courses</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-auto py-6 flex flex-col items-center justify-center bg-purple-dark border-gray-100"
              onClick={handleLinkBank}
            >
              <Users className="h-6 w-6 mb-2 text-pink-light" />
              <span className="font-semibold text-white">Link Bank Account</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Bank Account Linking Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Link Your Bank Account</DialogTitle>
            <DialogDescription>
              Connect your bank account for seamless transfers and financial management.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmitBankDetails}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="bankName">Bank Name</Label>
                <Input
                  id="bankName"
                  name="bankName"
                  placeholder="Enter your bank name"
                  value={bankDetails.bankName}
                  onChange={handleBankDetailsChange}
                  className="shadow-soft"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="accountNumber">Account Number</Label>
                <Input
                  id="accountNumber"
                  name="accountNumber"
                  placeholder="Enter your account number"
                  value={bankDetails.accountNumber}
                  onChange={handleBankDetailsChange}
                  className="shadow-soft"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="routingNumber">Routing Number</Label>
                <Input
                  id="routingNumber"
                  name="routingNumber"
                  placeholder="Enter your routing number"
                  value={bankDetails.routingNumber}
                  onChange={handleBankDetailsChange}
                  className="shadow-soft"
                />
              </div>
              <p className="text-xs text-gray-500 flex items-start">
                <CreditCard className="h-3 w-3 mr-1 mt-0.5 flex-shrink-0" />
                Your banking information is securely encrypted with 2024 standards
              </p>
            </div>
            <DialogFooter>
              <Button variant="outline" type="button" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Link Account</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </AnimatedPage>
  );
};

export default DashboardHome;