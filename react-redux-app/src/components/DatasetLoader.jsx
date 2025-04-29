import DataTable from './DataTable';
import { useDispatch, useSelector } from 'react-redux';
import { readJsonData, clearReadData } from '../store/readSlice';

const DatasetLoader = () => {
  const dispatch = useDispatch();
  const { items, status, loadTime } = useSelector((state) => state.read);

  const handleRead = (dataSet) => {
      dispatch(readJsonData(dataSet));
    };

  return (
    <div className="flex gap-2 my-4">
      <h3>Ler linhas com Redux</h3>
      <button onClick={() => handleRead("1-dataset.json")} id="read-1">
        Ler 1 linha
      </button>
      <button onClick={() => handleRead("100-dataset.json")} id="read-100">
        Ler 100 linhas
      </button>
      <button onClick={() => handleRead("1000-dataset.json")} id="read-1000">
        Ler 1000 linhas
      </button>
      <button onClick={() => handleRead("10000-dataset.json")} id="read-10000">
        Ler 10000 linhas
      </button>

      <button onClick={() => handleRead(clearReadData())}>Limpar</button>

      {status === "loading" && <p>Carregando...</p>}
      {loadTime && <p>Tempo de carregamento: {loadTime.toFixed(2)} ms</p>}

      {status === "succeeded" && items.length > 0 && (
        <DataTable items={items} />
      )}
    </div>
  );
};

export default DatasetLoader;
