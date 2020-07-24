import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Animation from "./Animation/Animation";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" element={<Animation />} />
      </Router>
    </div>
  );
}

export default App;
