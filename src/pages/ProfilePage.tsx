export function SettingsPage() {
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
