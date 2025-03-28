
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface LearningCardProps {
  title: string;
  content: React.ReactNode;
  icon: React.ReactNode;
  index: number;
}

const LearningCard: React.FC<LearningCardProps> = ({ title, content, icon, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const cardVariants = {
    front: {
      rotateY: 0,
    },
    back: {
      rotateY: 180,
    },
  };

  return (
    <motion.div
      className="w-full h-[420px] perspective relative cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      onClick={() => setIsFlipped(!isFlipped)}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="w-full h-full glass-card p-6 absolute backface-hidden flex flex-col"
        variants={cardVariants}
        animate={isFlipped ? "back" : "front"}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        style={{ 
          backfaceVisibility: "hidden",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-pink flex items-center justify-center mb-4 text-white shadow-soft">
            {icon}
          </div>
          <h3 className="text-xl font-medium text-gray-darkest mb-2 mt-3">{title}</h3>
          <div className="w-20 h-1 bg-gradient-pink rounded-full mb-4"></div>
          <p className="text-gray text-sm mt-2">Tap to learn more</p>
        </div>
        <div className="flex justify-center mt-4">
          <div className="w-8 h-8 rounded-full bg-purple-light flex items-center justify-center transform transition-transform hover:scale-110 hover:bg-purple hover:text-white">
            <ChevronRight className="w-5 h-5 text-purple group-hover:text-white" />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="w-full h-full glass-card p-6 absolute backface-hidden flex flex-col"
        variants={cardVariants}
        initial="back"
        animate={isFlipped ? "front" : "back"}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        style={{ 
          backfaceVisibility: "hidden",
          transformStyle: "preserve-3d",
          transform: "rotateY(180deg)",
        }}
      >
        <h3 className="text-lg font-medium text-purple-dark mb-3 flex items-center">
          <div className="w-8 h-8 rounded-full bg-gradient-pink flex items-center justify-center mr-3 text-white shadow-soft">
            {icon}
          </div>
          {title}
        </h3>
        <div className="w-20 h-1 bg-gradient-pink rounded-full mb-4"></div>
        <ScrollArea className="flex-1 pr-4">
          <div className="text-gray-dark text-sm">
            {content}
          </div>
        </ScrollArea>
        <div className="flex justify-center mt-4">
          <div className="w-8 h-8 rounded-full bg-purple-light flex items-center justify-center transform transition-transform hover:scale-110 hover:bg-purple hover:text-white">
            <ChevronLeft className="w-5 h-5 text-purple" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LearningCard;