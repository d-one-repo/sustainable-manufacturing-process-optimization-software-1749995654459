import { ResourceData } from '../types/types'

interface ResourceCardProps {
  data: ResourceData
}

const ResourceCard = ({ data }: ResourceCardProps) => {
  const wastageColor = data.wastage > 10 ? 'text-red-600' : 'text-green-600'

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-xl font-semibold mb-2">{data.resource}</h3>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-600">Current Usage</p>
          <p className="text-2xl font-bold">{data.usage} {data.unit}</p>
        </div>
        <div>
          <p className="text-gray-600">Wastage</p>
          <p className={`text-2xl font-bold ${wastageColor}`}>{data.wastage}%</p>
        </div>
      </div>
    </div>
  )
}

export default ResourceCard