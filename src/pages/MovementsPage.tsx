export function OverviewPage() {
  return (
    <div className="page-section">
      <div className="kpis-grid">
        <article className="kpi-card positive">
          <span>Faturamento recebido</span>
          <strong>R$ 18.200,00</strong>
        </article>
        <article className="kpi-card warning">
          <span>Entradas pendentes</span>
          <strong>R$ 6.400,00</strong>
        </article>
        <article className="kpi-card neutral">
          <span>Custos e despesas pagas</span>
          <strong>R$ 9.870,00</strong>
        </article>
        <article className="kpi-card danger">
          <span>Contas a pagar</span>
          <strong>R$ 4.150,00</strong>
        </article>
        <article className="kpi-card positive">
          <span>Resultado financeiro realizado</span>
          <strong>R$ 8.330,00</strong>
        </article>
        <article className="kpi-card accent">
          <span>Resultado estimado</span>
          <strong>R$ 9.850,00</strong>
        </article>
      </div>

      <div className="row-grid">
        <section className="panel">
          <div className="panel-header">
            <h3>Evolução das receitas e despesas</h3>
            <span className="pill">Últimos 6 meses</span>
          </div>
          <div className="chart-placeholder" aria-label="Gráfico de receitas e despesas">
            <div className="bars">
              <span style={{ height: '42%' }} />
              <span style={{ height: '58%' }} />
              <span style={{ height: '66%' }} />
              <span style={{ height: '78%' }} />
              <span style={{ height: '72%' }} />
              <span style={{ height: '88%' }} />
            </div>
          </div>
        </section>

        <section className="panel">
          <div className="panel-header">
            <h3>Movimentações recentes</h3>
            <span className="pill pill-blue">Hoje</span>
          </div>
          <ul className="list-plain">
            <li>
              <div>
                <strong>Vendas</strong>
                <small>Pagamento de serviço</small>
              </div>
              <span className="positive-text">+ R$ 2.500</span>
            </li>
            <li>
              <div>
                <strong>Fornecedor</strong>
                <small>Compra de materiais</small>
              </div>
              <span className="negative-text">- R$ 1.450</span>
            </li>
            <li>
              <div>
                <strong>Marketing</strong>
                <small>Campanha de anúncios</small>
              </div>
              <span className="negative-text">- R$ 680</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
