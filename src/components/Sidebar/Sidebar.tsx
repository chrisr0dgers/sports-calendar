import { Home } from "lucide-react";
import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  setIsOpen,
}) => {

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-20 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 bottom-0 left-0 w-64 bg-white z-30 shadow-lg transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <h2 className="text-xl font-bold">Sports Schedule</h2>
          </div>

          <nav className="flex-1 overflow-y-auto p-2">
            <div className="mb-4">
              <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase">
                General
              </div>
              <button
                className={`flex items-center w-full px-3 py-2 text-gray-900 rounded-lg hover:bg-gray-100`}
              >
                <Home className="w-5 h-5 mr-3" />
                <span>Upcoming Events</span>
              </button>
            </div>

            <div>
              <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase">
                Sports
              </div>

              <div className="space-y-1">
                <Link
                  href="/F1"
                  className="flex items-center w-full px-3 py-2 text-gray-900 rounded-lg hover:bg-gray-100"
                >
                  F1
                </Link>
              </div>
            </div>
          </nav>

          <div className="p-4 border-t text-center">
            <div className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Sports PWA
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
