import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Components/Form";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={<Form heading="Enter text here" />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
