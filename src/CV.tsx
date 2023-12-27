import Content from "./en/Content";
import Sidebar from "./en/Sidebar";

function CV() {
  return (
    <div className="grid h-screen grid-cols-3">
      <Sidebar />
      <Content />
    </div>
  );
}

export default CV;
