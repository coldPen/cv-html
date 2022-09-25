import Content from "./Content";
import Sidebar from "./Sidebar";

function CV() {
  return (
    <div className="grid grid-cols-3 h-screen">
      <Sidebar />
      <Content />
    </div>
  );
}

export default CV;
