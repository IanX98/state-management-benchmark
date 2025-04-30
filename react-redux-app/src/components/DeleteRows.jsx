import { useDispatch, useSelector } from "react-redux";
import { deleteRows } from "../store/deleteSlice";

const DeleteRows = () => {
  const dispatch = useDispatch();
  const { items, status, deleteTime } = useSelector((state) => state.delete);

  const handleDelete = (count) => {
    dispatch(deleteRows(count));
  };

  return (
    <div>
      <h3>Deleção de Linhas</h3>

      <button onClick={() => handleDelete(1)} id="delete-1">
        Deletar 1 linha
      </button>
      <button onClick={() => handleDelete(100)} id="delete-100">
        Deletar 100 linhas
      </button>
      <button onClick={() => handleDelete(1000)} id="delete-1000">
        Deletar 1000 linhas
      </button>
      <button onClick={() => handleDelete(10000)} id="delete-10000">
        Deletar 10000 linhas
      </button>

      {status === "loading" && <p>Carregando...</p>}
      {deleteTime && (
        <p id="delete-time">Tempo de deleção: {deleteTime.toFixed(2)} ms</p>
      )}

      {status === "succeeded" && items.length > 0 && (
        <DataTable items={items} />
      )}
    </div>
  );
};

export default DeleteRows;
