const DataTable = ({ items }) => (
  <table id="data-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Model</th>
        <th>Plate</th>
        <th>Capacity</th>
        <th>Last Maintenance</th>
      </tr>
    </thead>
    <tbody>
      {items.map((item, index) => (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.model}</td>
          <td>{item.plate}</td>
          <td>{item.capacity}</td>
          <td>{item.lastMaintenance}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default DataTable;
