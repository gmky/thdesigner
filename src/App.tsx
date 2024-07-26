import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/common/Header";
import UserList from "./components/common/UserList";
import ProjectList from "./components/common/ProjectList";
import Partner from "./components/common/Partner";
import Footer from "./components/common/Footer";
import Join from "./components/common/Join";

function App() {
  return (
    <>
      <body className="logged-out not-pro not-player not-self not-team not-on-team no-hiring  noscroll">
        <Header />
        <UserList />
        <ProjectList />
        <Partner />
        {/* <Join /> */}
        <Footer />
      </body>
    </>
  );
}

export default App;
