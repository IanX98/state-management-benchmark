import EditRows from '../components/EditRows';
import CreateRows from '../components/CreateRows';
import DeleteRows from "../components/DeleteRows";
import DatasetLoader from '../components/DatasetLoader';

const Dashboard = () => {

  return (
    <div>
      <CreateRows />
      <DatasetLoader />
      <DeleteRows />
      <EditRows />
    </div>
  );
};

export default Dashboard;
