import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Home from "./components/Views/Home.jsx";
import SignIn from "./components/Views/SignIn.jsx";
import ContactUs from "./components/Views/ContactUs.jsx";
import PageNotFound from "./components/Views/PageNotFound.jsx";
import "./App.scss";

function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;
