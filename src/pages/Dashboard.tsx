
import React, { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import { BookOpen, CreditCard, Home, BarChart4, Users, Shield, MessageSquare, PiggyBank, HandCoins, Award } from "lucide-react";
import { Link } from "react-router-dom";
import ProfileDrawer from "@/components/ProfileDrawer";

interface DashboardProps {
    children?: React.ReactNode;
}

// Navigation items for sidebar
const navigationItems = [
    {
        name: "Dashboard",
        icon: Home,
        href: "/dashboard-home",
    },
    {
        name: "Credit Evaluation",
        icon: BarChart4,
        href: "/credit-evaluation",
    },
    {
        name: "Loan Application",
        icon: CreditCard,
        href: "/loan-application",
    },
    {
        name: "Financial Literacy",
        icon: BookOpen,
        href: "/financial-literacy",
    },
    {
        name: "Transparency Report",
        icon: Shield,
        href: "/transparency",
    },
    {
        name: "Feedback",
        icon: MessageSquare,
        href: "/feedback",
    }
];

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
    const location = useLocation();
    const [isProfileOpen, setIsProfileOpen] = useState(false);


    if (location.pathname === "/dashboard") {
        return <Navigate to="/dashboard-home" replace />;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-dark/90 via-purple/80 to-purple-dark/95 flex relative">
            {/* Sidebar */}
            <div className="hidden md:flex flex-col w-64 bg-gradient-to-b from-purple-dark to-purple shadow-md border-r border-purple-light/20">
                <div className="h-20 flex items-center justify-center border-b border-purple-light/20">
                    <div className="bg-gradient-to-r from-purple to-purple-dark px-5 py-2 rounded-xl flex items-center space-x-3 relative overflow-hidden shadow-pink-glow">
                        {/* Background icons */}
                        <PiggyBank className="absolute -left-1 top-1 text-white/20 w-6 h-6" />
                        <HandCoins className="absolute right-1 bottom-0 text-white/20 w-6 h-6" />
                        <Award className="absolute left-8 -bottom-1 text-white/20 w-5 h-5" />
                        <CreditCard className="absolute right-12 top-0 text-white/20 w-5 h-5" />

                        {/* Logo text */}
                        <span className="text-2xl font-bold bg-gradient-to-r from-white to-rose-light bg-clip-text text-transparent relative z-10">She</span>
                        <span className="text-2xl font-bold bg-gradient-to-r from-rose-light to-white bg-clip-text text-transparent relative z-10">Grow</span>
                    </div>
                </div>
                <nav className="flex-1 pt-4 relative">
                    {/* Background icons for sidebar */}
                    <PiggyBank className="absolute right-4 top-12 text-purple-light/20 w-16 h-16 rotate-12" />
                    <HandCoins className="absolute left-3 bottom-24 text-pink-light/20 w-12 h-12 -rotate-12" />
                    <Award className="absolute right-8 bottom-48 text-purple-light/20 w-10 h-10" />
                    <CreditCard className="absolute left-6 top-48 text-purple-light/20 w-10 h-10 rotate-6" />

                    <ul className="space-y-1 px-2 relative z-10">
                        {navigationItems.map((item) => {
                            const isActive = location.pathname === item.href;
                            return (
                                <li key={item.name}>
                                    <Link
                                        to={item.href}
                                        className={cn(
                                            "flex items-center px-4 py-3 rounded-lg transition-all text-lg font-bold",
                                            isActive
                                                ? "bg-gradient-to-r from-pink to-purple-light text-white shadow-md border border-white/20"
                                                : "text-white hover:bg-white/20 hover:backdrop-blur-sm hover:text-white"
                                        )}
                                    >
                                        <item.icon className={cn(
                                            "h-5 w-5 mr-3",
                                            isActive ? "text-white" : "text-white/80"
                                        )} />
                                        {item.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <div className="p-4 border-t border-purple-light/20 relative">
                    <CreditCard className="absolute left-2 top-2 text-purple-light/20 w-6 h-6 rotate-3" />
                    <button
                        onClick={() => setIsProfileOpen(true)}
                        className="flex items-center space-x-3 w-full rounded-lg p-2 transition-all hover:bg-white/20 hover:backdrop-blur-sm relative z-10 text-white hover:text-white"
                    >
                        <div className="h-9 w-9 rounded-full bg-gradient-to-r from-pink-light to-pink flex items-center justify-center">
                            <Users className="h-4 w-4 text-purple-dark" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-left">Profile</p>
                            <p className="text-xs text-white/70 text-left">View settings</p>
                        </div>
                    </button>
                </div>
            </div>

            {/* Main content */}
            <div className="flex-1 bg-gradient-to-br from-purple-dark/70 via-purple/60 to-pink-dark/50 relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -right-32 -top-32 w-64 h-64 rounded-full bg-gradient-to-br from-purple-light/30 to-pink/20 blur-3xl"></div>
                    <div className="absolute -left-32 top-1/3 w-64 h-64 rounded-full bg-gradient-to-br from-pink-light/30 to-purple-light/20 blur-3xl"></div>
                    <div className="absolute right-1/4 bottom-0 w-80 h-80 rounded-full bg-gradient-to-tr from-purple-light/20 to-pink/30 blur-3xl"></div>
                    <PiggyBank className="absolute right-[5%] top-[15%] text-purple-light/20 w-32 h-32 rotate-12" />
                    <HandCoins className="absolute left-[8%] bottom-[20%] text-pink-light/20 w-24 h-24 -rotate-12" />
                    <Award className="absolute right-[10%] bottom-[10%] text-purple-light/20 w-20 h-20" />
                    <CreditCard className="absolute left-[15%] top-[25%] text-purple-light/20 w-28 h-28 rotate-6" />
                </div>

                <Navbar />
                <div className="pt-24 px-4 md:px-6 pb-6 relative z-10">
                    {children}
                </div>
            </div>

            {/* Profile Drawer */}
            <ProfileDrawer open={isProfileOpen} onOpenChange={setIsProfileOpen} />
        </div>
    );
};

export default Dashboard;