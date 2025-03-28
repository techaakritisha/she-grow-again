
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import AuthForm from "@/components/AuthForm";
import { motion } from "framer-motion";

const Index: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <div className="mb-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              >
                <span className="text-purple">She</span>
                <span className="text-blue">Grow</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-xl text-gray-600 max-w-xl mx-auto lg:mx-0"
              >
                Financial empowerment solution designed specifically for women Entrepreneurs
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6 max-w-lg mx-auto lg:mx-0"
            >
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-medium">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-1">AI-Powered Credit Evaluation</h3>
                  <p className="text-gray-600">
                    Get personalized credit ratings based on your business data.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-medium">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-1">Simplified Loan Applications</h3>
                  <p className="text-gray-600">
                    Apply for business loans with a streamlined process.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-medium">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-1">Financial Literacy Resources</h3>
                  <p className="text-gray-600">
                    Access educational materials and tools to enhance your financial knowledge and business success.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center items-center"
          >
            <AuthForm onComplete={() => setIsAuthenticated(true)} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Index;