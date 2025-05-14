'use client';
import { useEffect, useState } from "react";
import { Calendar, Clock, Menu } from "lucide-react";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  // Update the time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <header className="bg-white border-b shadow-sm p-2 sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <button
            className="p-2 mr-2 lg:hidden"
            // onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-2">
              S
            </div>
            <span className="font-bold text-lg hidden sm:inline">
              Sports Schedule
            </span>
          </div>
        </div>

        <div className="flex items-center text-sm">
          <div className="hidden sm:flex items-center mr-4">
            <Calendar className="w-4 h-4 mr-1 text-gray-500" />
            <span>{formatDate(currentTime)}</span>
          </div>

          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1 text-gray-500" />
            <span>{formatTime(currentTime)}</span>
          </div>
        </div>
      </div>
    </header>
  );
};
