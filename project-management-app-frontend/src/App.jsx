// import NewProject from "./components/NewProject.jsx"
import { useState } from "react"
import Sidebar from "./components/Sidebar.jsx"
import Welcome from "./components/Welcome.jsx"
import NewProject from "./components/NewProject.jsx";
function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });
  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    });
  }
  let content = <Welcome onStartAddProject={handleStartAddProject}/>;
  if (projectsState.selectedProjectId === null){
    content = <NewProject />
  }
  return <main className="flex w-screen min-h-screen overflow-hidden">
    <Sidebar onStartAddProject={handleStartAddProject}/>
    {content}
  </main>
}

export default App
