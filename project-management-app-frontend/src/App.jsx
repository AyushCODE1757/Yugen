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
  function handleAddProject(projectData) {
    setProjectsState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      }
      return{
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      };
    })

  }
  function handleCancelAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      }
    });
  }
  let content = <Welcome onStartAddProject={handleStartAddProject}/>;
  if (projectsState.selectedProjectId === null){
    content = <NewProject onAddProject={handleAddProject} onCancel={handleCancelAddProject}/>
  }
  return <main className="flex w-screen min-h-screen overflow-hidden">
    <Sidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects}/>
    {content}
  </main>
}

export default App
