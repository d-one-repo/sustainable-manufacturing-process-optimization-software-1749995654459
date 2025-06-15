import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import { ResourceData } from '../types/types'

interface UsageChartProps {
  data: ResourceData[]
}

const UsageChart = ({ data }: UsageChartProps) => {
  return (
    <LineChart width={800} height={400} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="resource" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="usage" stroke="#8884d8" />
      <Line type="monotone" dataKey="wastage" stroke="#82ca9d" />
    </LineChart>
  )
}

export default UsageChart