import Blogwrite from "./Blogwrite";
import "./BlogPost.css"
const BlogPost = (props) => {
   
   

    const {BlogList} = props;
 
    return(
        <>
        <div className="blog-post-container">
        {BlogList.map((item)=>
         <Blogwrite key={item.id} date={item.date} title={item.title} content={item.content}/>
        )}
        </div>
        </>
    )
}


export default BlogPost 