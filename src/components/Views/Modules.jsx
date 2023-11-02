import React from "react";
import { useState, useEffect } from "react";
import API from "../apis/API.jsx";
import "../../App.scss";
import { Card, CardContainer } from "../UI/Card.jsx";
import "./Modules.scss";

function Modules() {
  //Initialisation--------------------------------------------------
  const loggedinUserID = 279;
  const endpoint = `/modules`;
  // const allModulesEndpoint = `/modules`;

  //State-----------------------------------------------------------
  const [modules, setModules] = useState(null);
  const [loadingMessage, setloadingMessage] = useState("Loading Records...");
  // const [allModules, setAllModules] = useState(null);

  //Context---------------------------------------------------------
  //Methods---------------------------------------------------------

  const apiCall = async (endpoint) => {
    const response = await API.get(endpoint);
    response.isSuccess
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
        <CardContainer>
          {modules.map((module) => {
            return (
              <div className="modulecard" key={module.ModuleCode}>
                <Card>
                  <img src={module.ModuleImageURL} alt={module.ModuleName} />
                  <p>{module.ModuleCode}</p>
                  <p>{module.ModuleName}</p>
                </Card>
              </div>
            );
          })}
        </CardContainer>
      )}
      <div className="font">
        <div className="PTSerifCaption-Regular"></div>
        <div className="PlayfairDisplay-VariableFont_wght"></div>
      </div>
    </section>
  );
}
export default Modules;
