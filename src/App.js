import React from "react";
import {Routes, Route,} from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import './App.css';
import { RootPage, UserAuth } from "./pages";

library.add(fas);

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
