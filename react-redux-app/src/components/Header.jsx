const Header = ({ onSelectDataset }) => (
    <header style={{ marginBottom: '1rem' }}>
      <button onClick={() => onSelectDataset('small')}>Small</button>
      <button onClick={() => onSelectDataset('medium')}>Medium</button>
      <button onClick={() => onSelectDataset('large')}>Large</button>
    </header>
  );
  
  export default Header;
  