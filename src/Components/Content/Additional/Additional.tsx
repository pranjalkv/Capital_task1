import Addques from "../Addques/Addques";
import "../Details/Details.css";
import { useSelector } from 'react-redux';
import { EditOutlined } from '@ant-design/icons';

function Additional()
{
    const selAll=useSelector((state:any)=>state.nameQues.data)
    return(
        <section id="additional" style={{marginBottom:"4%"}}>
            <div className="heading-style">
                <h2>Additional Questions</h2>
            </div>
            <div style={{fontSize:"1.2em"}}>
                 {selAll.map((ele:any,i:number)=><div className="formDiv tickSlide" key={i}>
            <div>
            <p style={{fontWeight:"400",fontSize:"0.9em"}}>{ele.choice}</p>
            <h4>{ele.getQues}</h4>
            </div>
            <EditOutlined style={{fontSize:"1.2em"}}/>
          </div>)}
                <Addques isDetail={false} isProfile={false}></Addques>
            </div>
        </section>
    )
}
export default Additional