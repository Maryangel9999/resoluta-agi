import { useMemo, useState } from 'react';

type Movement = {
  id: string;
  type: 'Entrada' | 'Saída';
  category: string;
  value: number;
  status: 'Realizada' | 'Paga' | 'Pendente';
  date: string;
  dueDate: string;
  description: string;
};

const initialMovements: Movement[] = [
  { id: 'MOV-001', type: 'Entrada', category: 'Vendas', value: 3200, status: 'Realizada', date: '2026-10-10', dueDate: '2026-10-12', description: 'Venda do kit de consultoria' },
  { id: 'MOV-002', type: 'Saída', category: 'Fornecedor', value: 1450, status: 'Paga', date: '2026-10-09', dueDate: '2026-10-09', description: 'Compra de materiais' },
  { id: 'MOV-003', type: 'Saída', category: 'Marketing', value: 680, status: 'Pendente', date: '2026-10-12', dueDate: '2026-10-20', description: 'Campanha de anúncios' },
  { id: 'MOV-004', type: 'Entrada', category: 'Vendas', value: 2150, status: 'Pendente', date: '2026-10-14', dueDate: '2026-10-18', description: 'Pagamento de serviço de manutenção' },
];

export function MovementsPage() {
  const [movements, setMovements] = useState<Movement[]>(initialMovements);
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

  const [filter, setFilter] = useState({
    type: 'Todos',
    category: 'Todas',
    status: 'Todos',
  });

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.value || !form.date || !form.description) {
      alert('Preencha valor, data e descrição para continuar.');
      return;
    }

    const newMovement: Movement = {
      id: form.id || `MOV-${String(movements.length + 1).padStart(3, '0')}`,
      type: form.type as 'Entrada' | 'Saída',
      value: Number(form.value),
      category: form.category,
      status: form.status as 'Realizada' | 'Paga' | 'Pendente',
      date: form.date,
      dueDate: form.dueDate || form.date,
      description: form.description,
    };

    setMovements((current) => [newMovement, ...current]);
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
    setMovements((current) => current.filter((movement) => movement.id !== id));
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
              <option>Paga</option>
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
