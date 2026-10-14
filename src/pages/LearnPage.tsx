const products = [
  { id: 1, name: 'Plano de consultoria mensal', category: 'Serviço', unit: 'mensal', price: 900, quantity: 8, margin: 38 },
  { id: 2, name: 'Kit de gestão financeira', category: 'Produto', unit: 'unidade', price: 260, quantity: 16, margin: 27 },
  { id: 3, name: 'Assessoria de precificação', category: 'Serviço', unit: 'projeto', price: 1400, quantity: 5, margin: 31 },
];

export function ProductsPage() {
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
