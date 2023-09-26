import "./Topnav.css"
import { useState ,useEffect} from "react";

function Topnav()
{
    const[sticky ,setSticky]=useState<boolean>(false)
    function shiftNav()
    {
        if(window.scrollY>20)
         setSticky(true)
        else
         setSticky(false)
    }
    useEffect(() => {
      window.addEventListener("scroll",shiftNav)
    
      return () => {
        window.removeEventListener("scroll",shiftNav)
      }
    }, [sticky])
    
    return(
        <nav id="topnav" className={sticky?"topStick":""}>
            <ul>
                <li> 
                  Program details
                </li>
                <li className="current">
                    Application Form
                    
                </li>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="42" viewBox="0 0 21 42" fill="none">
<path d="M21 21L0 42L-2.09101e-06 0L21 21Z" fill="#00635B"/>
</svg>
                <li>
                    Workflow
                </li>
                <li>
                    Preview
                </li>
            </ul>
        </nav>
    )
}
export default Topnav