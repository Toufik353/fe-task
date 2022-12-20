import React, { useState } from "react";
import LoginForm from "./components/LoginForm.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Table from "./components/Table";
import DetailPage from "./components/DetailPage.js";

function App() {
  const [id, setId] = useState();
  const [item, setItem] = useState();
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LoginForm />} />
          <Route
            exact
            path="/table"
            element={<Table setId={setId} setItem={setItem} />}
          />
          <Route
            exact
            path="/detailPage/:id"
            element={<DetailPage item={item} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
