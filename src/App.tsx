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
import Step from "./components/common/Step";
import Capacity from "./components/common/Capacity";
import Benifit from "./components/common/Benifit";
import Contact from "./components/common/Contact";

function App() {
  return (
    <>
      <body className="logged-out not-pro not-player not-self not-team not-on-team no-hiring  noscroll">
        <Header />
        <UserList />
        <ProjectList />
        {/* <Partner /> */}
        {/* <Join /> */}
        <Step />
        <Capacity />
        <Benifit />
        <Contact />
        <Footer />
      </body>
    </>
  );
}

export default App;
