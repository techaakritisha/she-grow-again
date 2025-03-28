
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight, AlertCircle, TrendingUp, BarChart4 } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";
import AnimatedPage from "./AnimatedPage";

const CreditEvaluation: React.FC = () => {
  const [businessData, setBusinessData] = useState({
    revenue: "",
    yearsOfOperation: "",
    loanAmount: "",
  });
  
  const [creditScore, setCreditScore] = useState<null | {
    score: number;
    rating: "Low" | "Medium" | "High";
    color: string;
    percentage: number;
  }>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBusinessData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Updated AI algorithm simulation for credit evaluation for 2024-2025
    const revenue = parseFloat(businessData.revenue);
    const yearsOfOperation = parseFloat(businessData.yearsOfOperation);
    const loanAmount = parseFloat(businessData.loanAmount);
    
    if (isNaN(revenue) || isNaN(yearsOfOperation) || isNaN(loanAmount)) {
      return;
    }
    
    // Updated calculation model for 2024-2025 (revised weights)
    const revenueScore = Math.min(revenue / 12000, 35); // 35% weight (updated for 2024-2025)
    const yearsScore = Math.min(yearsOfOperation * 12, 40); // 40% weight (updated for 2024-2025)
    const loanRatioScore = Math.min(
      (revenue / loanAmount) * 12,
      25
    ); // 25% weight (updated for 2024-2025)
    
    const totalScore = revenueScore + yearsScore + loanRatioScore;
    const percentage = Math.round(totalScore);
    
    let rating: "Low" | "Medium" | "High";
    let color: string;
    
    // Updated thresholds for 2024-2025
    if (totalScore < 45) {
      rating = "Low";
      color = "#FF453A"; // Red
    } else if (totalScore < 75) {
      rating = "Medium";
      color = "#FFD60A"; // Yellow
    } else {
      rating = "High";
      color = "#30D158"; // Green
    }
    
    setCreditScore({
      score: Math.round(totalScore),
      rating,
      color,
      percentage,
    });
  };
  
  const chartData = [
    { name: "Score", value: creditScore?.percentage ?? 0 },
    { name: "Remaining", value: creditScore ? 100 - creditScore.percentage : 100 },
  ];
  
  return (
    <AnimatedPage className="page-container">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="section-title">AI-Powered Credit Evaluation (2024-2025)</h2>
          <p className="section-subtitle">
            Enter your business information to receive an AI-generated credit evaluation using our 2024-2025 updated model.
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
                  <label htmlFor="revenue" className="text-sm font-medium text-gray-darkest">
                    Annual Revenue ($)
                  </label>
                  <input
                    type="number"
                    id="revenue"
                    name="revenue"
                    value={businessData.revenue}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="e.g. 50000"
                    required
                    min="0"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="yearsOfOperation" className="text-sm font-medium text-gray-darkest">
                    Years of Operation
                  </label>
                  <input
                    type="number"
                    id="yearsOfOperation"
                    name="yearsOfOperation"
                    value={businessData.yearsOfOperation}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="e.g. 2"
                    required
                    min="0"
                    step="0.5"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="loanAmount" className="text-sm font-medium text-gray-darkest">
                    Requested Loan Amount ($)
                  </label>
                  <input
                    type="number"
                    id="loanAmount"
                    name="loanAmount"
                    value={businessData.loanAmount}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="e.g. 10000"
                    required
                    min="0"
                  />
                </div>
                
                <button type="submit" className="w-full btn-primary mt-6 flex items-center justify-center">
                  <span>Evaluate Credit</span>
                  <ChevronRight className="ml-1 h-5 w-5" />
                </button>
              </form>
              
              <div className="mt-6 text-sm text-gray">
                <div className="flex items-start">
                  <AlertCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                  <p>This is a simulation. In a real application, a more sophisticated AI algorithm would analyze many more factors.</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="glass-card p-6 h-full"
            >
              {creditScore ? (
                <div className="h-full flex flex-col">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-gray-darkest mb-2">Your Credit Evaluation</h3>
                    <p className="text-gray">Based on the information you provided</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
                    <div className="flex flex-col items-center justify-center">
                      <div className="mb-4">
                        <div 
                          className={`text-center p-4 rounded-full w-32 h-32 flex items-center justify-center`}
                          style={{ backgroundColor: `${creditScore.color}15` }}
                        >
                          <div className="text-center">
                            <div className="text-4xl font-bold" style={{ color: creditScore.color }}>
                              {creditScore.percentage}%
                            </div>
                            <div 
                              className="text-sm font-semibold mt-1 rounded-full px-3 py-1"
                              style={{ 
                                backgroundColor: creditScore.color,
                                color: 'white'
                              }}
                            >
                              {creditScore.rating}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-dark text-sm">Loan Eligibility Rating</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col justify-center">
                      <div className="h-48 md:h-60">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={chartData}
                              cx="50%"
                              cy="50%"
                              innerRadius="70%"
                              outerRadius="90%"
                              startAngle={90}
                              endAngle={-270}
                              dataKey="value"
                            >
                              <Cell key="score" fill={creditScore.color} />
                              <Cell key="remaining" fill="#E5E5EA" />
                              <Label
                                content={({ viewBox }) => {
                                  if (!viewBox) return null;
                                  // Type assertion to access the properties safely
                                  const { cx = 0, cy = 0 } = viewBox as unknown as { cx: number; cy: number };
                                  return (
                                    <>
                                      <text
                                        x={cx}
                                        y={cy - 5}
                                        textAnchor="middle"
                                        dominantBaseline="central"
                                        className="text-3xl font-bold"
                                        fill={creditScore.color}
                                      >
                                        {creditScore.percentage}%
                                      </text>
                                      <text
                                        x={cx}
                                        y={cy + 20}
                                        textAnchor="middle"
                                        dominantBaseline="central"
                                        className="text-sm"
                                        fill="#636366"
                                      >
                                        Credit Score
                                      </text>
                                    </>
                                  );
                                }}
                              />
                            </Pie>
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-blue-light/30 rounded-lg p-4 border border-blue/10">
                    <div className="flex items-start">
                      <TrendingUp className="h-5 w-5 text-blue mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-darkest mb-1">AI Credit Insight</h4>
                        <p className="text-gray-dark text-sm">
                          {creditScore.rating === "Low" && (
                            "Your business profile suggests higher risk. Consider improving revenue or requesting a smaller loan amount."
                          )}
                          {creditScore.rating === "Medium" && (
                            "Your business shows potential. A few more years of stable operation or higher revenue could improve your rating."
                          )}
                          {creditScore.rating === "High" && (
                            "Your business demonstrates strong financials and eligibility for funding. Consider exploring various loan options."
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center p-4">
                  <BarChart4 className="h-16 w-16 text-gray-light mb-4" />
                  <h3 className="text-xl font-medium text-gray-darkest mb-2">Credit Evaluation Results</h3>
                  <p className="text-gray max-w-md">
                    Complete the form on the left to receive your AI-powered credit evaluation based on your business data.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default CreditEvaluation;