"use client";

import { useState, useRef, useEffect } from "react";
import {
  Bell,
  ChevronDown,
  Fullscreen,
  Mail,
  MenuIcon,
  PanelLeft,
  Search,
  Settings,
  X,
  User,
} from "lucide-react";
import { Input } from "./ui/input";

export default function Navbar({ sidebarOpen, setSidebarOpen }) {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const searchInputRef = useRef(null);
  const profileMenuRef = useRef(null);

  useEffect(() => {
    if (mobileSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [mobileSearchOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target)
      ) {
        setProfileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white">
      <div className="flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <button
            type="button"
            className="mr-2 rounded-md p-2 text-gray-500 hover:bg-gray-100 md:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle sidebar"
          >
            <MenuIcon className="h-6 w-6" />
          </button>

          <button
            type="button"
            className="mr-4 hidden rounded-md p-2 text-gray-500 hover:bg-gray-100 md:block"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
          >
            <PanelLeft className="h-5 w-5" />
          </button>

          <div className="hidden md:block">
            <div className="relative flex items-center">
              <Search className="absolute left-3 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Ctrl + K"
                className="w-64 rounded-md border border-gray-300 pl-10 pr-4 py-2 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <button
            type="button"
            className="ml-2 rounded-md p-2 text-gray-500 hover:bg-gray-100 md:hidden"
            onClick={() => setMobileSearchOpen(true)}
            aria-label="Open search"
          >
            <Search className="h-6 w-6" />
          </button>
        </div>

        <div className="flex items-center space-x-1 sm:space-x-2">
          
          <button className="rounded-full p-1 text-gray-500 hover:bg-gray-100 hidden sm:block">
            <Fullscreen className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          <button className="relative rounded-full p-1 text-gray-500 hover:bg-gray-100">
            <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="absolute right-0 top-0 flex h-3 w-3 sm:h-4 sm:w-4 items-center justify-center rounded-full bg-red-500 text-[10px] sm:text-xs text-white">
              3
            </span>
          </button>
          

          <div className="relative ml-1 sm:ml-3 block lg:hidden" ref={profileMenuRef}>
            <button
              className="flex items-center rounded-full text-sm focus:outline-none"
              onClick={() => setProfileMenuOpen(!profileMenuOpen)}
              aria-expanded={profileMenuOpen}
              aria-haspopup="true"
            >
              <img className="h-8 w-8 rounded-full" src="/placeholder.svg?height=32&width=32" alt="User avatar" />
              <div className="ml-2 hidden md:flex md:items-center">
                <span className="text-sm font-medium text-gray-700">JWT User</span>
                <ChevronDown className={`ml-1 h-4 w-4 text-gray-500 transition-transform ${profileMenuOpen ? "rotate-180" : ""}`} />
              </div>
            </button>

            {profileMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
              </div>
            )}
          </div>
        </div>
      </div>

      {mobileSearchOpen && (
        <div className="fixed inset-0 z-50 bg-white p-4">
          <div className="flex items-center justify-between">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search..."
                className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              />
            </div>
            <button
              type="button"
              className="ml-2 rounded-md p-2 text-gray-500 hover:bg-gray-100"
              onClick={() => setMobileSearchOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex h-16 items-center justify-between border-b border-gray-200 px-4">
            <div className="text-lg font-semibold">Menu</div>
            <button
              type="button"
              className="rounded-md p-2 text-gray-500 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="p-4">
            <div className="mb-6">
              <div className="flex items-center">
                <img className="h-12 w-12 rounded-full" src="/placeholder.svg?height=48&width=48" alt="User avatar" />
                <div className="ml-3">
                  <p className="text-base font-medium text-gray-700">JWT User</p>
                  <p className="text-sm text-gray-500">UI/UX Designer</p>
                </div>
              </div>
            </div>
            <nav className="space-y-1">
              <a href="#" className="flex items-center rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">
                <User className="mr-3 h-6 w-6 text-gray-500" />Your Profile
              </a>
              <a href="#" className="flex items-center rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">
                <Settings className="mr-3 h-6 w-6 text-gray-500" />Settings
              </a>
              <a href="#" className="flex items-center rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">
                <Bell className="mr-3 h-6 w-6 text-gray-500" />Notifications
              </a>
              <a href="#" className="flex items-center rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">
                <Mail className="mr-3 h-6 w-6 text-gray-500" />Messages
              </a>
              <div className="pt-4 mt-4 border-t border-gray-200">
                <a href="#" className="flex items-center rounded-md px-3 py-2 text-base font-medium text-red-600 hover:bg-gray-100">
                  Sign out
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}