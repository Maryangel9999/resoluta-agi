export function AnalysisPage() {
  return (
    <div className="page-section">
      <section className="panel">
        <div className="panel-header">
          <h3>Relatórios e indicadores</h3>
          <span className="pill pill-blue">Comparativo</span>
        </div>
        <div className="report-grid">
          <article className="metric-box">
            <span>Receitas</span>
            <strong>R$ 33.400,00</strong>
          </article>
          <article className="metric-box">
            <span>Custos</span>
            <strong>R$ 12.980,00</strong>
          </article>
          <article className="metric-box">
            <span>Despesas</span>
            <strong>R$ 7.490,00</strong>
          </article>
          <article className="metric-box">
            <span>Resultado estimado</span>
            <strong>R$ 12.930,00</strong>
          </article>
        </div>
      </section>
    </div>
  );
}
