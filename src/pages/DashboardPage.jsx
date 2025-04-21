import React from 'react'
import Layout from '../components/Layout'

export default function DashboardPage() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <p className="mt-4 text-lg">Welcome to the dashboard!</p>
      </div>
    </Layout>
  )
}
