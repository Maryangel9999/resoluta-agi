import { useMemo, useState } from 'react';

export function PricingPage() {
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
