import { FaBaby } from "react-icons/fa";
import { Md6FtApart } from "react-icons/md";
import { IconContext } from "react-icons";

function App() {
  return (
    <>
      <IconContext.Provider value={{ color: "green", size: "5rem" }}>
        <div>
          <FaBaby />
          <Md6FtApart />
        </div>
      </IconContext.Provider>
    </>
  );
}

export default App;
