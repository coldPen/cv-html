import Content from "./fr/Content";
import Sidebar from "./fr/Sidebar";

function CV() {
  return (
    <div className="flex flex-col">
      <Sidebar />
      <Content />
    </div>
  );
}

export default CV;
