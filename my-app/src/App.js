import Todo from '././components/Todo';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Salajärven mökin askareet:</h1>
      <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px' }}>
        <div style={{ marginRight: '10px' }}>
          <Todo text='Yrttien kasvatusalustan rakentaminen' />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <Todo text='Yrttilaatikon maalaus Tikkurilan Versolla' />
        </div>
      </div>
      <div style={{ flexShrink: 0, marginBottom: '10px', marginRight: '10px' }}>
        <Todo text='Kasvatusalustan maan muokkaus' />
      </div>
    </div>
  );
}

export default App;