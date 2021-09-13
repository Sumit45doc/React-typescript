import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
// import { Greed } from "./components/Greed";
// import Layout from "./components/Layout";
// import Message from "./components/message";
// import PersonList from "./components/PersonList";
// import Status from "./components/Status";

function App() {
  // const nameList = [
  //   {firstName: "Sumit", LastName: "Sharma"},
  //   {firstName: "Raju", LastName: "Sharma"},
  //   {firstName: "Rohit", LastName: "Prasad"},
  // ]

  const [toggler, setToggler] = useState(true);
  const [name, setName] = useState("");
  return (
    <div className="App">
      {/* <Greed language="Typescript"  logIn={true} />
      <br />
      <br />
      <PersonList nameList={nameList} />
      <br />
      <br />
      <Status status="success" />
      <br /><br />
      <Layout>
        <Message>
          Children Component
        </Message>
      </Layout */}
      <Button handleChange={(num) => { setToggler(!toggler); console.log(num) }} />
      <div>
        {toggler ? <h1>Reactjs</h1> : <h1>Angularjs</h1>}
      </div>
      <Input value={name} changeHandler={(e) => setName(e.target.value)} />
      <h2>{name}</h2>
    </div>
  );
}

export default App;
