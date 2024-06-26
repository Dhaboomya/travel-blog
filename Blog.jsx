import React from "react";
import { useState } from 'react';
import Blogdate from "./Blogdate";
import BlogPost from "./BlogPost";
import Blogwrite from "./Blogwrite";
import { Router } from "react-router-dom";
import { nanoid } from "nanoid";
import "./Blog.css"

const BLOG = [{
    id: nanoid(),
    title: "Blog1",
    content: "I have visited Tajmahal",
    date: "2023-2-4"
},
{
    id: nanoid(),
    title: "Blog2",
    content: "I have visited Kanyakumari",
    date: "2022-03-03"
}
]
const Blog = (props) => {
    
    const { date, title, content } = props;
    const [BlogList, setBlogList] = useState(BLOG);

    const addBlog = (newBlog) => {
        setBlogList([...BlogList, newBlog]);
        console.log([...BlogList, newBlog]);

    }
    /*const time=date.toLocaleTimeString('US-en',{time : "long"})*/

    const [customTitle, setCustomTitle] = useState(title);
    const update = () => {
        setCustomTitle('Updated');
        /*setTimeout(() => {
           setCustomTitle(title);
          }, 2000);*/
    }



    return (
        <>
            <Blogwrite addBlog={addBlog} />
            <BlogPost BlogList={BlogList} />

            <div className='blog-container'>
                <div className="blog-date ">
                    {/* Date*/}
                    <Blogdate date={date} />
                </div>
                {/* title and content */}
                <div className="blog-title">
                    <h2>{title}</h2>
                    <div className="blog-content">{content}</div>
                </div >
                <button onClick={update} className="blog-update-button">Update</button>
            </div>
        </>
    );
}


export default Blog;