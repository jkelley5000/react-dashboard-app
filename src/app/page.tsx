import Header from './components/header';
import Controls from './components/common/controls';
import Dashboard from './components/dashboard';

export default function Home() {
  return (
    <main>
      <Header />
      <Controls />
      <Dashboard />
    </main>
  );
}
