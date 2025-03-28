
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { User, Settings, LogOut, Camera } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface ProfileDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProfileDrawer: React.FC<ProfileDrawerProps> = ({ open, onOpenChange }) => {
  const { toast } = useToast();
  const [profileData, setProfileData] = React.useState({
    name: "Jane Doe",
    email: "jane.doe@example.com",
    phone: "+1 (555) 123-4567",
    bio: "Entrepreneur and small business owner focused on sustainable growth."
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = () => {
    toast({
      title: "Profile Updated",
      description: "Your profile changes have been saved successfully.",
    });
  };

  const handleLogout = () => {
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    // In a real app, this would handle actual logout logic
    setTimeout(() => {
      window.location.href = "/";
    }, 1500);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="sm:max-w-md">
        <SheetHeader className="mb-6">
          <SheetTitle>User Profile</SheetTitle>
          <SheetDescription>
            View and update your profile information
          </SheetDescription>
        </SheetHeader>
        
        <div className="space-y-6">
          {/* Profile Picture */}
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <Avatar className="h-24 w-24">
                <AvatarImage src="https://api.dicebear.com/7.x/micah/svg?seed=Jane" alt="Jane Doe" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <HoverCard>
                <HoverCardTrigger>
                  <button 
                    className="absolute bottom-0 right-0 bg-purple rounded-full p-1.5 text-white shadow-md hover:bg-purple-700"
                    onClick={() => toast({
                      title: "Feature Coming Soon",
                      description: "Profile picture upload will be available soon!",
                    })}
                  >
                    <Camera className="h-4 w-4" />
                  </button>
                </HoverCardTrigger>
                <HoverCardContent className="w-auto p-2 pointer-events-auto">
                  <span className="text-xs">Change profile picture</span>
                </HoverCardContent>
              </HoverCard>
            </div>
            <h3 className="text-lg font-medium">{profileData.name}</h3>
            <p className="text-sm text-gray-500">{profileData.email}</p>
          </div>

          {/* Personal Information */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-500 flex items-center">
              <User className="h-4 w-4 mr-2 text-purple" />
              Personal Information
            </h4>
            
            <div className="space-y-3">
              <div className="space-y-1">
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name" 
                  name="name"
                  value={profileData.name} 
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  name="email"
                  value={profileData.email} 
                  onChange={handleInputChange}
                  type="email"
                />
              </div>
              
              <div className="space-y-1">
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                  id="phone" 
                  name="phone"
                  value={profileData.phone} 
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="space-y-1">
                <Label htmlFor="bio">Bio</Label>
                <Input 
                  id="bio" 
                  name="bio"
                  value={profileData.bio} 
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          
          {/* Actions */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-500 flex items-center">
              <Settings className="h-4 w-4 mr-2 text-purple" />
              Account Settings
            </h4>
            
            <div className="flex flex-col space-y-2">
              <Button 
                variant="outline"
                className="justify-start text-left"
                onClick={() => toast({
                  title: "Coming Soon",
                  description: "Password settings will be available soon!",
                })}
              >
                Change Password
              </Button>
              
              <Button 
                variant="outline"
                className="justify-start text-left"
                onClick={() => toast({
                  title: "Coming Soon",
                  description: "Notification settings will be available soon!",
                })}
              >
                Notification Settings
              </Button>
              
              <Button 
                variant="outline"
                className="justify-start text-left"
                onClick={() => toast({
                  title: "Coming Soon",
                  description: "Privacy settings will be available soon!",
                })}
              >
                Privacy Settings
              </Button>
            </div>
          </div>
          
          <div className="pt-4 space-y-4">
            <Button 
              onClick={handleSaveProfile}
              className="w-full"
            >
              Save Changes
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full text-red-500 hover:text-red-600 hover:bg-red-50"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Log Out
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ProfileDrawer;