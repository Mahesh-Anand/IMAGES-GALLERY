import { useState  } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Search from "./components/Search"

// const handleSearchSubmit = (e) =>{
//   e.preventDefault()
//   console.log(e.target[0].value)
  
// } //move this to  App as this is working inside it or after it
const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY
function App() {
  const [word, setWord] = useState('');

  const handleSearchSubmit = (e) =>{
    e.preventDefault() // To remove refreshing the content so that we can take the values
   
    console.log(word)
    fetch(`https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`)
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data);
        })
    .catch((err)=>{
      console.log(err);
    })
    
  }
  // console.log(word) 
  console.log(process.env.REACT_APP_UNSPLASH_KEY) 
    
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
 