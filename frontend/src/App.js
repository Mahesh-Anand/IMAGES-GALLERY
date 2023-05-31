import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";


const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;
function App() {
  const [word, setWord] = useState("");
  const [images, setImages] = useState([]);

  // console.log(images);
  
  const handleSearchSubmit = (e) => {
    e.preventDefault(); // To remove refreshing the content so that we can take the values

    console.log(word);
    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages([data,...images])
        
      })
      .catch((err) => {
        console.log(err);
      });

    setWord("");
  };
  // console.log(word)
  // console.log(process.env.REACT_APP_UNSPLASH_KEY);

  return (
    // <div className="App">
    // {/* <h1>Images Gallery</h1> */}
    <div>
      <Header title="Image Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      {/* <MyComponent /> */}
    </div>
  );
}

export default App;
