import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Home from "./components/Views/Home.jsx";
import SignIn from "./components/Views/SignIn.jsx";
import ContactUs from "./components/Views/ContactUs.jsx";
import PageNotFound from "./components/Views/PageNotFound.jsx";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/pageNotFound" element={<PageNotFound />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
