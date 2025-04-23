import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadSearchDataset, searchRandomItem } from '../store/searchRandomOneSlice';

const SearchRow = () => {
  const dispatch = useDispatch();
  const { foundItem, searchTime, status } = useSelector((state) => state.search);

  const handleSearch = async (count) => {
    await dispatch(loadSearchDataset(count));
    dispatch(searchRandomItem());
  };

  return (
    <div>
      <h3>Busca de Registro Aleatório</h3>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <button onClick={() => handleSearch(10000)}>Buscar</button>
      </div>

      {status === 'loading' && <p>Carregando dados...</p>}
      {searchTime !== null && (
        <p>⏱️ Tempo de busca: {searchTime.toFixed(2)} ms</p>
      )}

      {foundItem && (
        <div>
          <h4>Registro encontrado:</h4>
          <pre>{JSON.stringify(foundItem, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default SearchRow;
