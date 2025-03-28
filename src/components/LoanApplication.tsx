
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Clock, X, ChevronRight, FileCheck, AlertCircle, CreditCard, DollarSign, Percent } from "lucide-react";
import AnimatedPage from "./AnimatedPage";
import { toast } from "@/hooks/use-toast";

interface FundingSource {
  name: string;
  type: string;
  interestRate: string;
  minAmount: string;
  maxAmount: string;
  termMonths: string;
}

// Updated for 2024-2025 fiscal year
const fundingSources: FundingSource[] = [
  {
    name: "Traditional Business Loan",
    type: "Bank Loan",
    interestRate: "7.25%",
    minAmount: "$5,000",
    maxAmount: "$300,000",
    termMonths: "12-84",
  },
  {
    name: "Women Entrepreneur Grant",
    type: "Grant",
    interestRate: "0%",
    minAmount: "$5,000",
    maxAmount: "$50,000",
    termMonths: "N/A",
  },
  {
    name: "Peer-to-Peer Lending",
    type: "P2P",
    interestRate: "5.75%",
    minAmount: "$2,000",
    maxAmount: "$75,000",
    termMonths: "6-48",
  },
  {
    name: "Microfinance Loan",
    type: "Microfinance",
    interestRate: "4.9%",
    minAmount: "$1,000",
    maxAmount: "$25,000",
    termMonths: "6-36",
  },
];

const LoanApplication: React.FC = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    revenue: "",
    loanAmount: "",
    purpose: "",
    duration: "12",
  });
  
  const [status, setStatus] = useState<"idle" | "pending" | "approved" | "rejected">("idle");
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("pending");
    setIsSubmitted(true);
    
    // Simulate API call with a delay
    toast({
      title: "Application Submitted",
      description: "Your loan application has been received and is being processed.",
    });
    
    // Randomly select an outcome for demo purposes
    setTimeout(() => {
      const outcomes = ["approved", "pending", "rejected"];
      const randomOutcome = outcomes[Math.floor(Math.random() * outcomes.length)];
      setStatus(randomOutcome as "pending" | "approved" | "rejected");
      
      if (randomOutcome === "approved") {
        toast({
          title: "Application Approved!",
          description: "Congratulations! Your loan application has been approved.",
          variant: "default",
        });
      } else if (randomOutcome === "rejected") {
        toast({
          title: "Application Not Approved",
          description: "Unfortunately, your loan application was not approved at this time.",
          variant: "destructive",
        });
      }
    }, 2000);
  };
  
  const getStatusBadge = () => {
    switch (status) {
      case "pending":
        return (
          <div className="status-badge bg-status-pending/10 text-status-pending">
            <Clock className="w-4 h-4 mr-1" />
            Pending
          </div>
        );
      case "approved":
        return (
          <div className="status-badge bg-status-high/10 text-status-high">
            <Check className="w-4 h-4 mr-1" />
            Approved
          </div>
        );
      case "rejected":
        return (
          <div className="status-badge bg-status-low/10 text-status-low">
            <X className="w-4 h-4 mr-1" />
            Not Approved
          </div>
        );
      default:
        return null;
    }
  };
  
  return (
    <AnimatedPage className="page-container">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="section-title">Loan Application & Tracking</h2>
          <p className="section-subtitle">
            Apply for business funding and track your application status in real-time. 
            Updated with 2024-2025 rates and programs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="glass-card p-6"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="businessName" className="text-sm font-medium text-gray-darkest">
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Your business name"
                    required
                    disabled={isSubmitted}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="revenue" className="text-sm font-medium text-gray-darkest">
                    Annual Revenue ($)
                  </label>
                  <input
                    type="number"
                    id="revenue"
                    name="revenue"
                    value={formData.revenue}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="e.g. 50000"
                    required
                    min="0"
                    disabled={isSubmitted}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="loanAmount" className="text-sm font-medium text-gray-darkest">
                    Loan Amount ($)
                  </label>
                  <input
                    type="number"
                    id="loanAmount"
                    name="loanAmount"
                    value={formData.loanAmount}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="e.g. 10000"
                    required
                    min="0"
                    disabled={isSubmitted}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="purpose" className="text-sm font-medium text-gray-darkest">
                    Loan Purpose
                  </label>
                  <textarea
                    id="purpose"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    className="input-field min-h-[80px]"
                    placeholder="How will you use this loan?"
                    required
                    disabled={isSubmitted}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="duration" className="text-sm font-medium text-gray-darkest">
                    Loan Duration (months)
                  </label>
                  <select
                    id="duration"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className="input-field"
                    required
                    disabled={isSubmitted}
                  >
                    <option value="6">6 months</option>
                    <option value="12">12 months</option>
                    <option value="24">24 months</option>
                    <option value="36">36 months</option>
                    <option value="48">48 months</option>
                    <option value="60">60 months</option>
                  </select>
                </div>
                
                {!isSubmitted && (
                  <button type="submit" className="w-full btn-primary mt-6 flex items-center justify-center">
                    <span>Submit Application</span>
                    <ChevronRight className="ml-1 h-5 w-5" />
                  </button>
                )}
                
                {isSubmitted && (
                  <div className="mt-6 flex justify-center">
                    {getStatusBadge()}
                  </div>
                )}
              </form>
            </motion.div>
          </div>
          
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="glass-card p-6 h-full"
            >
              {isSubmitted ? (
                <div className="h-full">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-gray-darkest mb-2">
                      Application Status
                    </h3>
                    <p className="text-gray">Track your loan application in real-time</p>
                  </div>
                  
                  <div className="flex flex-col items-center justify-center mb-8">
                    <div className="relative">
                      <div 
                        className={`w-24 h-24 rounded-full flex items-center justify-center mb-4`}
                        style={{
                          backgroundColor: 
                            status === "approved" 
                              ? "rgba(48, 209, 88, 0.1)" 
                              : status === "rejected" 
                                ? "rgba(255, 69, 58, 0.1)" 
                                : "rgba(255, 214, 10, 0.1)",
                        }}
                      >
                        {status === "pending" && <Clock className="h-12 w-12 text-status-pending" />}
                        {status === "approved" && <Check className="h-12 w-12 text-status-high" />}
                        {status === "rejected" && <X className="h-12 w-12 text-status-low" />}
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-medium text-gray-darkest mb-2">
                      {status === "pending" && "Your application is being reviewed"}
                      {status === "approved" && "Your loan has been approved!"}
                      {status === "rejected" && "Your application was not approved"}
                    </h4>
                    
                    <p className="text-gray text-center max-w-md mb-6">
                      {status === "pending" && 
                        "Our team is currently reviewing your application. You will receive an update soon."}
                      {status === "approved" && 
                        "Congratulations! Your loan application has been approved. A team member will contact you with next steps."}
                      {status === "rejected" && 
                        "Unfortunately, we couldn't approve your application at this time. Please review the alternative financing options below."}
                    </p>
                    
                    {status === "approved" && (
                      <div className="w-full max-w-md bg-blue-light/30 rounded-lg p-4 border border-blue/10">
                        <div className="flex items-start">
                          <FileCheck className="h-5 w-5 text-blue mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium text-gray-darkest mb-1">Next Steps</h4>
                            <ul className="text-gray-dark text-sm space-y-2">
                              <li className="flex items-start">
                                <span className="inline-block w-4 h-4 rounded-full bg-blue text-white text-xs flex items-center justify-center mr-2 mt-0.5">1</span>
                                <span>Complete the verification process</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-4 h-4 rounded-full bg-blue text-white text-xs flex items-center justify-center mr-2 mt-0.5">2</span>
                                <span>Receive funds (typically within 3-5 business days)</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-4 h-4 rounded-full bg-blue text-white text-xs flex items-center justify-center mr-2 mt-0.5">3</span>
                                <span>Set up your repayment schedule</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-lg font-medium text-gray-darkest mb-4">
                      Alternative Financing Options
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {fundingSources.slice(0, 4).map((source, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                          className="bg-white border border-gray-light rounded-lg p-4 hover:shadow-card transition-all duration-300"
                        >
                          <h4 className="font-medium text-gray-darkest mb-2">{source.name}</h4>
                          <div className="flex items-center text-sm text-gray mb-3">
                            <span className="px-2 py-0.5 bg-blue-light/50 rounded text-blue-dark text-xs mr-2">
                              {source.type}
                            </span>
                          </div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <div className="flex items-center text-gray-dark">
                                <Percent className="h-3.5 w-3.5 mr-1.5" />
                                <span>Interest Rate:</span>
                              </div>
                              <span className="font-medium">{source.interestRate}</span>
                            </div>
                            <div className="flex justify-between">
                              <div className="flex items-center text-gray-dark">
                                <DollarSign className="h-3.5 w-3.5 mr-1.5" />
                                <span>Amount Range:</span>
                              </div>
                              <span className="font-medium">{source.minAmount} - {source.maxAmount}</span>
                            </div>
                            <div className="flex justify-between">
                              <div className="flex items-center text-gray-dark">
                                <CreditCard className="h-3.5 w-3.5 mr-1.5" />
                                <span>Term (months):</span>
                              </div>
                              <span className="font-medium">{source.termMonths}</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center p-4">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-full bg-blue-light flex items-center justify-center mx-auto">
                      <FileCheck className="h-8 w-8 text-blue" />
                    </div>
                  </div>
                  <h3 className="text-xl font-medium text-gray-darkest mb-2">Ready to Apply</h3>
                  <p className="text-gray max-w-md mb-8">
                    Complete the loan application form to check your eligibility and explore financing options tailored for women entrepreneurs.
                  </p>
                  
                  <div className="w-full max-w-md bg-blue-light/30 rounded-lg p-4 border border-blue/10">
                    <div className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-blue mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-darkest mb-1">Before You Apply</h4>
                        <p className="text-gray-dark text-sm">
                          Have your business details ready, including revenue information, business registration, and how you plan to use the funds.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default LoanApplication;