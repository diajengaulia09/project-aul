import React, { useState, useEffect } from "react"
import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import EditProfile from "./components/EditProfile"

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Set sidebar open by default on larger screens
  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(window.innerWidth >= 768)
    }

    // Set initial state
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="flex h-screen w-screen bg-gray-50">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 overflow-auto ">
            <EditProfile></EditProfile>
        </main>
      </div>
    </div>
  )
}

export default Dashboard