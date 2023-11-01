import "../../App.scss";

function Home() {
  const moduleList = [
    {
      ModuleID: 1,
      ModuleName: "Programming 1",
      ModuleCode: "CI4105",
      ModuleLevel: 4,
      ModuleYearID: 1,
      ModuleLeaderID: 824,
      ModuleImageURL:
        "https://images.freeimages.com/images/small-previews/9b8/electronic-components-2-1242738.jpg",
      ModuleLeaderName: "Paul Knave",
      ModuleYearName: "2022-23",
    },
    {
      ModuleID: 2,
      ModuleName: "Computing Fundamentals",
      ModuleCode: "CI4250",
      ModuleLevel: 4,
      ModuleYearID: 1,
      ModuleLeaderID: 820,
      ModuleImageURL:
        "https://images.freeimages.com/images/small-previews/411/light-of-technology-1510575.jpg",
      ModuleLeaderName: "Graeme Jones",
      ModuleYearName: "2022-23",
    },
    {
      ModuleID: 3,
      ModuleName: "Requirements Analysis and Design",
      ModuleCode: "CI4305",
      ModuleLevel: 4,
      ModuleYearID: 1,
      ModuleLeaderID: 820,
      ModuleImageURL:
        "https://images.freeimages.com/images/small-previews/64b/vla-1-1315506.jpg",
      ModuleLeaderName: "Graeme Jones",
      ModuleYearName: "2022-23",
    },
    {
      ModuleID: 4,
      ModuleName: "Professional Environments 1",
      ModuleCode: "CI4450",
      ModuleLevel: 4,
      ModuleYearID: 1,
      ModuleLeaderID: 820,
      ModuleImageURL:
        "https://images.freeimages.com/images/small-previews/293/cable-4-1243085.jpg",
      ModuleLeaderName: "Graeme Jones",
      ModuleYearName: "2022-23",
    },
  ];

  return (
    <div>
      <main>
        <h1>Modules</h1>
        <div className="cardContainer">
          {moduleList.map((module) => {
            return (
              <div className="card" key={module.ModuleCode}>
                <img src={module.ModuleImageURL} />
                <p>{module.ModuleCode}</p>
                <p>{module.ModuleName}</p>
              </div>
            );
          })}
        </div>
      </main>

      <div className="font">
        <div className="PTSerifCaption-Regular"></div>
        <div className="PlayfairDisplay-VariableFont_wght"></div>
      </div>
    </div>
  );
}

export default Home;
