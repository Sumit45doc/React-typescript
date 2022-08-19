// import { useState } from "react";
// import Button from "./components/Button";
// import Input from "./components/Input";
// import { Greed } from "./components/Greed";
// import Layout from "./components/Layout";
// import Message from "./components/message";
// import PersonList from "./components/PersonList";
// import Status from "./components/Status";

import CustomButton from "./components/html/CustomButton";
import Input from "./components/html/Input";
import DomRef from "./components/ref/DomRef";
import MutableRef from "./components/ref/MutableRef";
import RandomNumber from "./components/restriction/RandomNumber";
import Toast from "./components/Toast";

// import User from "./components/context/User";
// import { UserContextProvider } from "./components/context/UserContext";
// import Box from "./components/context/Box";
// import { ThemeContextprovider } from "./components/context/ThemeContext";

// import Counter from "./components/Counter";
// import User from "./components/User";

function App() {
  // const nameList = [
  //   {firstName: "Sumit", LastName: "Sharma"},
  //   {firstName: "Raju", LastName: "Sharma"},
  //   {firstName: "Rohit", LastName: "Prasad"},
  // ]

  // const [toggler, setToggler] = useState(true);
  // const [name, setName] = useState("");
  return (
    <div className="App">
      {/* <Greed language="Typescript"  logIn={true} />
      <br />
      <br />
      <PersonList nameList={nameList} />
      <br />
      <br />
      <Status status="success" />
      <br /><br /> */}
      {/* <Layout styles={{backgroundColor: "dodgerblue",padding: "1rem 0.4rem"}}>
        <Message>
          Children Component
        </Message>
      </Layout >
      <Button handleChange={(num) => { setToggler(!toggler); console.log(num) }} />
      <div>
        {toggler ? <h1>Reactjs</h1> : <h1>Angularjs</h1>}
      </div>
      <Input value={name} changeHandler={(e) => setName(e.target.value)} />
      <h2>{name}</h2> */}
      {/* <User name="sumit" email="ss8559283@gmail.com" />
      <Counter /> */}
      {/* <ThemeContextprovider>
        <Box />
      </ThemeContextprovider> */}
      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}
      {/* <DomRef /> */}
      {/* <MutableRef /> */}
      {/* <RandomNumber value={120} isPositive={true}  /> */}
      {/* <Toast position="center" /> */}
      <CustomButton variant="primary" onClick={() => console.log('clicked')}>
        asdads
      </CustomButton>
    </div>
  );
}

export default App;
