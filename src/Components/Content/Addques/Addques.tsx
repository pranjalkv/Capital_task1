import "./Addques.css"
import { PlusOutlined ,CloseOutlined ,UnorderedListOutlined} from '@ant-design/icons';
import { ConfigProvider ,Checkbox } from 'antd';
import { useState } from "react"
import Choices from "../Choices/Choices";
import { quesData ,quesInfo ,quesProf } from "../../Reduxslice/Slices";
import { useDispatch } from 'react-redux';


interface props {
  isDetail: boolean,
  isProfile:boolean
}


function Addques({isDetail,isProfile}:props)
{
    const[quesAdd,setQuestAdd]=useState(false)
    const [addChoices, setAddChoices] = useState<any>([]);
    const[yourOption,setYourOption]=useState<{ choice: string, getQues: string }>({
        choice:"Paragraph",
        getQues:""
    })

    const dis=useDispatch()

    function handleChoice()
    {
        setAddChoices(addChoices.concat(<Choices key={addChoices.length}/>))
    }
    function handleChange(e:any)
    {
        setYourOption({...yourOption,[e.target.name]:e.target.value})
    }
    function sentToRedux()
    {
        if(isDetail)
        {
            dis(quesInfo(yourOption))
        }
        if(isProfile)
        {
            dis(quesProf(yourOption))
        }
        dis(quesData(yourOption))
        setYourOption({...yourOption,getQues:""
        })
    }
    return(
        <>
        {!quesAdd ? <button className="button-add"
        onClick={()=>setQuestAdd(true)}><PlusOutlined className="add-style" /> Add a question</button>:
        <div className="questionArea">
            <p>Type</p>
            <select id="questions" name="choice" onChange={handleChange}>
               <option value="Paragraph">Paragraph</option>
               <option value="Short">Short Answer</option>
               <option value="Yes or No">Yes or No</option>
               <option value="Mutiple Choice">Mutiple Choice</option>
               <option value="Dropdown">Dropdown</option>
               <option value="Number">Number</option>
               <option value="Date">Date</option>
               <option value="File Upload">File Upload</option>
               <option value="Video Question">Video Question</option>
            </select>
            <p>Question</p>
            <input type="text" placeholder="Type Here" name="getQues"
            value={yourOption.getQues} onChange={handleChange}/>
            {yourOption.choice=="Yes or No" && <ConfigProvider theme={{
                    token: {colorPrimary: '#087B2f',borderRadius: 2,colorBgContainer: '#f6ffed',},}}>
        <Checkbox defaultChecked style={{fontSize:"0.9em",marginTop:"10px"}}>Disqualify candidate if the answer is no</Checkbox>
            </ConfigProvider>}
            {(yourOption.choice == "Mutiple Choice" || yourOption.choice =="Dropdown") &&<div>
                <p>Choices</p>
                <div>{addChoices}</div>
                <UnorderedListOutlined/>
                <input type="text" placeholder="Type Here"  style={{width:"70%",margin:"8px"}}/>
                <PlusOutlined onClick={handleChoice}/>
                <ConfigProvider theme={{
                    token: {colorPrimary: '#087B2f',borderRadius: 2,colorBgContainer: '#f6ffed',},}}>
        <Checkbox defaultChecked style={{fontSize:"0.9em",marginTop:"10px"}}>Enable "other" option</Checkbox>
            </ConfigProvider>
                {yourOption.choice =="Mutiple Choice" && <div>
                    <p style={{marginTop:"20px"}}>Maximum Allowed Choices</p>
                <input type="text" placeholder="Enter number of choice allowed here" name="" id="" /></div>}
            </div>}
            {yourOption.choice == "Video Question" && <div>
                <textarea className="vidArea" placeholder="Please talk about your 
                achievements, goals and what you worked on as the latest project." rows={7} />
                <div>
                    <input type="text" placeholder="Maximum duration of video" style={{width:"58%",marginRight:"7px"}}/>
                    <select name="" id="" style={{width:"40%"}}>
                        <option value="">seconds</option>
                        <option value="">minutes</option>
                    </select>
                </div>
            </div>}
            <div className="ques-actions">
                <button className="button-del ques-del"
                onClick={()=>setQuestAdd(false)}><CloseOutlined className="cross-style" /> Delete question</button>
                <button className="save-btn" onClick={sentToRedux}>Save</button>
            </div>
            {yourOption.choice == "Video Question" && <p style={{color:"#A220CF",fontSize:"0.8em"}}><PlusOutlined/>Add 
            video interview question</p>}
        </div>}
        </>
    )
}
export default Addques