import Clock from ".App./Clock";
import Form from "./Form"
import "./App.css";


function App() {
  return (
    <div className="container">
      <Form />
      <Clock />
      <footer className="footer">©2023 Bugs. All rights reserved ©</footer>
    </div>
  );
}

export default App;

