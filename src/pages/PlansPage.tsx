const topics = [
  'Educação financeira para pequenos negócios',
  'Fluxo de caixa',
  'Faturamento, receita e lucro',
  'Custos fixos e variáveis',
  'Despesas operacionais',
  'Capital de giro',
  'Margem de lucro',
  'Markup e formação de preço',
  'Ponto de equilíbrio',
  'Controle de estoque',
  'Planejamento financeiro',
  'Indicadores de desempenho',
];

export function LearnPage() {
  return (
    <div className="page-section">
      <section className="panel">
        <div className="panel-header">
          <h3>Aprenda</h3>
          <span className="pill">Conteúdo educacional</span>
        </div>
        <div className="learn-grid">
          {topics.map((topic) => (
            <article key={topic} className="learn-card">
              <h4>{topic}</h4>
              <p>Entenda o conceito com exemplos práticos e orientações simples para tomar decisões com mais clareza.</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
