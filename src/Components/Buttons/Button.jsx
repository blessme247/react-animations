import { Link } from "react-router-dom";
import "./button.scss"

const Button = () => {

  let cursor = document.getElementById("cursor")
  let handleMouseMove = (event)=>{
    cursor.style.left = event.pageX + "px"
    cursor.style.top = event.pageY + "px"

    if(event.target.hasAttribute("cursor-type")){
        let cursorSize = event.target.getAttribute("cursor-type")
        cursor.classList.add(cursorSize)
    }
    else {
      cursor.classList = ""
    }
    
  }

  return (

    <div className="btnPageWrapper">

    
    <div className="button w-inline-block">
      <Link className="button__inner" to="/nav">
        <div>SHOW NAV</div>
      </Link>
      <div className="button__double"></div>
    </div>

    <button className="hoverLink" aria-label="Hover Me" cursor-type="button" onMouseMove={handleMouseMove}>
      <span aria-hidden="true">
        <span>Hover <span> Hover</span></span>
        <span>Me <span> Me</span></span>
      </span>

    </button>

    </div>
  );
};

export default Button;
