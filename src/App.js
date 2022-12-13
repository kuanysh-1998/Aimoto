import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./Style.scss";
import Description from "./components/Description/Description";
import Homepage from "./components/Homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Faq from "./components/Faq/Faq";
import Aksessuary from "./components/Aksessuary/Aksessuary";
import Aboutremeshok from "./components/Aboutremeshok/Aboutremeshok";
import InfoWatch from "./components/InfoWatch/InfoWatch";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/description:id" element={<Description />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/aksessuary" element={<Aksessuary />} />
        <Route path="/aboutremeshok:id" element={<Aboutremeshok />} />
        <Route path="/infowatch" element={<InfoWatch />}/>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Footer />
    </div>
  );
}

export default App;
