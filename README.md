:root {
  --navy-900: #071D49;
  --gold-500: #D4A52B;
  --action-blue: #1B56B8;
  --bg-page: #F6F8FB;
  --white: #FFFFFF;
  --border: #E5E7EB;
  --text-secondary: #6B7280;
  --success: #16a34a;
  --warning: #f59e0b;
  --danger: #dc2626;
  --shadow: 0 10px 24px rgba(7, 29, 73, 0.08);
}

* {
  box-sizing: border-box;
}

html {
  color-scheme: light;
}

body {
  margin: 0;
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
  background: var(--bg-page);
  color: var(--navy-900);
}

button,
input,
select {
  font: inherit;
}

button {
  cursor: pointer;
}

#root {
  min-height: 100vh;
}

.app-shell {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 280px;
  background: var(--navy-900);
  color: var(--white);
  padding: 24px 18px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.brand-box {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.brand-mark {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--gold-500), #f5cd64);
  color: var(--navy-900);
  font-weight: 700;
}

.eyebrow {
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

.brand-box h1,
.topbar h2,
.panel-header h3,
.plan-card h4,
.learn-card h4,
.profile-card h4 {
  margin: 0;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nav-item {
  color: rgba(255, 255, 255, 0.82);
  text-decoration: none;
  padding: 11px 12px;
  border-radius: 12px;
  transition: 0.2s ease;
}

.nav-item:hover,
.nav-item.active {
  background: rgba(255, 255, 255, 0.08);
  color: var(--white);
}

.sidebar-card {
  margin-top: auto;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 18px;
}

.sidebar-card h3 {
  margin: 8px 0;
}

.sidebar-card p {
  margin: 0;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.5;
}

.main-panel {
  flex: 1;
  padding: 26px 28px 40px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}

.topbar h2 {
  font-size: clamp(1.5rem, 2vw, 2rem);
}

.topbar-actions {
  display: flex;
  gap: 12px;
}

.page-section {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.kpis-grid,
.row-grid,
.report-grid,
.plans-grid,
.learn-grid {
  display: grid;
  gap: 16px;
}

.kpis-grid {
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
}

.row-grid {
  grid-template-columns: 1.5fr 1fr;
}

.report-grid,
.learn-grid,
.plans-grid {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.kpi-card,
.panel,
.metric-box,
.learn-card,
.plan-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow);
}

.kpi-card {
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.kpi-card strong {
  font-size: clamp(1.2rem, 2vw, 1.8rem);
}

.kpi-card.positive { border-top: 4px solid var(--success); }
.kpi-card.warning { border-top: 4px solid var(--warning); }
.kpi-card.danger { border-top: 4px solid var(--danger); }
.kpi-card.neutral { border-top: 4px solid var(--text-secondary); }
.kpi-card.accent { border-top: 4px solid var(--action-blue); }

.panel {
  padding: 20px;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
}

.pill {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  font-size: 0.72rem;
  padding: 6px 10px;
  background: rgba(27, 86, 184, 0.12);
  color: var(--action-blue);
  border: 1px solid rgba(27, 86, 184, 0.14);
}

.pill-gold {
  background: rgba(212, 165, 43, 0.12);
  border-color: rgba(212, 165, 43, 0.16);
  color: var(--gold-500);
}

.pill-blue {
  background: rgba(27, 86, 184, 0.12);
  color: var(--action-blue);
}

.chart-placeholder {
  min-height: 220px;
  display: flex;
  align-items: end;
  padding: 12px 0;
}

.bars {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 12px;
  align-items: end;
}

.bars span {
  display: block;
  border-radius: 12px 12px 0 0;
  background: linear-gradient(180deg, var(--action-blue), var(--navy-900));
}

.list-plain {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.list-plain li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid var(--border);
  padding-bottom: 12px;
}

.list-plain li:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.list-plain small {
  display: block;
  color: var(--text-secondary);
  margin-top: 4px;
}

.positive-text {
  color: var(--success);
  font-weight: 700;
}

.negative-text {
  color: var(--danger);
  font-weight: 700;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.form-grid.compact {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.form-grid label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-weight: 600;
}

.form-grid input,
.form-grid select {
  border: 1px solid var(--border);
  background: var(--white);
  border-radius: 10px;
  padding: 11px 12px;
  color: var(--navy-900);
}

.full-width {
  grid-column: 1 / -1;
}

.actions-row {
  display: flex;
  justify-content: flex-start;
  margin-top: 6px;
}

.primary-button,
.ghost-button,
.small-button {
  border-radius: 10px;
  padding: 10px 14px;
  border: 1px solid transparent;
  transition: transform 0.2s ease;
}

.primary-button {
  background: var(--action-blue);
  color: var(--white);
}

.ghost-button {
  background: transparent;
  border-color: var(--border);
  color: var(--navy-900);
}

.small-button {
  background: #f3f4f6;
  color: var(--navy-900);
  padding: 7px 10px;
  margin-right: 6px;
}

.small-button.danger {
  background: rgba(220, 38, 38, 0.08);
  color: var(--danger);
}

.primary-button:hover,
.ghost-button:hover,
.small-button:hover {
  transform: translateY(-1px);
}

.filters-row {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.filters-row select {
  border: 1px solid var(--border);
  background: var(--white);
  border-radius: 10px;
  padding: 8px 10px;
}

.table-wrap {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 12px 10px;
  border-bottom: 1px solid var(--border);
  text-align: left;
}

th {
  font-size: 0.8rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--text-secondary);
}

.metric-box {
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.metric-box span {
  color: var(--text-secondary);
}

.metric-box strong {
  font-size: 1.6rem;
}

.pricing-layout {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 20px;
}

.result-box {
  background: linear-gradient(180deg, #f8faff, var(--white));
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 18px;
}

.result-box h4 {
  margin-top: 0;
}

.result-box ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.learn-card,
.plan-card {
  padding: 18px;
}

.learn-card p,
.plan-card ul,
.profile-card p {
  margin: 0;
  color: var(--text-secondary);
  line-height: 1.6;
}

.plan-card.featured {
  border-color: rgba(212, 165, 43, 0.4);
  box-shadow: 0 12px 32px rgba(212, 165, 43, 0.1);
}

.plan-card ul {
  list-style: disc;
  padding-left: 18px;
  margin-top: 12px;
}

.settings-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.settings-list div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 14px 16px;
}

.profile-card {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 18px;
}

.avatar {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--navy-900), var(--action-blue));
  color: var(--white);
  display: grid;
  place-items: center;
  font-weight: 700;
}

.error-text {
  color: var(--danger);
  font-weight: 700;
}

@media (max-width: 980px) {
  .app-shell {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
  }

  .row-grid,
  .pricing-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .main-panel {
    padding: 18px 14px 30px;
  }

  .topbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .form-grid,
  .form-grid.compact {
    grid-template-columns: 1fr;
  }

  .topbar-actions {
    width: 100%;
    flex-wrap: wrap;
  }
}
