import CreateRows from '../components/CreateRows';
import DeleteRows from '../components/DeleteRows';
import DatasetLoader from '../components/DatasetLoader';
import EditRows from '../components/EditRows';

const Dashboard = () => {

  return (
    <div>
      <CreateRows />
      <DatasetLoader />
      <DeleteRows />
      <EditRows />
      {/* Aqui futuramente podemos colocar: */}
      {/* {selectedAction === 'criar' && <LoadRows />} */}
      {/* {selectedAction === 'deletar' && <DeleteRows />} */}
      {/* {selectedAction === 'editar' && <EditRows />} */}
    </div>
  );
};

export default Dashboard;
