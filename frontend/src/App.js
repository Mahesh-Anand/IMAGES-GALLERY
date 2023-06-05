import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";
import ImageCard from "./components/ImageCard";
import Welcome from "./components/Welcome";
// import ImageCardWithError from "./components/ImageCardWithError";
import { Container, Row, Col } from "react-bootstrap";



// const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY; # we dont need this any more
const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:5050'  //5050 of python 

function App() {
  const [word, setWord] = useState("");
  const [images, setImages] = useState([]);

  // console.log(images);

  const handleSearchSubmit = (e) => {
    e.preventDefault(); // To remove refreshing the content so that we can take the values

    console.log(word);
    fetch(
      `${API_URL}/new-image?query=${word}`
      // `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages([{ ...data, title: word }, ...images]); //adding data but as spread and adding title to it and passing as an object
      })
      .catch((err) => {
        console.log(err);
      });

    setWord("");
  };
  // console.log(word)
  // console.log(process.env.REACT_APP_UNSPLASH_KEY);
const handleDeleteImage= (id)=>{
  setImages(images.filter((image)=>image.id !==id))

}
  return (
    // <div className="App">
    // {/* <h1>Images Gallery</h1> */}
    <div>
      <Header title="Image Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      {/* <MyComponent /> */}
      {/* {!!images.length && <ImageCard image = {images[0]}/>}
      {images.length >1  && <ImageCard image = {images[1]}/>} */}
      <Container className ="mt-4">

        {/* javasript code  below*/}
        {images.length? (<Row xs={1} md={2} lg={3}> {/* for adaptive nature on different screen */}
          {images.map(
            (
              image,
              i // converting the images array to image cards here i is the index and image is image
            ) => (
              // here the key must be in col otherwise there will be warning  
              <Col key={i} className = "pb-3">   
              <ImageCard   image={image} deleteImage ={handleDeleteImage}/>
              </Col>
              // <ImageCardWithError key ={i} image = {image}/>
            )
          )} 
        </Row>):(<Welcome/>)}
        
      </Container>
      {/* here {} means js script and !! to convert images.length to boolean so it is not shown */}
    </div>
  );
}

export default App;
