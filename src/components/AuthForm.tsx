
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, User, Lock, Mail, Heart, Sparkles, CreditCard } from "lucide-react";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger 
} from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

interface AuthFormProps {
  onComplete: () => void;
}

// Create schema for form validation
const signUpSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  bankName: z.string().optional(),
  accountNumber: z.string().optional(),
  routingNumber: z.string().optional(),
});

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

const AuthForm: React.FC<AuthFormProps> = ({ onComplete }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [linkBankAccount, setLinkBankAccount] = useState(false);
  const { toast } = useToast();
  
  // Setup form with validation
  const signUpForm = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      bankName: "",
      accountNumber: "",
      routingNumber: "",
    },
  });

  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  
  const handleSubmit = isLogin 
    ? loginForm.handleSubmit((data) => {
        console.log("Login submitted:", data);
        toast({
          title: "Success",
          description: "You have successfully logged in",
        });
        onComplete();
      })
    : signUpForm.handleSubmit((data) => {
        console.log("Sign up submitted:", data);
        
        // Validate bank account details if linkBankAccount is true
        if (linkBankAccount) {
          if (!data.bankName || !data.accountNumber || !data.routingNumber) {
            toast({
              title: "Missing Information",
              description: "Please complete all bank account fields",
              variant: "destructive",
            });
            return;
          }
          
          // Show success toast for bank account linking
          toast({
            title: "Bank Account Linked",
            description: `Successfully linked account with ${data.bankName}`,
            duration: 5000,
          });
        }
        
        toast({
          title: "Account Created",
          description: "Your account has been successfully created",
        });
        onComplete();
      });
  
  const toggleView = () => {
    setIsLogin(!isLogin);
    setLinkBankAccount(false);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-md mx-auto glass-card p-8 md:p-10 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-pink opacity-10 rounded-full blur-xl"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-purple opacity-10 rounded-full blur-xl"></div>
      
      <div className="text-center mb-8 relative">
        <div className="w-20 h-20 rounded-full bg-gradient-soft mx-auto mb-4 flex items-center justify-center shadow-soft">
          <Sparkles className="h-10 w-10 text-purple" />
        </div>
        <h2 className="text-2xl font-bold mb-2 text-gray-darkest">
          {isLogin ? "Welcome Back" : "Join EmpowerHer Finance"}
        </h2>
        <div className="w-20 h-1 bg-gradient-pink rounded-full mx-auto mb-4"></div>
        <p className="text-gray">
          {isLogin
            ? "Access your financial tools and insights"
            : "Create an account to get started"}
        </p>
      </div>
      
      {isLogin ? (
        <form onSubmit={handleSubmit} className="space-y-5 relative">
          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center">
              <Mail className="h-4 w-4 text-purple mr-2" />
              Email Address
            </Label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Mail className="h-5 w-5 text-gray" />
              </div>
              <Input
                type="email"
                id="email"
                className="pl-10 shadow-soft"
                placeholder="your.email@example.com"
                {...loginForm.register("email")}
              />
            </div>
            {loginForm.formState.errors.email && (
              <p className="text-red-500 text-xs mt-1">{loginForm.formState.errors.email.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password" className="flex items-center">
              <Lock className="h-4 w-4 text-purple mr-2" />
              Password
            </Label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Lock className="h-5 w-5 text-gray" />
              </div>
              <Input
                type={showPassword ? "text" : "password"}
                id="password"
                className="pl-10 pr-10 shadow-soft"
                placeholder="Your password"
                {...loginForm.register("password")}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray hover:text-purple transition-colors"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
            {loginForm.formState.errors.password && (
              <p className="text-red-500 text-xs mt-1">{loginForm.formState.errors.password.message}</p>
            )}
          </div>
          
          <button
            type="submit"
            className="w-full px-6 py-3 bg-gradient-purple text-white rounded-xl font-medium shadow-soft transition-all duration-200 hover:shadow-pink-glow focus:ring-2 focus:ring-purple-dark focus:ring-offset-2 active:scale-[0.98] mt-6"
          >
            Sign In
            <Heart className="inline-block ml-2 h-4 w-4" />
          </button>
        </form>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5 relative">
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center">
              <User className="h-4 w-4 text-purple mr-2" />
              Full Name
            </Label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <User className="h-5 w-5 text-gray" />
              </div>
              <Input
                type="text"
                id="name"
                className="pl-10 shadow-soft"
                placeholder="Your full name"
                {...signUpForm.register("name")}
              />
            </div>
            {signUpForm.formState.errors.name && (
              <p className="text-red-500 text-xs mt-1">{signUpForm.formState.errors.name.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center">
              <Mail className="h-4 w-4 text-purple mr-2" />
              Email Address
            </Label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Mail className="h-5 w-5 text-gray" />
              </div>
              <Input
                type="email"
                id="email"
                className="pl-10 shadow-soft"
                placeholder="your.email@example.com"
                {...signUpForm.register("email")}
              />
            </div>
            {signUpForm.formState.errors.email && (
              <p className="text-red-500 text-xs mt-1">{signUpForm.formState.errors.email.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password" className="flex items-center">
              <Lock className="h-4 w-4 text-purple mr-2" />
              Password
            </Label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Lock className="h-5 w-5 text-gray" />
              </div>
              <Input
                type={showPassword ? "text" : "password"}
                id="password"
                className="pl-10 pr-10 shadow-soft"
                placeholder="Create a password"
                {...signUpForm.register("password")}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray hover:text-purple transition-colors"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
            {signUpForm.formState.errors.password && (
              <p className="text-red-500 text-xs mt-1">{signUpForm.formState.errors.password.message}</p>
            )}
          </div>
          
          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <Label className="flex items-center">
                <CreditCard className="h-4 w-4 text-purple mr-2" />
                Link Bank Account
              </Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="relative flex items-center">
                      <div className="flex cursor-pointer">
                        <input
                          type="checkbox"
                          id="linkBankAccount"
                          checked={linkBankAccount}
                          onChange={() => setLinkBankAccount(!linkBankAccount)}
                          className="sr-only"
                        />
                        <div className={`block w-10 h-6 rounded-full transition-colors ${linkBankAccount ? 'bg-purple' : 'bg-gray-light'}`}>
                          <div className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition transform ${linkBankAccount ? 'translate-x-4' : ''}`}></div>
                        </div>
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs">Link your bank account for easy transfers and payments in 2024-2025</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            
            {linkBankAccount && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-3 mt-3 p-3 bg-purple-light/20 border border-purple-light/30 rounded-lg"
              >
                <div className="space-y-2">
                  <Label htmlFor="bankName" className="text-sm font-medium text-gray-darkest">
                    Bank Name
                  </Label>
                  <Input
                    type="text"
                    id="bankName"
                    className="shadow-soft"
                    placeholder="Enter your bank name"
                    {...signUpForm.register("bankName", {
                      required: linkBankAccount ? "Bank name is required" : false
                    })}
                  />
                  {signUpForm.formState.errors.bankName && (
                    <p className="text-red-500 text-xs mt-1">{signUpForm.formState.errors.bankName.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="accountNumber" className="text-sm font-medium text-gray-darkest">
                    Account Number
                  </Label>
                  <Input
                    type="text"
                    id="accountNumber"
                    className="shadow-soft"
                    placeholder="Enter account number"
                    {...signUpForm.register("accountNumber", {
                      required: linkBankAccount ? "Account number is required" : false
                    })}
                  />
                  {signUpForm.formState.errors.accountNumber && (
                    <p className="text-red-500 text-xs mt-1">{signUpForm.formState.errors.accountNumber.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="routingNumber" className="text-sm font-medium text-gray-darkest">
                    Routing Number
                  </Label>
                  <Input
                    type="text"
                    id="routingNumber"
                    className="shadow-soft"
                    placeholder="Enter routing number"
                    {...signUpForm.register("routingNumber", {
                      required: linkBankAccount ? "Routing number is required" : false
                    })}
                  />
                  {signUpForm.formState.errors.routingNumber && (
                    <p className="text-red-500 text-xs mt-1">{signUpForm.formState.errors.routingNumber.message}</p>
                  )}
                </div>
                
                <p className="text-xs text-gray flex items-start mt-2">
                  <Lock className="h-3 w-3 mr-1 mt-0.5 flex-shrink-0" />
                  Your banking information is encrypted and secure with 2024 industry standards
                </p>
              </motion.div>
            )}
          </div>
          
          <button
            type="submit"
            className="w-full px-6 py-3 bg-gradient-purple text-white rounded-xl font-medium shadow-soft transition-all duration-200 hover:shadow-pink-glow focus:ring-2 focus:ring-purple-dark focus:ring-offset-2 active:scale-[0.98] mt-6"
          >
            Create Account
            <Heart className="inline-block ml-2 h-4 w-4" />
          </button>
        </form>
      )}
      
      <div className="mt-6 text-center">
        <p className="text-gray-dark">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            type="button"
            onClick={toggleView}
            className="ml-1 text-purple-dark hover:text-pink-dark focus:outline-none transition-colors font-medium"
          >
            {isLogin ? "Sign Up" : "Sign In"}
          </button>
        </p>
      </div>
    </motion.div>
  );
};

export default AuthForm;