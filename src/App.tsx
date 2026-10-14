import { NavLink, Route, Routes } from 'react-router-dom';
import { AnalysisPage } from './pages/AnalysisPage';
import { LearnPage } from './pages/LearnPage';
import { MovementsPage } from './pages/MovementsPage';
import { OverviewPage } from './pages/OverviewPage';
import { PlansPage } from './pages/PlansPage';
import { PricingPage } from './pages/PricingPage';
import { ProductsPage } from './pages/ProductsPage';
import { ProfilePage } from './pages/ProfilePage';
import { SettingsPage } from './pages/SettingsPage';

const menuItems = [
  { label: 'Visão geral', to: '/' },
  { label: 'Movimentações financeiras', to: '/movements' },
  { label: 'Análise financeira', to: '/analysis' },
  { label: 'Formação de preço', to: '/pricing' },
  { label: 'Produtos e serviços', to: '/products' },
  { label: 'Aprenda', to: '/learn' },
  { label: 'Planos FREE e PRO', to: '/plans' },
  { label: 'Configurações', to: '/settings' },
  { label: 'Perfil e conta', to: '/profile' },
];

function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-box">
          <div className="brand-mark">RF</div>
          <div>
            <p className="eyebrow">RESOLUTA AGI</p>
            <h1>RESOLUTA FINANCE</h1>
          </div>
        </div>

        <nav className="nav" aria-label="Menu principal">
          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-card">
          <span className="pill pill-gold">Plano atual</span>
          <h3>FREE</h3>
          <p>Recursos essenciais para começar a organizar suas finanças.</p>
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div>
            <p className="eyebrow">Dashboard financeiro</p>
            <h2>Entenda seus números. Tome melhores decisões.</h2>
          </div>
          <div className="topbar-actions">
            <button className="ghost-button">Exportar</button>
            <button className="primary-button">Adicionar movimentação</button>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/movements" element={<MovementsPage />} />
          <Route path="/analysis" element={<AnalysisPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
