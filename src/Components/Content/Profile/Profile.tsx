import '../Details/Details.css';
import { Switch ,ConfigProvider ,Checkbox } from 'antd';
import Addques from "../Addques/Addques";
import { EditOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

const arProfile:string[]=["Education" ,"Experience" ,"Resume"]
function Profile()
{
    const selcProf=useSelector((state:any)=>state.nameQues.profData)
    return(
        <section id="profile">
            <div className="heading-style">
                <h2>Profile</h2>
            </div>
            <div style={{fontSize:"1.2em"}}>
                {arProfile.map((ele,i)=><div className="formDiv tickSlide" key={i}>
              <label style={{width:"230px"}}>{ele}</label>
              
              <ConfigProvider
    theme={{
      token: {
        // Seed Token
        colorPrimary: '#087B2f',
        borderRadius: 2,

        // Alias Token
        colorBgContainer: '#f6ffed',
      },
    }}
  >
        <Checkbox style={{fontSize:"1.08em"}}>Mandatory</Checkbox>
        <Switch />
  </ConfigProvider>
          </div>)}
          {selcProf.map((ele:any,i:number)=><div className="formDiv tickSlide" key={i}>
            <div>
            <p style={{fontWeight:"400",fontSize:"0.9em"}}>{ele.choice}</p>
            <h4>{ele.getQues}</h4>
            </div>
            <EditOutlined style={{fontSize:"1.2em"}}/>
          </div>)}
          <Addques isDetail={false} isProfile={true}></Addques>
            </div>
        </section>
    )
}

export default Profile