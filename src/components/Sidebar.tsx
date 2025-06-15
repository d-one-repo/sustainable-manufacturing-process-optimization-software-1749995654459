interface SidebarProps {
  selectedView: string
  setSelectedView: (view: string) => void
}

const Sidebar = ({ selectedView, setSelectedView }: SidebarProps) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'analysis', label: 'Analysis' },
    { id: 'reports', label: 'Reports' },
    { id: 'settings', label: 'Settings' }
  ]

  return (
    <aside className="bg-gray-800 w-64 min-h-screen p-4">
      <div className="flex items-center mb-8">
        <img src="/elgato-logo.svg" alt="Elgato" className="h-8" />
        <h1 className="text-white text-xl font-bold ml-2">Sustainable Mfg.</h1>
      </div>
      
      <nav>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedView(item.id)}
            className={`w-full text-left py-2 px-4 rounded mb-2 ${
              selectedView === item.id
                ? 'bg-gray-700 text-white'
                : 'text-gray-300 hover:bg-gray-700'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar