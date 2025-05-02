import DataTable from './DataTable';
import { useDispatch, useSelector } from 'react-redux';
import { generateLocalRows } from '../store/createSlice';

const CreateRows = () => {
  const dispatch = useDispatch();
  const { items, status, loadTime } = useSelector((state) => state.create);

  const handleGenerate = (amount) => {
    dispatch(generateLocalRows(amount));
  };

  return (
    <div>
      <h3>Criar de linhas com Redux</h3>

      <div style={{ display: "flex", gap: "10px", marginBottom: "1rem" }}>
        <button onClick={() => handleGenerate(1)} id="create-1">
          Criar 1 linha
        </button>
        <button onClick={() => handleGenerate(100)} id="create-100">
          Criar 100 linhas
        </button>
        <button onClick={() => handleGenerate(1000)} id="create-1000">
          Criar 1000 linhas
        </button>
        <button onClick={() => handleGenerate(10000)} id="create-10000">
          Criar 10000 linhas
        </button>
      </div>

      {status === "loading" && <p>Carregando...</p>}
      {loadTime !== null && (
        <p id="create-time">Tempo de criação: {loadTime.toFixed(2)} ms</p>
      )}

      {status === "succeeded" && items.length > 0 && (
        <DataTable items={items} />
      )}
    </div>
  );
};

export default CreateRows;
