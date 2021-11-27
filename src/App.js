import React from "react";
import {Routes, Route,} from "react-router-dom";
import './App.css';
import { RootPage, UserAuth } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<RootPage />}/>
        <Route path="/auth" element={<UserAuth />}/>
      </Routes>
    </div>
  );
}

export default App;
