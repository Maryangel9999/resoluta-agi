export function PlansPage() {
  return (
    <div className="page-section">
      <section className="panel">
        <div className="panel-header">
          <h3>Planos FREE e PRO</h3>
        </div>
        <div className="plans-grid">
          <article className="plan-card">
            <span className="pill">FREE</span>
            <h4>Para começar</h4>
            <ul>
              <li>Movimentações básicas</li>
              <li>Indicadores essenciais</li>
              <li>Conteúdo educacional</li>
            </ul>
          </article>

          <article className="plan-card featured">
            <span className="pill pill-gold">PRO</span>
            <h4>Para crescimento</h4>
            <ul>
              <li>Relatórios avançados</li>
              <li>Análises comparativas</li>
              <li>Ferramentas ampliadas</li>
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
}
