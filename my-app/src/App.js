import Todo from '././components/Todo';

function App() {
  return (
    <div>
      <h1>Salajärven mökin askareet:</h1>
      <div style={{ marginBottom: '10px' }}>
        <Todo text='Yrttien kasvatusalustan rakentaminen' />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <Todo text='Yrttilaatikon maalaus Tikkurilan Versolla' />
      </div>
    </div>
  );
}

export default App;