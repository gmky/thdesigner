import "./App.css";
import Header from "./components/common/Header";
import UserList from "./components/common/UserList";
import ProjectList from "./components/common/ProjectList";
import Footer from "./components/common/Footer";
import Step from "./components/common/Step";
import Capacity from "./components/common/Capacity";
// import Benifit from "./components/common/Benifit";
import Contact from "./components/common/Contact";
import AboutUs from "./components/common/AboutUs";
import OperatingModel from "./components/common/OperatingModel";

function App() {
  return (
    <>
      <body className="logged-out not-pro not-player not-self not-team not-on-team no-hiring  noscroll">
        <Header />
        <UserList />
        <ProjectList />
        {/* <Partner /> */}
        <Step />
        <Capacity />
        {/* <Benifit /> */}
        <Contact />
        <OperatingModel />
        <AboutUs />
        <Footer />
      </body>
    </>
  );
}

export default App;
