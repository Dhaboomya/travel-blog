import "./Blogdate.css";

const Blogdate=(props)=>{
    const {date} = props
    const dateObj = new Date(date)
    const day = dateObj.getDate()
    const month =  dateObj.toLocaleDateString('US-en',{ month : "long"})
    /*const year =2023*/
    const year = dateObj.getFullYear()
return (
    <div className='blog-date-container'>
    <div>
        {/* Date*/}
        <div className='blog-date-part'>
            <div className=''>{month}</div>
            <div className=''>{day}</div>
            <div className=''>{year}</div>
        </div>
    </div>
    </div>
)}

export default Blogdate