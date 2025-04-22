const ActionButtons = ({ onCreate, onEdit, onDelete, onClear }) => (
  <div style={{ marginBottom: '1rem' }}>
    <button onClick={onCreate}>Criar</button>
    <button onClick={onEdit}>Editar</button>
    <button onClick={onDelete}>Deletar</button>
    <button onClick={onClear}>Limpar</button>
  </div>
);

export default ActionButtons;
