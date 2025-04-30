import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadEditDataset, editRows } from '../store/updateSlice';
import DataTable from './DataTable';

const EditRows = () => {
  const dispatch = useDispatch();
  const { items, status, editTime, editedCount } = useSelector((state) => state.edit);

  const handleEdit = async (count) => {
    await dispatch(loadEditDataset(count));
    dispatch(editRows(count));
  };

  return (
    <div>
      <h3>Edição de Linhas com Redux</h3>

      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <button onClick={() => handleEdit(1)} id="edit-1">
          Editar 1 linha
        </button>
        <button onClick={() => handleEdit(100)} id="edit-100">
          Editar 100 linhas
        </button>
        <button onClick={() => handleEdit(1000)} id="edit-1000">
          Editar 1000 linhas
        </button>
        <button onClick={() => handleEdit(10000)} id="edit-10000">
          Editar 10000 linhas
        </button>
      </div>

      {status === "loading" && <p>Carregando dataset...</p>}
      {editTime !== null && (
        <p id="edit-time">
          ⏱️ Editou {editedCount} linhas em {editTime.toFixed(2)} ms
        </p>
      )}

      {items.length > 0 && <DataTable items={items} />}
    </div>
  );
};

export default EditRows;
