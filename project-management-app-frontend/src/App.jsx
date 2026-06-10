import { useState } from "react"
import Sidebar from "./components/Sidebar.jsx"
import Welcome from "./components/Welcome.jsx"
import NewProject from "./components/NewProject.jsx";
import SelectedProject from "./components/SelectedProject.jsx";
function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });
  function handleAddTask(text) {
      setProjectsState(prevState => {
      const newTask = {
        text:text,
        projectId: prevState.selectedProjectId,
        id: Math.random()
      }
      return{
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      };
    })
  }
  function handleDeleteTask(id) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      }
    });
  }
  function handleDelete(){
    setProjectsState(prevState => {
      return {
        ...prevState,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId),
        selectedProjectId: undefined
      }
    });
  }
  function handleSelectProject(id){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
      }
    });
  }
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
  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);
  let content = <SelectedProject project={selectedProject} onDelete={handleDelete} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={projectsState.tasks}/>;
  if (projectsState.selectedProjectId === null){
    content = <NewProject onAddProject={handleAddProject} onCancel={handleCancelAddProject}/>
  }
  else if(projectsState.selectedProjectId === undefined){
    content = <Welcome onStartAddProject={handleStartAddProject}/>;
  }
  return <main className="flex w-screen min-h-screen overflow-hidden">
    <Sidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects} onSelect={handleSelectProject} selectedProjectId={projectsState.selectedProjectId}/>
    {content}
  </main>
}

export default App
