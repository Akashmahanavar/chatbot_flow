import{
  ReactFlowProvider,
} from "reactflow";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Flow from "./components/Flow";

function App() {
  return (
    <ReactFlowProvider>
      <div style={{ height: "100vh", width: "100vw" }}>
        <Header />
        <div style={{ height: "90vh", width: "100vw", display: "flex" }}>
          <Flow />
          <SideBar />
        </div>
      </div>
    </ReactFlowProvider>
  );
}

export default App;
