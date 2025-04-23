import CreateRows from '../components/CreateRows';
import DatasetLoader from '../components/DatasetLoader';

const Dashboard = () => {

  return (
    <div>
      <CreateRows />
      <DatasetLoader />
      {/* Aqui futuramente podemos colocar: */}
      {/* {selectedAction === 'criar' && <LoadRows />} */}
      {/* {selectedAction === 'deletar' && <DeleteRows />} */}
      {/* {selectedAction === 'editar' && <EditRows />} */}
    </div>
  );
};

export default Dashboard;
