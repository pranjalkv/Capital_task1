import React, { useState ,useRef } from "react";
import "./Uploadimg.css"
import { UploadOutlined ,CloseOutlined } from '@ant-design/icons';



function Uploadimg()
{
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [image,setImage]=useState<any>("")

    const handleDragOver = (event:React.SyntheticEvent) => {
    event.preventDefault();
  };

  const handleDrop = (event:any) => 
  {
    event.preventDefault();
    const selectImg =event.dataTransfer.files?.[0] ;
       const maxMb = 1024 * 1024
        if (selectImg) 
        {
         const imgSize = selectImg.size;
             if (imgSize > maxMb) 
             {
             alert('File size exceeded 1 MB.');
             setImage("")
            }
            else
            {
                    setImage(event.dataTransfer.files?.[0])
            }
        }
  };

  function directUpload(event:any)
  {
        const selectImg = event.target.files?.[0];
       const maxMb = 1024 * 1024
        if (selectImg) 
        {
         const imgSize = selectImg.size;
             if (imgSize > maxMb) 
             {
             alert('File size exceeded 1 MB.');
             setImage("")
            }
            else
            {
                        setImage(selectImg)
            }
        }
  }

    return(
        <section id="upload-img">
            {!image && <div className="heading-style">
                <h2>Upload Cover Image</h2>
            </div>}
            {!image ? <div style={{display:"flex", justifyContent:"center", alignItems:"center",height:"323px"}}>
                <div className="upload-area"
                onClick={() => inputRef.current?.click()}
                 onDragOver={handleDragOver}
            onDrop={handleDrop}>
                <div style={{textAlign:"center"}}>
                    <input 
            type="file"
            onChange={directUpload}
            hidden
            accept="image/*"
            ref={inputRef}
          />
                    <UploadOutlined style={{fontSize:"33px"}}/>
                    <h4>Upload cover Image</h4>
                    <p style={{color:"#979797"}}>16:9 ratio is recommended. Max image size 1mb</p>
                </div>
            </div>
            </div>:
            <div>
                <img src={URL.createObjectURL(image)} alt="sample_image" className="uploaded-img"/>
            <button className="button-del" onClick={()=>setImage("")}><CloseOutlined className="cross-style"/>   Delete and re-upload</button> 
            </div>}
        </section>
    )
}
export default Uploadimg
