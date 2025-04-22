import CreateRows from '../components/CreateRowsRedux';

const Dashboard = () => {

  return (
    <div>
      <CreateRows />
      {/* Aqui futuramente podemos colocar: */}
      {/* {selectedAction === 'criar' && <LoadRows />} */}
      {/* {selectedAction === 'deletar' && <DeleteRows />} */}
      {/* {selectedAction === 'editar' && <EditRows />} */}
    </div>
  );
};

export default Dashboard;
