// src/App.tsx
import AddProjectButton from "./AddProjectButton";
import thunkableIcon from "../assets/ThunkableBeaver.png";
import "../App.css";


export const Header = () => {
  return (
    <div  className="header" >
      {/* This will be the div containing the logo and "my projects" title */}
      <div >
        <img
          width={"32px"}
          height={"32px"}
          src={thunkableIcon}
          alt="thunkable-beaver"
        />
        <h6 style={{position: "relative", left: "40px"}}>MY PROJECTS</h6>
      </div>
      <div style={{position:"relative", top: "69px", display: "flex", justifyContent: "flex-end"}}>
        <AddProjectButton />
      </div>
    </div>
  );
};

export default Header;
