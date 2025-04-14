import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  ChevronRight,
  CircleDot,
  Contact,
  CreditCard,
  Home,
  Lock,
  Menu,
  Settings,
  X,
} from "lucide-react";

function Sidebar({ open, setOpen }) {
  const [menuItems, setMenuItems] = useState([
    {
      title: "Sample Page",
      icon: <Home className="h-5 w-5" />,
      path: "/sample",
    },
    {
      title: "Contact US",
      icon: <Contact className="h-5 w-5" />,
      path: "/contact",
    },
    {
      title: "Pricing",
      icon: <CreditCard className="h-5 w-5" />,
      path: "/pricing",
    },
  ]);

  // Close sidebar on small screens when clicking outside
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      const target = e.target;
      if (
        window.innerWidth < 768 &&
        open &&
        !target.closest('[data-sidebar="true"]')
      ) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, setOpen]);

  const toggleSubmenu = (index) => {
    const updatedMenuItems = [...menuItems];
    updatedMenuItems[index].expanded = !updatedMenuItems[index].expanded;
    setMenuItems(updatedMenuItems);
  };

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        data-sidebar="true"
        className={`${
          open
            ? "translate-x-0 w-64"
            : "-translate-x-full md:translate-x-0 md:w-20"
        } fixed inset-y-0 left-0 z-50 flex flex-col border-r border-gray-200 bg-white transition-all duration-300 ease-in-out md:relative`}
      >
        {/* Mobile close button */}
        <button
          type="button"
          className="absolute right-4 top-4 rounded-md p-2 text-gray-500 hover:bg-gray-100 md:hidden"
          onClick={() => setOpen(false)}
        >
          <X className="h-6 w-6" />
        </button>

        {/* Logo */}
        <div className="flex h-16 items-center justify-between border-b border-gray-200 px-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-600 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
              </svg>
            </div>
            {open && <span className="text-xl font-semibold">Mantis</span>}
          </Link>
        </div>

        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto py-4">
          <div className="mb-4 px-4">
            {open && (
              <div className="text-xs font-semibold text-gray-500">Pages</div>
            )}
          </div>
          <nav className="space-y-1 px-2">
            {menuItems.map((item, index) => (
              <div key={index}>
                {item.submenu ? (
                  <button
                    onClick={() => toggleSubmenu(index)}
                    className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium ${
                      open
                        ? "text-gray-700 hover:bg-gray-100"
                        : "justify-center text-gray-700 hover:bg-gray-100"
                    }`}
                    title={!open ? item.title : undefined}
                  >
                    <div className="flex items-center">
                      <span className={`text-gray-500 ${open ? "mr-3" : ""}`}>
                        {item.icon}
                      </span>
                      {open && <span>{item.title}</span>}
                    </div>
                    {open &&
                      (item.expanded ? (
                        <ChevronDown className="h-4 w-4 text-gray-500" />
                      ) : (
                        <ChevronRight className="h-4 w-4 text-gray-500" />
                      ))}
                  </button>
                ) : (
                  <Link
                    to={item.path || "#"}
                    className={`flex items-center rounded-md px-3 py-2 text-sm font-medium ${
                      open
                        ? "text-gray-700 hover:bg-gray-100"
                        : "justify-center text-gray-700 hover:bg-gray-100"
                    }`}
                    title={!open ? item.title : undefined}
                  >
                    <span className={`text-gray-500 ${open ? "mr-3" : ""}`}>
                      {item.icon}
                    </span>
                    {open && <span>{item.title}</span>}
                  </Link>
                )}

                {/* Submenu */}
                {item.submenu && item.expanded && open && (
                  <div className="ml-8 mt-1 space-y-1">
                    {item.submenuItems?.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.path}
                        className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* User Profile */}
        <div className="border-t border-gray-200 p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src="/placeholder.svg"
                alt="User avatar"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-user-icon lucide-user"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            {open && (
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">JWT User</p>
                <p className="text-xs text-gray-500">UI/UX Designer</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
