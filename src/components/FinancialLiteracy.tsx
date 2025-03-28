
import React from "react";
import { Lightbulb, TrendingUp, Wallet, CreditCard, BookOpen, ShieldCheck, Calculator as CalculatorIcon, ArrowRight, ExternalLink } from "lucide-react";
import AnimatedPage from "./AnimatedPage";
import LearningCard from "./LearningCard";
import EMICalculator from "./EMICalculator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FinancialLiteracy: React.FC = () => {
  const learningCards = [
    {
      title: "Credit Management",
      icon: <CreditCard className="h-6 w-6 text-blue" />,
      content: (
        <div className="space-y-4">
          <p className="font-medium text-gray-darkest">Understanding your credit score is crucial for accessing financial opportunities.</p>
          
          <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
            <h4 className="font-medium text-blue-700 mb-2">Why Credit Matters for Women Entrepreneurs</h4>
            <p className="text-sm text-gray-700">Women entrepreneurs often face higher barriers to credit access. A strong credit profile can help overcome these systemic challenges and open doors to better financing options.</p>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-darkest mb-2">Tips to improve your credit:</h4>
            <ul className="space-y-2 pl-5 list-disc">
              <li>Pay bills on time consistently</li>
              <li>Keep your credit utilization below 30%</li>
              <li>Don't close old credit accounts (length of history matters)</li>
              <li>Limit applications for new credit</li>
              <li>Regularly check your credit report for errors</li>
            </ul>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="credit-factors">
              <AccordionTrigger className="text-sm font-medium">Credit Score Factors</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-purple-50 p-2 rounded">
                    <p className="font-medium">Payment History</p>
                    <p className="text-gray-600">35% impact</p>
                  </div>
                  <div className="bg-blue-50 p-2 rounded">
                    <p className="font-medium">Credit Utilization</p>
                    <p className="text-gray-600">30% impact</p>
                  </div>
                  <div className="bg-teal-50 p-2 rounded">
                    <p className="font-medium">Credit History Length</p>
                    <p className="text-gray-600">15% impact</p>
                  </div>
                  <div className="bg-amber-50 p-2 rounded">
                    <p className="font-medium">Credit Mix</p>
                    <p className="text-gray-600">10% impact</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <p className="text-sm italic text-gray-600">A good credit score opens doors to better loan terms and lower interest rates, saving you thousands over time.</p>
        </div>
      )
    },
    {
      title: "Business Loan Basics",
      icon: <Wallet className="h-6 w-6 text-blue" />,
      content: (
        <div className="space-y-4">
          <p className="font-medium text-gray-darkest">When applying for a business loan, lenders typically evaluate several key factors.</p>
          
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-3 rounded-lg border border-blue-100">
            <h4 className="font-medium text-purple-700 mb-2">Lender Evaluation Criteria</h4>
            <ul className="space-y-1.5 pl-5 list-disc text-sm">
              <li><span className="font-medium">Business revenue and profitability</span> - Demonstrate consistent income</li>
              <li><span className="font-medium">Time in business</span> - Longer history shows stability</li>
              <li><span className="font-medium">Credit scores</span> - Both personal and business</li>
              <li><span className="font-medium">Available collateral</span> - Assets that secure the loan</li>
              <li><span className="font-medium">Industry risk factors</span> - Some industries face higher scrutiny</li>
              <li><span className="font-medium">Debt-to-income ratio</span> - Shows ability to take on new debt</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-darkest flex items-center gap-1.5">
              <ArrowRight className="h-4 w-4 text-purple-500" />
              Preparation Checklist
            </h4>
            <div className="mt-2 grid grid-cols-1 gap-2">
              <div className="flex items-start gap-2 p-2 bg-gray-50 rounded">
                <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center mt-0.5">
                  <span className="text-xs font-medium text-purple-700">1</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Gather Financial Documents</p>
                  <p className="text-xs text-gray-600">Tax returns, bank statements, profit & loss statements</p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-2 bg-gray-50 rounded">
                <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center mt-0.5">
                  <span className="text-xs font-medium text-purple-700">2</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Create a Business Plan</p>
                  <p className="text-xs text-gray-600">Include market analysis, financials, and growth projections</p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-2 bg-gray-50 rounded">
                <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center mt-0.5">
                  <span className="text-xs font-medium text-purple-700">3</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Define Loan Purpose</p>
                  <p className="text-xs text-gray-600">Be specific about how funds will be used and ROI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Financial Planning",
      icon: <TrendingUp className="h-6 w-6 text-blue" />,
      content: (
        <div className="space-y-4">
          <p className="font-medium text-gray-darkest">Effective financial planning creates a foundation for business growth and sustainability.</p>
          
          <div className="bg-teal-50 p-3 rounded-lg border border-teal-100">
            <h4 className="font-medium text-teal-700 mb-2">Financial Planning Essentials</h4>
            <ul className="space-y-1.5 pl-5 list-disc text-sm">
              <li><span className="font-medium">Separate finances</span> - Keep personal and business accounts distinct</li>
              <li><span className="font-medium">Emergency fund</span> - Build 3-6 months of business expenses</li>
              <li><span className="font-medium">Retirement planning</span> - Start early, even with small contributions</li>
              <li><span className="font-medium">Strategic reinvestment</span> - Allocate profits to growth opportunities</li>
              <li><span className="font-medium">Tax planning</span> - Plan throughout the year, not just at tax time</li>
              <li><span className="font-medium">Insurance review</span> - Regularly assess coverage needs</li>
            </ul>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="financial-planning-steps">
              <AccordionTrigger className="text-sm font-medium">4-Step Planning Process</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 text-xs">
                  <div className="p-2 bg-teal-50 rounded">
                    <p className="font-medium">1. Financial Assessment</p>
                    <p className="text-gray-600">Review current financial position, assets, liabilities, and cash flow</p>
                  </div>
                  <div className="p-2 bg-teal-50 rounded">
                    <p className="font-medium">2. Goal Setting</p>
                    <p className="text-gray-600">Define short, medium, and long-term financial goals with timeframes</p>
                  </div>
                  <div className="p-2 bg-teal-50 rounded">
                    <p className="font-medium">3. Strategy Development</p>
                    <p className="text-gray-600">Create action plans for achieving each goal with specific steps</p>
                  </div>
                  <div className="p-2 bg-teal-50 rounded">
                    <p className="font-medium">4. Regular Review</p>
                    <p className="text-gray-600">Schedule quarterly reviews to adjust strategies as needed</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <div className="flex items-center gap-2 p-2 bg-amber-50 rounded border border-amber-100">
            <ExternalLink className="h-4 w-4 text-amber-600 flex-shrink-0" />
            <p className="text-xs text-amber-800">
              <span className="font-medium">Pro Tip:</span> Consider working with a financial advisor who specializes in women-owned businesses to create a customized plan.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Alternative Funding",
      icon: <Lightbulb className="h-6 w-6 text-blue" />,
      content: (
        <div className="space-y-4">
          <p className="font-medium text-gray-darkest">Beyond traditional loans, explore these diverse funding options for your business.</p>
          
          <div className="grid grid-cols-1 gap-3">
            <div className="p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
              <h4 className="font-medium text-purple-700 mb-1">Women-Focused Grants</h4>
              <p className="text-xs text-gray-700 mb-2">Non-repayable funds specifically for women entrepreneurs</p>
              <div className="flex gap-2 text-xs">
                <span className="px-2 py-0.5 bg-white/50 rounded text-purple-700">Amber Grant</span>
                <span className="px-2 py-0.5 bg-white/50 rounded text-purple-700">NWBC</span>
                <span className="px-2 py-0.5 bg-white/50 rounded text-purple-700">SBA</span>
              </div>
            </div>
            
            <div className="p-3 bg-gradient-to-r from-teal-50 to-green-50 rounded-lg border border-teal-100">
              <h4 className="font-medium text-teal-700 mb-1">Crowdfunding</h4>
              <p className="text-xs text-gray-700 mb-2">Raise small amounts from many people, often with rewards</p>
              <div className="flex gap-2 text-xs">
                <span className="px-2 py-0.5 bg-white/50 rounded text-teal-700">Kickstarter</span>
                <span className="px-2 py-0.5 bg-white/50 rounded text-teal-700">Indiegogo</span>
                <span className="px-2 py-0.5 bg-white/50 rounded text-teal-700">iFundWomen</span>
              </div>
            </div>
            
            <div className="p-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-100">
              <h4 className="font-medium text-amber-700 mb-1">Angel Investors & VCs</h4>
              <p className="text-xs text-gray-700 mb-2">Equity funding with mentorship and networking opportunities</p>
              <div className="flex gap-2 text-xs">
                <span className="px-2 py-0.5 bg-white/50 rounded text-amber-700">Golden Seeds</span>
                <span className="px-2 py-0.5 bg-white/50 rounded text-amber-700">BBG Ventures</span>
                <span className="px-2 py-0.5 bg-white/50 rounded text-amber-700">37 Angels</span>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-2 rounded text-sm">
            <p className="font-medium text-blue-700">Benefits of Alternative Funding:</p>
            <ul className="mt-1 space-y-1 pl-5 list-disc text-xs text-gray-700">
              <li>Often less stringent requirements than banks</li>
              <li>May offer mentorship and community support</li>
              <li>Can be faster to access than traditional loans</li>
              <li>May not require collateral or perfect credit</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Cash Flow Management",
      icon: <ShieldCheck className="h-6 w-6 text-blue" />,
      content: (
        <div className="space-y-4">
          <p className="font-medium text-gray-darkest">Maintaining healthy cash flow is essential for business survival and growth.</p>
          
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-3 rounded-lg border border-blue-100">
            <h4 className="font-medium text-blue-700 mb-2">Cash Flow Fundamentals</h4>
            <p className="text-sm text-gray-700 mb-2">Cash flow ≠ Profitability. A profitable business can still fail due to poor cash flow management.</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-white/70 p-2 rounded">
                <p className="font-medium text-blue-700">Cash Inflows</p>
                <ul className="mt-1 pl-4 list-disc text-gray-700">
                  <li>Customer payments</li>
                  <li>Investment income</li>
                  <li>Asset sales</li>
                </ul>
              </div>
              <div className="bg-white/70 p-2 rounded">
                <p className="font-medium text-red-700">Cash Outflows</p>
                <ul className="mt-1 pl-4 list-disc text-gray-700">
                  <li>Vendor payments</li>
                  <li>Operating expenses</li>
                  <li>Loan repayments</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-darkest mb-2">Essential Cash Flow Strategies:</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2 p-2 bg-gray-50 rounded">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                  <span className="text-xs font-medium text-blue-700">1</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Track Meticulously</p>
                  <p className="text-xs text-gray-600">Use accounting software to monitor all cash movements</p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-2 bg-gray-50 rounded">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                  <span className="text-xs font-medium text-blue-700">2</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Create Projections</p>
                  <p className="text-xs text-gray-600">Forecast cash flows 3-6 months ahead to anticipate gaps</p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-2 bg-gray-50 rounded">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                  <span className="text-xs font-medium text-blue-700">3</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Optimize Receivables</p>
                  <p className="text-xs text-gray-600">Invoice promptly, offer early payment discounts, follow up on late payments</p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-2 bg-gray-50 rounded">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                  <span className="text-xs font-medium text-blue-700">4</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Manage Payables Strategically</p>
                  <p className="text-xs text-gray-600">Negotiate favorable terms, schedule payments carefully</p>
                </div>
              </div>
            </div>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="cash-flow-tools">
              <AccordionTrigger className="text-sm font-medium">Recommended Tools</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2 bg-gray-50 rounded">
                    <p className="font-medium">QuickBooks</p>
                    <p className="text-gray-600">Complete accounting with cash flow forecasting</p>
                  </div>
                  <div className="p-2 bg-gray-50 rounded">
                    <p className="font-medium">Float</p>
                    <p className="text-gray-600">Visual cash flow forecasting and scenario planning</p>
                  </div>
                  <div className="p-2 bg-gray-50 rounded">
                    <p className="font-medium">Invoice2go</p>
                    <p className="text-gray-600">Simple invoicing for small businesses</p>
                  </div>
                  <div className="p-2 bg-gray-50 rounded">
                    <p className="font-medium">Pulse</p>
                    <p className="text-gray-600">Cash flow visualization and planning</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      )
    },
    {
      title: "Financial Literacy Basics",
      icon: <BookOpen className="h-6 w-6 text-blue" />,
      content: (
        <div className="space-y-4">
          <p className="font-medium text-gray-darkest">Core financial concepts every entrepreneur should understand.</p>
          
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-3 rounded-lg border border-purple-100">
            <h4 className="font-medium text-purple-700 mb-2">Financial Statements Explained</h4>
            <div className="space-y-2 text-sm">
              <div className="bg-white/70 p-2 rounded">
                <p className="font-medium text-gray-800">Balance Sheet</p>
                <p className="text-xs text-gray-600">A snapshot of what you own (assets), what you owe (liabilities), and the resulting equity at a specific point in time.</p>
                <p className="text-xs font-medium text-purple-700 mt-1">Assets = Liabilities + Equity</p>
              </div>
              <div className="bg-white/70 p-2 rounded">
                <p className="font-medium text-gray-800">Income Statement</p>
                <p className="text-xs text-gray-600">Shows revenue, expenses, and profit or loss over a period of time.</p>
                <p className="text-xs font-medium text-purple-700 mt-1">Revenue - Expenses = Profit (or Loss)</p>
              </div>
              <div className="bg-white/70 p-2 rounded">
                <p className="font-medium text-gray-800">Cash Flow Statement</p>
                <p className="text-xs text-gray-600">Tracks the flow of cash in and out of your business across operating, investing, and financing activities.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-darkest mb-2">Essential Financial Concepts:</h4>
            <div className="grid grid-cols-1 gap-2">
              <div className="p-2 bg-gray-50 rounded border-l-4 border-blue-400">
                <p className="font-medium">Profit Margins</p>
                <p className="text-xs text-gray-600">Gross margin: (Revenue - COGS) ÷ Revenue</p>
                <p className="text-xs text-gray-600">Net margin: Net Profit ÷ Revenue</p>
              </div>
              <div className="p-2 bg-gray-50 rounded border-l-4 border-purple-400">
                <p className="font-medium">Break-even Analysis</p>
                <p className="text-xs text-gray-600">Fixed Costs ÷ (Price - Variable Costs)</p>
                <p className="text-xs text-gray-600">Shows how many units you need to sell to cover costs</p>
              </div>
              <div className="p-2 bg-gray-50 rounded border-l-4 border-teal-400">
                <p className="font-medium">Fixed vs. Variable Costs</p>
                <p className="text-xs text-gray-600">Fixed: Remain constant regardless of production (rent, salaries)</p>
                <p className="text-xs text-gray-600">Variable: Change with production level (materials, commissions)</p>
              </div>
            </div>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="financial-ratios">
              <AccordionTrigger className="text-sm font-medium">Key Financial Ratios</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 gap-2 text-xs">
                  <div className="p-2 bg-blue-50 rounded">
                    <p className="font-medium">Current Ratio</p>
                    <p className="text-gray-600">Current Assets ÷ Current Liabilities</p>
                    <p className="text-gray-600">Measures ability to pay short-term obligations</p>
                  </div>
                  <div className="p-2 bg-purple-50 rounded">
                    <p className="font-medium">Debt-to-Equity Ratio</p>
                    <p className="text-gray-600">Total Debt ÷ Total Equity</p>
                    <p className="text-gray-600">Shows how much debt is used to finance assets</p>
                  </div>
                  <div className="p-2 bg-teal-50 rounded">
                    <p className="font-medium">Return on Investment (ROI)</p>
                    <p className="text-gray-600">(Net Profit ÷ Investment) × 100</p>
                    <p className="text-gray-600">Evaluates efficiency of an investment</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <div className="p-2 bg-amber-50 rounded border border-amber-100 text-sm">
            <p className="font-medium text-amber-800">Learning Resources:</p>
            <ul className="mt-1 space-y-1 pl-5 list-disc text-xs text-gray-700">
              <li>SBA's free online business courses</li>
              <li>SCORE's financial management workshops</li>
              <li>Khan Academy's finance and accounting videos</li>
              <li>Local Women's Business Centers</li>
            </ul>
          </div>
        </div>
      )
    },
  ];

  return (
    <AnimatedPage className="page-container">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="section-title">Financial Literacy</h2>
          <p className="section-subtitle">
            Expand your financial knowledge with learning materials and practical tools.
          </p>
        </div>
        
        <div className="mb-10">
          <h3 className="text-xl font-medium text-gray-darkest mb-6">Learning Cards</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningCards.map((card, index) => (
              <LearningCard
                key={index}
                title={card.title}
                content={card.content}
                icon={card.icon}
                index={index}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-12">
          <h3 className="text-xl font-medium text-gray-darkest mb-6 flex items-center">
            <CalculatorIcon className="h-5 w-5 mr-2 text-blue" />
            EMI Calculator
          </h3>
          <EMICalculator />
        </div>
      </div>
    </AnimatedPage>
  );
};

export default FinancialLiteracy;