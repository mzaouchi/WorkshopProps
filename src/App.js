import './App.css';
import Aziz from './Components/Aziz';
import Player from './Components/Player';
import player from './player';

function App() {
  var name = "Brahim"
  var aziz = 2003
  const age = 28
  var names = ["Rim","Mohamed","Aziz","Brahim","Aziz","Mahmoud"]
  var bestUser = {name : 'Mohamed',age : 31, adress : 'Testour'}
  const handleHello=()=> alert('Hello')
  const handleName=(a)=> alert(`Hello ${a}`)
  var test = true
  return (
    <div>
      <h1>Workshop Props</h1>
      <Aziz name={name} age={age} names={names} bestUser={bestUser} aziz={aziz} handleHello={handleHello} handleName={handleName} test={test}>
        <h2>Rim</h2>
        <h5>Aziz</h5>
        <img src='/logo192.png' alt='Not Found'/>
      </Aziz>
      <div className='aziz'>
        {
          player.map((el,i,t)=> <Player key={i} el={el}/>)
        }
      </div>
    </div>
  );
}

export default App;
