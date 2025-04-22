import { useDispatch, useSelector } from 'react-redux';
import { generateLocalRows } from '../store/dataSlice';

const LoadRowsRedux = () => {
  const dispatch = useDispatch();
  const { items, status, loadTime } = useSelector((state) => state.data);

  const handleGenerate = (amount) => {
    dispatch(generateLocalRows(amount));
  };

  return (
    <div>
      <h3>Carregamento de linhas com Redux</h3>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '1rem' }}>
        <button onClick={() => handleGenerate(1)}>Gerar 1 linha</button>
        <button onClick={() => handleGenerate(100)}>Gerar 100 linhas</button>
        <button onClick={() => handleGenerate(1000)}>Gerar 1000 linhas</button>
        <button onClick={() => handleGenerate(10000)}>Gerar 10000 linhas</button>
      </div>

      {status === 'loading' && <p>Carregando...</p>}
      {loadTime && <p>Tempo de carregamento: {loadTime.toFixed(2)} ms</p>}

      {status === 'succeeded' && items.length > 0 && (
        <table border="1" cellPadding="4" cellSpacing="0">
          <thead>
            <tr>
              <th>ID</th>
              <th>Model</th>
              <th>Plate</th>
              <th>Capacity</th>
              <th>Last Maintenance</th>
            </tr>
          </thead>
          <tbody>
            {items.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.model}</td>
                <td>{row.plate}</td>
                <td>{row.capacity}</td>
                <td>{row.lastMaintenance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default LoadRowsRedux;
