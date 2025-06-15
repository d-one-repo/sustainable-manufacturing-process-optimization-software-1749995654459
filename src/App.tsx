import { useState } from 'react'
import Sidebar from './components/Sidebar.tsx'
import Dashboard from './components/Dashboard.tsx'
import { ResourceData } from './types/types.ts'

function App() {
  const [selectedView, setSelectedView] = useState('dashboard')
  const [resourceData] = useState<ResourceData[]>([
    { resource: 'Electricity', usage: 2500, unit: 'kWh', wastage: 15 },
    { resource: 'Water', usage: 1000, unit: 'Gallons', wastage: 8 },
    { resource: 'Raw Materials', usage: 5000, unit: 'kg', wastage: 12 },
  ])

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar selectedView={selectedView} setSelectedView={setSelectedView} />
      <main className="flex-1 overflow-x-hidden overflow-y-auto">
        <Dashboard resourceData={resourceData} />
      </main>
    </div>
  )
}

export default App