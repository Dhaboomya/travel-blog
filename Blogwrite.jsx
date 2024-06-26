import { nanoid } from 'nanoid';
import { useState } from 'react';
import "./Blogwrite.css";



const Blogwrite=(props)=>{

   const {addBlog} = props;
  const [customTitle , setCustomTitle] = useState('');
const [customDate , setCustomDate] = useState('');
const [CustomContent , setCustomContent] = useState('');

const handleTitleChange=(event)=>{
 
  setCustomTitle(event.target.value)

}
const handleDateChange=(event)=>{
 
  setCustomDate(event.target.value)

}
const handleContentChange=(event)=>{
  
    setCustomContent(event.target.value)
}

const handleSubmit = (event)=>{
  event.preventDefault()
  const obj = {
    id : nanoid(),
    title : customTitle,
    date :customDate,
    content : CustomContent
  }
  props.addBlog(obj);
}


    return(
        <div className='blogwrite-container'>
        <form onSubmit={handleSubmit} className='blogwrite-form '>
          <div >
            <div className='blogwrite-label'>
              <label>Title</label>
            <input type='text' className='blogwrite-input' onChange={handleTitleChange}/>
          </div>
            <div className='blogwrite-label'>
              <label>Content</label>
            <input type='text' className='blogwrite-input' onChange={handleContentChange}/>
          </div>
            <div className='blogwrite-label'>
              <label>Date</label>
            <input type='date' className='blogwrite-input' onChange={handleDateChange}/>
          </div>
          </div>
          <div className='blogwrite-buttons'>
            <button className='blogwrite-cancel-button'>Cancel</button>
            <button type='submit' className='blogwrite-submit-button'>Add Expenses</button>
          </div>
        </form>
        </div>
    );
}



export default Blogwrite;