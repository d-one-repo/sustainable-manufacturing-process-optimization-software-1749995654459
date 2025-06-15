import { ResourceData } from '../types/types'
import ResourceCard from './ResourceCard'
import UsageChart from './UsageChart'

interface DashboardProps {
  resourceData: ResourceData[]
}

const Dashboard = ({ resourceData }: DashboardProps) => {
  const totalWastage = resourceData.reduce((acc, curr) => acc + curr.wastage, 0)

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Sustainable Manufacturing Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {resourceData.map((resource) => (
          <ResourceCard key={resource.resource} data={resource} />
        ))}
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Resource Usage Analysis</h2>
        <UsageChart data={resourceData} />
        
        <div className="mt-6 p-4 bg-red-50 rounded-lg">
          <h3 className="text-lg font-medium text-red-800">Total Waste Alert</h3>
          <p className="text-red-600">
            Current total wastage: {totalWastage}% - Action required to meet sustainability goals
          </p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard