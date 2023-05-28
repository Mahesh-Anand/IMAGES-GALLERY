import { useState  } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Search from "./components/Search"

// const handleSearchSubmit = (e) =>{
//   e.preventDefault()
//   console.log(e.target[0].value)
  
// } //move this to  App as this is working inside it or after it
 
function App() {
  const [word, setWord] = useState('');

  const handleSearchSubmit = (e) =>{
    e.preventDefault()
   
    console.log(word)
    
  }
  console.log(word) 
    
  return (
    
    // <div className="App">
      // {/* <h1>Images Gallery</h1> */}
      <div >
      <Header title = "Image Gallery" />
      <Search word = {word} setWord = {setWord} handleSubmit = {handleSearchSubmit}/>
    </div>
  );
}

export default App;
 