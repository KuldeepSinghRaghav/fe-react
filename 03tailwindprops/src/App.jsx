import "./App.css";
import Testimonials from "./components/cards.jsx";

function App() {
  // use props***
  const newObj = {
    degnitation: "developer",
    comapny: "google"
  };
  const newArr = [
    1,2,3,5,9
  ]

  return (
    <>
      <h1>Hello React</h1>
      <Testimonials name="kuldeep" someData = {newObj} someArr = {newArr}/>
      <br />
      <Testimonials name="raghav" someData = {newObj} someArr = {newArr}/>
    </>
  );
}

export default App;
