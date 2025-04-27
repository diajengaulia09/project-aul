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
  EllipsisVertical,
  Edit,
  Outdent,
  LogOut,
  HelpCircle,
  History,
  Languages,
} from "lucide-react";
import { Input } from "./ui/input";
import { Link } from "react-router-dom";

const ProfileMenu = ({ isOpen, onToggle, menuRef }) => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="relative" ref={menuRef}>
      <button
        className="flex items-center rounded-full text-sm focus:outline-none"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <User className="h-5 w-5 sm:h-6 sm:w-6" />
        <div className="ml-2 hidden md:flex md:items-center">
          <span className="text-sm font-medium text-gray-700">JWT User</span>
          <ChevronDown
            className={`ml-1 h-4 w-4 text-gray-500 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 origin-top-right rounded-md bg-white shadow-lg focus:outline-none z-50">
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <div className="flex items-center">
              <User className="h-5 w-5 sm:h-6 sm:w-6" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">JWT User</p>
                <p className="text-xs text-gray-500">UI/UX Designer</p>
              </div>
            </div>

            <LogOut />
          </div>
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab("profile")}
              className={`flex-1 px-4 py-2 text-sm font-medium focus:outline-none focus:border-none ${
                activeTab === "profile" ? "text-primary" : "text-gray-700"
              }`}
            >
              <User className="mr-2 h-4 w-4 inline" />
              Profile
            </button>
            <button
              onClick={() => setActiveTab("settings")}
              className={`flex-1 px-4 py-2 text-sm font-medium focus:border-none${
                activeTab === "settings" ? "text-primary" : "text-gray-700"
              }`}
              style={{border:"none"}}
            >
              <Settings className="mr-2 h-4 w-4 inline" />
              Settings
            </button>
          </div>

          {activeTab === "profile" && (
            <div className="py-1">
              <Link
                to={"/profile/edit"}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <Edit className="mr-2 h-4 w-4 inline" />
                Edit Profile
              </Link>
              <Link
                to={"/profile"}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <User className="mr-2 h-4 w-4 inline" />
                View Profile
              </Link>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <LogOut className="mr-2 h-4 w-4 inline" />
                Sign out
              </a>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="py-1">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <HelpCircle className="mr-2 h-4 w-4 inline" />
                Support
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <User className="mr-2 h-4 w-4 inline" />
                Account Settings
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <History className="mr-2 h-4 w-4 inline" />
                History
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const SearchInput = ({ inputRef }) => (
  <div className="relative flex items-center">
    <Search className="absolute left-3 h-5 w-5 text-gray-400" />
    <Input
      ref={inputRef}
      type="text"
      placeholder="Ctrl + K"
      className="w-64 rounded-md border border-gray-300 pl-10 pr-4 py-2 focus:border-blue-500 focus:ring-blue-500"
    />
  </div>
);

export default function Navbar({ sidebarOpen, setSidebarOpen }) {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [ellipsisMenuOpen, setEllipsisMenuOpen] = useState(false);

  const searchInputRef = useRef(null);
  const profileMenuRef = useRef(null);
  const ellipsisMenuRef = useRef(null);
  const languageMenuRef = useRef(null);

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
      if (
        ellipsisMenuRef.current &&
        !ellipsisMenuRef.current.contains(event.target)
      ) {
        setEllipsisMenuOpen(false);
      }
      if (
        languageMenuRef.current &&
        !languageMenuRef.current.contains(event.target)
      ) {
        setLanguageMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white">
      <div className="flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <button
            className="mr-2 rounded-md p-2 text-gray-500 hover:bg-gray-100 md:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <MenuIcon className="h-6 w-6" />
          </button>
          <button
            className="mr-4 hidden rounded-md p-2 text-gray-500 hover:bg-gray-100 md:block"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <PanelLeft className="h-5 w-5" />
          </button>
          <div className="hidden md:block">
            <SearchInput />
          </div>
        </div>

        <div className="flex items-center space-x-1 sm:space-x-2">
          <div className="relative" ref={languageMenuRef}>
            <button
              className="rounded-full p-1 text-gray-500 hover:bg-gray-100"
              onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
            >
              <Languages className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            {languageMenuOpen && (
              <div className="absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                <ul className="py-1 text-sm text-gray-700">
                  {[
                    "English",
                    "Indonesia",
                    "Chinese",
                    "Japanese",
                    "Arabic",
                  ].map((lang) => (
                    <li key={lang}>
                      <button
                        onClick={() => {
                          console.log("Selected language:", lang);
                          setLanguageMenuOpen(false);
                        }}
                        className="w-full px-4 py-2 text-left hover:bg-gray-100"
                      >
                        {lang}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <button className="relative rounded-full p-1 text-gray-500 hover:bg-gray-100">
            <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="absolute right-0 top-0 flex h-3 w-3 sm:h-4 sm:w-4 items-center justify-center rounded-full bg-red-500 text-[10px] sm:text-xs text-white">
              3
            </span>
          </button>

          <div className="relative block md:hidden" ref={ellipsisMenuRef}>
            <button
              className="rounded-full p-1 text-gray-500 hover:bg-gray-100"
              onClick={() => setEllipsisMenuOpen(!ellipsisMenuOpen)}
            >
              <EllipsisVertical className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            {ellipsisMenuOpen && (
              <div className="absolute right-0 mt-2 origin-top-right rounded-md flex bg-white p-2 gap-3 shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                <SearchInput inputRef={searchInputRef} />
                <ProfileMenu
                  isOpen={profileMenuOpen}
                  onToggle={() => setProfileMenuOpen(!profileMenuOpen)}
                  menuRef={profileMenuRef}
                />
              </div>
            )}
          </div>

          <div className="hidden lg:block">
            <ProfileMenu
              isOpen={profileMenuOpen}
              onToggle={() => setProfileMenuOpen(!profileMenuOpen)}
              menuRef={profileMenuRef}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
