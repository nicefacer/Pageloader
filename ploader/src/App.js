import React, { useState } from "react";
import "./spinner.css";
import Loader from "./loader";

function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 10000);

  return (
    <div className="App">
      {loading ? <Loader /> : <div>Content goes here</div>}
    </div>
  );
}

export default App;
