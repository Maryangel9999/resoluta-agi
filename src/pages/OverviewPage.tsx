import { useMemo, useState } from 'react';

const initialMovements = [
  { id: 'MOV-001', type: 'Entrada', category: 'Vendas', value: 3200, status: 'Realizada', date: '2026-10-10', dueDate: '2026-10-12', description: 'Venda do kit de consultoria' },
  { id: 'MOV-002', type: 'Saída', category: 'Fornecedor', value: 1450, status: 'Paga', date: '2026-10-09', dueDate: '2026-10-09', description: 'Compra de materiais' },
  { id: 'MOV-003', type: 'Saída', category: 'Marketing', value: 680, status: 'Pendente', date: '2026-10-12', dueDate: '2026-10-20', description: 'Campanha de anúncios' },
  { id: 'MOV-004', type: 'Entrada', category: 'Vendas', value: 2150, status: 'Pendente', date: '2026-10-14', dueDate: '2026-10-18', description: 'Pagamento de serviço de manutenção' },
];

const initialProducts = [
  { id: 1, name: 'Plano de consultoria mensal', category: 'Serviço', unit: 'mensal', price: 900, quantity: 8, margin: 38 },
  { id: 2, name: 'Kit de gestão financeira', category: 'Produto', unit: 'unidade', price: 260, quantity: 16, margin: 27 },
  { id: 3, name: 'Assessoria de precificação', category: 'Serviço', unit: 'projeto', price: 1400, quantity: 5, margin: 31 },
];

function OverviewPage() {
  const summary = [
    { label: 'Faturamento recebido', value: 'R$ 18.200,00', tone: 'positive' },
    { label: 'Entradas pendentes', value: 'R$ 6.400,00', tone: 'warning' },
    { label: 'Custos e despesas pagas', value: 'R$ 9.870,00', tone: 'neutral' },
    { label: 'Contas a pagar', value: 'R$ 4.150,00', tone: 'danger' },
    { label: 'Resultado financeiro realizado', value: 'R$ 8.330,00', tone: 'positive' },
    { label: 'Resultado estimado', value: 'R$ 9.850,00', tone: 'accent' },
  ];

  return (
    <div className="page-section">
      <div className="kpis-grid">
        {summary.map((item) => (
          <article key={item.label} className={`kpi-card ${item.tone}`}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </article>
        ))}
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
            {initialMovements.slice(0, 4).map((entry) => (
              <li key={entry.id}>
                <div>
                  <strong>{entry.category}</strong>
                  <small>{entry.description}</small>
                </div>
                <span className={entry.type === 'Entrada' ? 'positive-text' : 'negative-text'}>
                  {entry.type === 'Entrada' ? '+' : '-'} R$ {entry.value.toLocaleString('pt-BR')}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

function MovementsPage() {
  const [movements, setMovements] = useState(initialMovements);
  const [form, setForm] = useState({
    id: '',
    type: 'Entrada',
    value: '',
    category: 'Vendas',
    status: 'Realizada',
    date: '',
    dueDate: '',
    description: '',
  });

  const [filter, setFilter] = useState({ type: 'Todos', category: 'Todas', status: 'Todos' });

  const filteredMovements = useMemo(() => {
    return movements.filter((movement) => {
      const matchesType = filter.type === 'Todos' || movement.type === filter.type;
      const matchesCategory = filter.category === 'Todas' || movement.category === filter.category;
      const matchesStatus = filter.status === 'Todos' || movement.status === filter.status;
      return matchesType && matchesCategory && matchesStatus;
    });
  }, [movements, filter]);

  const handleChange = (field: string, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!form.value || !form.date || !form.description) {
      alert('Preencha valor, data e descrição para continuar.');
      return;
    }

    const nextMovement = {
      id: form.id || `MOV-${String(movements.length + 1).padStart(3, '0')}`,
      type: form.type,
      value: Number(form.value),
      category: form.category,
      status: form.status,
      date: form.date,
      dueDate: form.dueDate || form.date,
      description: form.description,
    };

    setMovements((current) => [nextMovement, ...current]);
    setForm({
      id: '',
      type: 'Entrada',
      value: '',
      category: 'Vendas',
      status: 'Realizada',
      date: '',
      dueDate: '',
      description: '',
    });
  };

  const handleDelete = (id: string) => {
    setMovements((current) => current.filter((item) => item.id !== id));
  };

  return (
    <div className="page-section">
      <section className="panel">
        <div className="panel-header">
          <h3>Cadastrar movimentação</h3>
          <button type="button" className="ghost-button" onClick={() => setForm({ id: '', type: 'Entrada', value: '', category: 'Vendas', status: 'Realizada', date: '', dueDate: '', description: '' })}>Limpar</button>
        </div>

        <form className="form-grid" onSubmit={handleSubmit}>
          <label>
            Tipo
            <select value={form.type} onChange={(event) => handleChange('type', event.target.value)}>
              <option>Entrada</option>
              <option>Saída</option>
            </select>
          </label>

          <label>
            Valor (R$)
            <input type="number" min="0" step="0.01" value={form.value} onChange={(event) => handleChange('value', event.target.value)} />
          </label>

          <label>
            Categoria
            <select value={form.category} onChange={(event) => handleChange('category', event.target.value)}>
              <option>Vendas</option>
              <option>Fornecedor</option>
              <option>Despesas</option>
              <option>Materiais</option>
              <option>Aluguel</option>
              <option>Marketing</option>
              <option>Outros</option>
            </select>
          </label>

          <label>
            Status
            <select value={form.status} onChange={(event) => handleChange('status', event.target.value)}>
              <option>Realizada</option>
              <option>Pendente</option>
            </select>
          </label>

          <label>
            Data da movimentação
            <input type="date" value={form.date} onChange={(event) => handleChange('date', event.target.value)} />
          </label>

          <label>
            Data de vencimento
            <input type="date" value={form.dueDate} onChange={(event) => handleChange('dueDate', event.target.value)} />
          </label>

          <label className="full-width">
            Descrição
            <input type="text" value={form.description} onChange={(event) => handleChange('description', event.target.value)} placeholder="Ex.: pagamento de comissão" />
          </label>

          <div className="actions-row full-width">
            <button type="submit" className="primary-button">Salvar movimentação</button>
          </div>
        </form>
      </section>

      <section className="panel">
        <div className="panel-header">
          <h3>Histórico</h3>
          <div className="filters-row">
            <select value={filter.type} onChange={(event) => setFilter((current) => ({ ...current, type: event.target.value }))}>
              <option>Todos</option>
              <option>Entrada</option>
              <option>Saída</option>
            </select>
            <select value={filter.category} onChange={(event) => setFilter((current) => ({ ...current, category: event.target.value }))}>
              <option>Todas</option>
              <option>Vendas</option>
              <option>Fornecedor</option>
              <option>Despesas</option>
              <option>Materiais</option>
              <option>Aluguel</option>
              <option>Marketing</option>
              <option>Outros</option>
            </select>
            <select value={filter.status} onChange={(event) => setFilter((current) => ({ ...current, status: event.target.value }))}>
              <option>Todos</option>
              <option>Realizada</option>
              <option>Paga</option>
              <option>Pendente</option>
            </select>
          </div>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Tipo</th>
                <th>Categoria</th>
                <th>Valor</th>
                <th>Status</th>
                <th>Data</th>
                <th>Descrição</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {filteredMovements.map((movement) => (
                <tr key={movement.id}>
                  <td>{movement.id}</td>
                  <td>{movement.type}</td>
                  <td>{movement.category}</td>
                  <td>R$ {movement.value.toLocaleString('pt-BR')}</td>
                  <td>{movement.status}</td>
                  <td>{movement.date}</td>
                  <td>{movement.description}</td>
                  <td>
                    <button className="small-button" type="button">Editar</button>
                    <button className="small-button danger" type="button" onClick={() => handleDelete(movement.id)}>Excluir</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function AnalysisPage() {
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

function PricingPage() {
  const [form, setForm] = useState({
    name: 'Consultoria de gestão',
    unitCost: '120',
    additionalCost: '40',
    variableExpense: '18',
    fixedExpenseRate: '12',
    desiredMargin: '25',
    quantity: '60',
    currentPrice: '250',
  });

  const result = useMemo(() => {
    const unitCostTotal = Number(form.unitCost) + Number(form.additionalCost);
    const variablePercent = Number(form.variableExpense) / 100;
    const fixedPercent = Number(form.fixedExpenseRate) / 100;
    const desiredMarginPercent = Number(form.desiredMargin) / 100;
    const markupDivisor = 1 - variablePercent - fixedPercent - desiredMarginPercent;

    if (markupDivisor <= 0) {
      return {
        error: 'O markup divisor ficou menor ou igual a zero. Revise as despesas e a margem desejada.',
      };
    }

    const suggestedPrice = unitCostTotal / markupDivisor;
    const revenue = suggestedPrice * Number(form.quantity);
    const totalCost = unitCostTotal * Number(form.quantity);
    const variableCost = variablePercent * revenue;
    const fixedCost = fixedPercent * revenue;
    const grossProfit = revenue - totalCost;
    const netProfit = revenue - (totalCost + variableCost + fixedCost);
    const resultantMargin = (netProfit / revenue) * 100;

    return {
      unitCostTotal,
      suggestedPrice,
      markupMultiplier: suggestedPrice / unitCostTotal,
      revenue,
      totalCost,
      variableCost,
      fixedCost,
      grossProfit,
      netProfit,
      resultantMargin,
      unitProfit: netProfit / Number(form.quantity),
    };
  }, [form]);

  return (
    <div className="page-section">
      <section className="panel">
        <div className="panel-header">
          <h3>Calculadora de precificação</h3>
          <span className="pill" aria-live="polite">Precificação baseada em margem e custos</span>
        </div>

        <div className="pricing-layout">
          <form className="form-grid compact">
            <label>
              Nome do produto ou serviço
              <input type="text" value={form.name} onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))} />
            </label>
            <label>
              Custo unitário direto
              <input type="number" value={form.unitCost} onChange={(event) => setForm((current) => ({ ...current, unitCost: event.target.value }))} />
            </label>
            <label>
              Custos adicionais por unidade
              <input type="number" value={form.additionalCost} onChange={(event) => setForm((current) => ({ ...current, additionalCost: event.target.value }))} />
            </label>
            <label>
              Despesas variáveis %
              <input type="number" value={form.variableExpense} onChange={(event) => setForm((current) => ({ ...current, variableExpense: event.target.value }))} />
            </label>
            <label>
              Despesas fixas %
              <input type="number" value={form.fixedExpenseRate} onChange={(event) => setForm((current) => ({ ...current, fixedExpenseRate: event.target.value }))} />
            </label>
            <label>
              Margem de lucro desejada %
              <input type="number" value={form.desiredMargin} onChange={(event) => setForm((current) => ({ ...current, desiredMargin: event.target.value }))} />
            </label>
            <label>
              Quantidade
              <input type="number" value={form.quantity} onChange={(event) => setForm((current) => ({ ...current, quantity: event.target.value }))} />
            </label>
            <label>
              Preço atual informado
              <input type="number" value={form.currentPrice} onChange={(event) => setForm((current) => ({ ...current, currentPrice: event.target.value }))} />
            </label>
          </form>

          <aside className="result-box">
            {result.error ? (
              <p className="error-text">{result.error}</p>
            ) : (
              <>
                <h4>Resultado sugerido</h4>
                <ul>
                  <li>Custo unitário total: <strong>R$ {Number(result.unitCostTotal).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong></li>
                  <li>Preço de venda sugerido: <strong>R$ {Number(result.suggestedPrice).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong></li>
                  <li>Markup multiplicador: <strong>{Number(result.markupMultiplier).toFixed(2)}x</strong></li>
                  <li>Faturamento estimado: <strong>R$ {Number(result.revenue).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong></li>
                  <li>Lucro líquido estimado: <strong>R$ {Number(result.netProfit).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong></li>
                  <li>Margem resultante: <strong>{Number(result.resultantMargin).toFixed(2)}%</strong></li>
                </ul>
              </>
            )}
          </aside>
        </div>
      </section>
    </div>
  );
}

function ProductsPage() {
  const [products] = useState(initialProducts);

  return (
    <div className="page-section">
      <section className="panel">
        <div className="panel-header">
          <h3>Produtos e serviços</h3>
          <button type="button" className="primary-button">Novo cadastro</button>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Categoria</th>
                <th>Unidade</th>
                <th>Preço</th>
                <th>Estoque</th>
                <th>Margem</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.unit}</td>
                  <td>R$ {product.price.toLocaleString('pt-BR')}</td>
                  <td>{product.quantity}</td>
                  <td>{product.margin}%</td>
                  <td>
                    <button type="button" className="small-button">Editar</button>
                    <button type="button" className="small-button danger">Excluir</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function LearnPage() {
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

function PlansPage() {
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

function SettingsPage() {
  return (
    <div className="page-section">
      <section className="panel">
        <div className="panel-header">
          <h3>Configurações</h3>
        </div>
        <div className="settings-list">
          <div><span>Modo claro/escuro</span><button type="button" className="ghost-button">Ativar tema escuro</button></div>
          <div><span>Notificações</span><button type="button" className="ghost-button">Gerenciar</button></div>
          <div><span>Idioma</span><button type="button" className="ghost-button">Português (Brasil)</button></div>
        </div>
      </section>
    </div>
  );
}

function ProfilePage() {
  return (
    <div className="page-section">
      <section className="panel">
        <div className="panel-header">
          <h3>Perfil e conta</h3>
        </div>
        <div className="profile-card">
          <div className="avatar">RA</div>
          <div>
            <h4>Resoluta AGI</h4>
            <p>Perfil administrativo da vertical financeira</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export {
  AnalysisPage,
  LearnPage,
  MovementsPage,
  OverviewPage,
  PlansPage,
  PricingPage,
  ProductsPage,
  ProfilePage,
  SettingsPage,
};
