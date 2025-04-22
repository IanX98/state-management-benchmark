import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchSingleData,
  fetchSmallData,
  fetchMediumData,
  fetchLargeData,
  clearData
} from './store/dataSlice';

const App = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.data);

  return (
    <div>
      <h1>React Data Viewer</h1>
      <div style={{ marginBottom: '16px' }}>
        <button onClick={() => dispatch(fetchSingleData())}>Carregar 1</button>
        <button onClick={() => dispatch(fetchSmallData())}>Carregar 100</button>
        <button onClick={() => dispatch(fetchMediumData())}>Carregar 1000</button>
        <button onClick={() => dispatch(fetchLargeData())}>Carregar 10000</button>
        <button onClick={() => dispatch(clearData())}>Limpar</button>
      </div>

      {status === 'loading' && <p>Carregando dados...</p>}

      {items.length > 0 && (
        <table id="data-table" border="1" cellPadding="5">
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
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.model}</td>
                <td>{item.plate}</td>
                <td>{item.capacity}</td>
                <td>{item.lastMaintenance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default App;
