import EditRows from '../components/EditRows';
import CreateRows from '../components/CreateRows';
import DeleteRows from '../components/DeleteRows';
import SearchRow from '../components/SearchRandomOne';
import DatasetLoader from '../components/DatasetLoader';

const Dashboard = () => {

  return (
    <div>
      <CreateRows />
      <DatasetLoader />
      <DeleteRows />
      <EditRows />
      <SearchRow />
    </div>
  );
};

export default Dashboard;
