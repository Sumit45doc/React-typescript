import { Greed } from "./components/Greed";
import PersonList from "./components/PersonList";

function App() {
  const nameList = [
    {firstName: "Sumit", LastName: "Sharma"},
    {firstName: "Raju", LastName: "Sharma"},
    {firstName: "Rohit", LastName: "Prasad"},
  ]
  return (
    <div className="App">
      <Greed language="Typescript" viewer={20} logIn={true} />
      <br />
      <br />
      <PersonList nameList={nameList} />
    </div>
  );
}

export default App;
