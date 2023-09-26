import "./Sidenav.css"
import { MenuOutlined ,HomeOutlined} from '@ant-design/icons';
function Sidenav()
{
    return(
        <nav id="sidenav">
            <ul className="ul-sidenav">
                <li>
                    <MenuOutlined style={{ fontSize: '23px'}}/>
                </li>
                <li>
                    <div>
                    <HomeOutlined style={{ fontSize: '30px'}}/>
                    </div>
                </li>
                <li>
                    <div>
                    <img src="/image298.png" style={{width:"33px"}} alt="ds" />
                    </div>
                </li>
                <li>
                    <div className="user-round">
                        NT
                    </div>
                </li>
            </ul>
        </nav>
    )
}
export default Sidenav
