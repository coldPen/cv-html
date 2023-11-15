import Content from "./fr/Content";
import Sidebar from "./fr/Sidebar";

function CV() {
  return (
    <div className="grid h-screen grid-cols-3">
      <Sidebar />
      <Content />
    </div>
  );
}

export default CV;
