import React from "react";
import { useState, useEffect } from "react";
import API from "../apis/API.jsx";
// import RenderCount from "../UI/RenderCount.jsx";
import "../../App.scss";

function Modules() {
  //Initialisation--------------------------------------------------
  const loggedinUserID = 279;
  const endpoint = `/modules/users/${loggedinUserID}`;
  // const endpointModules = `/modules`;

  //State-----------------------------------------------------------
  const [modules, setModules] = useState(null);
  const [loadingMessage, setloadingMessage] = useState("Loading Records...");

  //Context---------------------------------------------------------
  //Methods---------------------------------------------------------
  const apiCall = async (endpoint) => {
    const response = await API.get(endpoint);
    Response.isSuccess
      ? setModules(response.result)
      : setloadingMessage(response.message);
  };
  useEffect(() => {
    apiCall(endpoint);
  }, [endpoint]);

  //View------------------------------------------------------------

  return (
    <section>
      <h1>My Modules</h1>
      {/* <RenderCount background="Yellow" fontColor="Black" /> */}
      {!modules ? (
        <p>{loadingMessage}</p>
      ) : modules.length === 0 ? (
        <p>No modules Found</p>
      ) : (
        modules.map((module) => (
          <p key={module.ModuleCode}>
            {module.ModuleCode}
            {module.ModuleName}
          </p>
        ))
      )}
    </section>
  );
}
export default Modules;
