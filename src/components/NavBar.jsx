import { RxHamburgerMenu } from 'react-icons/rx';
import { VscChromeClose} from 'react-icons/vsc'
import { useState } from 'react';
import { Link } from "react-router-dom";

function NavItem({ href, onClicked, children }) {

  return (
    <Link to={href} onClick={onClicked}>
      <div className="group transition mt-1">
      <a className="text-m">
        {children}
      </a>
      <div className="
        transition-all mt-[2px] ml-[50%] bg-blue-400 h-[.2rem] 
        w-0 group-hover:w-[100%] group-hover:ml-[0]
      ">
      </div>
    </div>
    </Link>
    
  );
}

function NavBar() {
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState(0)

  function changeNavVisibility(){
    setVisible(!visible)
  }

  return (
    <div className="bg-white z-10 w-full relative">
      <div 
        style={{
          zIndex: "10"
        }}
        className="max-w-7xl bg-white z-50 mx-auto transition flex align-middle justify-between py-3 sm:py-5 ">
        <div className="font-extrabold ml-5">
          <h1 className="transition p-3 text-2xl sm:text-3xl hover:translate-x-2 text-blue-400">
           <Link to="/" onClick={visible ? changeNavVisibility : undefined}> F1 CORNER </Link>
          </h1>
        </div>

        <div 
          onClick={changeNavVisibility}
          className="
          mr-5 p-3 rounded-full cursor-pointer text-center grid place-items-center md:hidden  
          hover:bg-gray-100 text-3xl
        ">
            {visible? <VscChromeClose/> : <RxHamburgerMenu/>}
        </div>

        <div 
          className="
            flex flex-col md:flex-row bg-white top-[-30rem] absolute md:static 
            md:py-2 text-xl gap-4 md:gap-8 mr-5 transition-all duration-500 z-[-1] 
            md:z-0 w-full md:w-max px-8 md:px-0 pb-8 shadow-md md:shadow-none
            "
          style={{
            top: visible ? "100%" : '-30rem'
          }}
        >
          <NavItem href="schedule" onClicked={changeNavVisibility}>Schedule</NavItem>
          <NavItem href="results" onClicked={changeNavVisibility}>Results</NavItem>
          {/* <NavItem href="" onClicked={changeNavVisibility}>Standings</NavItem> */}
          <NavItem href="drivers" onClicked={changeNavVisibility}>Drivers</NavItem>
          <NavItem href="constructors" onClicked={changeNavVisibility}>Constructors</NavItem>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
