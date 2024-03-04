import React from "react";

const Navbar = ({ name, setName }) => {

     const nameChangeHandler = () => {
          setName("Matere");
      };
     return (
          <>
               <p>Accepting props from parent and change name when click on button</p>
               <h3>{name}</h3>
               <button className="bg-[aqua] rounded ml-2 p-1.5" id="changeName" onClick={nameChangeHandler}>Change name</button>
          </>
  )
};

export default Navbar;
