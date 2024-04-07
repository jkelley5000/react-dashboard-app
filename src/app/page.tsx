function Header() {
  return (
    <div>
      <p>Header</p>
    </div>
  )
}

function Controls() {
  return (
    <div>
      <p>Controls</p>
    </div>
  )
}

function Dashboard() {
  return (
    <div>
      <p>Dashboard</p>
    </div>
  )
}

export default function Home() {
  return (
    <main>
      <Header />
      <Controls />
      <Dashboard />
    </main>
  );
}
