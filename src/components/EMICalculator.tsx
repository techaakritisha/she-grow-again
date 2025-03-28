
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calculator, DollarSign, Percent, Calendar } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const EMICalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState<number>(10000);
  // Updated default interest rate for 2024-2025
  const [interestRate, setInterestRate] = useState<number>(7.25);
  const [loanTerm, setLoanTerm] = useState<number>(12);
  const [emi, setEmi] = useState<number>(0);
  const [totalPayment, setTotalPayment] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [paymentSchedule, setPaymentSchedule] = useState<any[]>([]);

  const calculateEMI = () => {
    // Monthly interest rate
    const monthlyRate = interestRate / 12 / 100;
    
    // EMI calculation formula: P * r * (1+r)^n / ((1+r)^n - 1)
    const emiValue = 
      loanAmount * 
      monthlyRate * 
      Math.pow(1 + monthlyRate, loanTerm) / 
      (Math.pow(1 + monthlyRate, loanTerm) - 1);
    
    const totalPaymentValue = emiValue * loanTerm;
    const totalInterestValue = totalPaymentValue - loanAmount;
    
    setEmi(emiValue);
    setTotalPayment(totalPaymentValue);
    setTotalInterest(totalInterestValue);
    
    // Generate payment schedule
    const schedule = [];
    let remainingPrincipal = loanAmount;
    
    for (let i = 1; i <= loanTerm; i++) {
      const interestForMonth = remainingPrincipal * monthlyRate;
      const principalForMonth = emiValue - interestForMonth;
      remainingPrincipal -= principalForMonth;
      
      schedule.push({
        month: i,
        principal: principalForMonth,
        interest: interestForMonth,
        balance: remainingPrincipal > 0 ? remainingPrincipal : 0,
      });
    }
    
    setPaymentSchedule(schedule);
  };

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, loanTerm]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="glass-card p-6"
    >
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-darkest mb-2">EMI Calculator (2024-2025)</h3>
        <p className="text-gray">Calculate your monthly loan payments with current rates</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="space-y-4">
            <label htmlFor="loanAmount" className="flex justify-between">
              <span className="text-sm font-medium text-gray-darkest">Loan Amount</span>
              <span className="text-sm text-gray">{formatCurrency(loanAmount)}</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <DollarSign className="h-5 w-5 text-gray" />
              </div>
              <input
                type="number"
                id="loanAmount"
                value={loanAmount}
                onChange={(e) => setLoanAmount(parseFloat(e.target.value) || 0)}
                className="input-field pl-10"
                min="500"
                max="1000000"
              />
            </div>
            <input
              type="range"
              min="500"
              max="100000"
              step="500"
              value={loanAmount}
              onChange={(e) => setLoanAmount(parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-light rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray">
              <span>$500</span>
              <span>$100,000</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <label htmlFor="interestRate" className="flex justify-between">
              <span className="text-sm font-medium text-gray-darkest">Interest Rate</span>
              <span className="text-sm text-gray">{interestRate}%</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Percent className="h-5 w-5 text-gray" />
              </div>
              <input
                type="number"
                id="interestRate"
                value={interestRate}
                onChange={(e) => setInterestRate(parseFloat(e.target.value) || 0)}
                className="input-field pl-10"
                min="0.1"
                max="30"
                step="0.1"
              />
            </div>
            <input
              type="range"
              min="0.1"
              max="30"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-light rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray">
              <span>0.1%</span>
              <span>30%</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <label htmlFor="loanTerm" className="flex justify-between">
              <span className="text-sm font-medium text-gray-darkest">Loan Term</span>
              <span className="text-sm text-gray">{loanTerm} months</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Calendar className="h-5 w-5 text-gray" />
              </div>
              <input
                type="number"
                id="loanTerm"
                value={loanTerm}
                onChange={(e) => setLoanTerm(parseInt(e.target.value) || 0)}
                className="input-field pl-10"
                min="1"
                max="360"
              />
            </div>
            <input
              type="range"
              min="1"
              max="60"
              step="1"
              value={loanTerm}
              onChange={(e) => setLoanTerm(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-light rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray">
              <span>1 month</span>
              <span>60 months</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col">
          <div className="bg-blue-light/30 rounded-xl p-6 mb-6 border border-blue/10">
            <div className="text-center mb-4">
              <h4 className="text-sm font-medium text-gray-dark">Monthly Payment (EMI)</h4>
              <div className="text-3xl font-bold text-blue mt-1">
                {formatCurrency(emi)}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="text-center">
                <h5 className="text-xs font-medium text-gray-dark mb-1">Total Payment</h5>
                <div className="text-lg font-semibold text-gray-darkest">
                  {formatCurrency(totalPayment)}
                </div>
              </div>
              <div className="text-center">
                <h5 className="text-xs font-medium text-gray-dark mb-1">Total Interest</h5>
                <div className="text-lg font-semibold text-gray-darkest">
                  {formatCurrency(totalInterest)}
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 min-h-[250px]">
            <h4 className="text-sm font-medium text-gray-darkest mb-3">Payment Breakdown</h4>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart
                data={[
                  { name: 'Principal', value: loanAmount },
                  { name: 'Interest', value: totalInterest },
                ]}
                margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis 
                  tickFormatter={(value) => `$${value.toLocaleString()}`}
                  tick={{ fontSize: 12 }}
                />
                <Tooltip 
                  formatter={(value) => [`$${value.toLocaleString()}`, 'Amount']}
                  contentStyle={{ borderRadius: '8px', fontSize: '12px' }}
                />
                <Bar dataKey="value" fill="#0A84FF" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EMICalculator;