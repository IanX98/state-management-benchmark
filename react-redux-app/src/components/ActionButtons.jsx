import { useDispatch } from 'react-redux';
import { generateLocalRows, clearData } from '../store/createSlice';

const ActionButtons = ({ selectedAction }) => {
  const dispatch = useDispatch();

  const handleAction = (amount) => {
    switch (selectedAction) {
      case 'carregar':
        dispatch(generateLocalRows(amount));
        break;
      case 'criar':
        console.log(`Criar ${amount} linha(s)...`);
        break;
      case 'deletar':
        console.log(`Deletar ${amount} linha(s)...`);
        break;
      case 'editar':
        console.log(`Editar ${amount} linha(s)...`);
        break;
      default:
        break;
    }
  };

  return (
    <div style={{ padding: '1rem', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
      {[1, 100, 1000, 10000].map((amount) => (
        <button key={amount} onClick={() => handleAction(amount)}>
          {`${selectedAction} ${amount}`}
        </button>
      ))}
      <button onClick={() => dispatch(clearData())}>Limpar</button>
    </div>
  );
};

export default ActionButtons;
