import { Greed } from "./components/Greed";
import Layout from "./components/Layout";
import Message from "./components/message";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

function App() {
  const nameList = [
    {firstName: "Sumit", LastName: "Sharma"},
    {firstName: "Raju", LastName: "Sharma"},
    {firstName: "Rohit", LastName: "Prasad"},
  ]
  return (
    <div className="App">
      <Greed language="Typescript"  logIn={true} />
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
      </Layout>
    </div>
  );
}

export default App;
