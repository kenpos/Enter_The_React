import React from "react";
import ReactDOM from "react-dom";
import Msg from "./components/Message";

//functional compornent
const App = () => {
  return (
    <div>
      <h2>Reactハンズオン</h2>
      <Msg />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
