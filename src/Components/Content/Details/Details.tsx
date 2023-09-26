import "./Details.css"
import { useState ,useEffect} from "react";
import yaml from "js-yaml"
import { Switch ,ConfigProvider ,Checkbox } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import Addques from "../Addques/Addques";
import { useSelector } from 'react-redux';

const ar: string[] = ["Phone", "Nationality", "Current Residence", "ID Number", "Date of Birth", "Gender"];
function Details()
{
   const[apiData,setapiData]=useState(null)
   const reduxItems=useSelector((state:any)=>state.nameQues.infoData)

   useEffect(() => {
async function getYamlData()
{
    await fetch("/fileApi.yaml")
      .then((response) => response.text())
      .then((yamlData) => {
        const allData:any = yaml.load(yamlData);
        setapiData(allData);
      })
      .catch((err) => {
        console.error('Error loading data:', err);
      });
  }
  getYamlData()
  }, []);
console.log(apiData)
    return(
        <section id="details"> 
        <div className="heading-style">
          <h2>Personal Information</h2>
        </div>
        <div style={{fontSize:"1.2em"}}>
          <div className="formDiv">
              <label htmlFor="">First Name <input name="firstName" type="text" /></label>
          </div>
          <div className="formDiv">
              <label htmlFor="">Last Name <input name="lastName" type="text" /></label>
          </div>
          <div className="formDiv">
              <label htmlFor="">Email <input name="name" type="email" /></label>
          </div>
          {ar.map((ele,i)=><div className="formDiv tickSlide" key={i}>
              <label style={{width:"230px"}}>{ele} {ele=="Phone"&&<span style={{fontSize:"0.8em"}}>(without dial code)</span>}</label>
              
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
        <Checkbox style={{fontSize:"1.08em"}}>Internal</Checkbox>
        <Switch />
  </ConfigProvider>
          </div>)}
          {reduxItems.map((ele:any,i:number)=><div className="formDiv tickSlide" key={i}>
            <div>
            <p style={{fontWeight:"400",fontSize:"0.9em"}}>{ele.choice}</p>
            <h4>{ele.getQues}</h4>
            </div>
            <EditOutlined style={{fontSize:"1.2em"}}/>
          </div>)}
          <Addques isDetail={true} isProfile={false}></Addques>
        </div>
        </section>
    )
}
export default Details