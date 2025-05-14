"use client";

import { Home } from "lucide-react";
import { NavLink } from "../NavLink/Navlink";

interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 bottom-0 left-0 w-64 bg-white z-30 shadow-lg transition-transform duration-300 ease-in-out lg:translate-x-0 translate-x-0`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <h2 className="text-xl font-bold">Sports Schedule</h2>
          </div>

          <nav className="flex-1 overflow-y-auto p-2">
            <div className="mb-4">
              <NavLink href="/">
                <Home className="w-5 h-5 mr-3" />
                <span>Upcoming Events</span>
              </NavLink>
              <NavLink href="/f1">F1</NavLink>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
