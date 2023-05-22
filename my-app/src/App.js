import Todo from '././components/Todo';
import { useState } from 'react';

function App() {
  const [choreList, setchoreList]=useState([{name:'Yrttien kasvatusalustan rakentaminen'}, {name: 'Maalaus Verso maalilla'}, {name: 'Mökin maalaus'}]);
  const [inputText, setinputText]=useState('');
  return (
    <div style={{ display: 'flex', flexDirection: 'column'}}>
      <h1>Salajärven mökin työaskareet:</h1>
      <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px', flexWrap: 'wrap', rowGap: '10px', columnGap: '10px'}}>
       {
        choreList.map(item => (
          <div>
          <Todo text={item.name} />
        </div>
        ))
        }
      </div>
      <form>
        <input type='text' onChange={event => setinputText(event.target.value)} value={inputText}/>
        <button onClick={event => {
          event.preventDefault()
          if (inputText.length > 0){setchoreList([...choreList,{name:inputText}])}
          setinputText('')
          }
          }>
          Lisää
        </button>
      </form>
      {inputText}
    </div>
  );
}

export default App;