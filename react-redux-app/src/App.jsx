import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLargeData } from './store/dataSlice';

const App = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchLargeData());
  }, [dispatch]);

  return (
    <div>
      <h1>Large Dataset</h1>
      {status === 'loading' && <p>Loading...</p>}
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
        <tbody> {items.map((item, index) => (
           <tr key={index}> 
            <td>{item.id ?? '-'}</td> 
            <td>{item.model ?? '-'}</td> 
            <td>{item.plate ?? '-'}</td> 
            <td>{item.capacity ?? '-'}</td> 
            <td>{item.lastMaintenance ?? '-'}</td> 
           </tr> ))} 
        </tbody>
      </table>
    </div>
  );
};

export default App;
