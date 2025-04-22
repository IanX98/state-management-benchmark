import { useDispatch, useSelector } from 'react-redux';
import {
  fetchSmallData,
  fetchMediumData,
  fetchLargeData,
  clearData
} from '../store/dataSlice';
import Header from '../components/Header';
import ActionButtons from '../components/ActionButtons';
import DataTable from '../components/DataTable';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.data);

  const handleDatasetChange = (size) => {
    dispatch(clearData());
    if (size === 'small') dispatch(fetchSmallData());
    if (size === 'medium') dispatch(fetchMediumData());
    if (size === 'large') dispatch(fetchLargeData());
  };

  const clearDataset = () => {
    dispatch(clearData());
  }

  return (
    <div>
      <Header onSelectDataset={handleDatasetChange} />
      <ActionButtons onCreate={() => {}} onEdit={() => {}} onDelete={() => {}} onClear={() => clearDataset()} />
      {status === 'loading' && <p>Loading...</p>}
      <DataTable items={items} />
    </div>
  );
};

export default Dashboard;
