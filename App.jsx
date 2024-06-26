// //import { Route, Routes,Link } from "react-router-dom";
// import { BrowserRouter as Router,Route } from "react-router-dom";
// import Home from "./Home/home";
// import About from "./About/About";
// import Nav from "./Navigation/Nav";



// // const Home = () => <Text>Home</Text>;
// // const About = () => <Text>About</Text>;
// const App = () => {
//   return(
    
//     <Router>
//         <Route path=""element={<Home/>}></Route>
//         <Route path="/home"element={<Home/>}></Route>
//         <Route path="/about"element={<About/>}></Route>

//     </Router>
//   )
// }
//     // <NativeRouter>
//     //     <View>
//     //         <View>
//     //             <Link to="/">
//     //                 <Text>Home</Text>
//     //             </Link>
//     //             <Link to="/about">
//     //                 <Text>About</Text>
//     //             </Link>
//     //         </View>

//             // <Route exact path="/" component={Home} />
//             // <Route path="/about" component={About} />
//     //     </View>

//     // </NativeRouter>



// export default App


/*import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";



const App = () => {
  return (
    <Router>
     <Homepage/>
      <Routes>
     {/* <Route exact path="/" component={Home} />*//*}
    /*  <Route path="/homepage" element={<Homepage/>} />
      <Route path="/trip" element={<Trip/>} />
      <Route path="/blog" element={<Blog/>} />


      </Routes>
    </Router>
  );
};

export default App;*/

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from 'react-router-dom'; // Add this line
import { useState } from 'react';
import { nanoid } from 'nanoid';
import Homepage from "./Home/home";
import Nav from "./Navigation/Nav";
import Blog from "./Blog/Blog";
import Trip from "./Trip/Trip"
import BlogPost from "./Blog/BlogPost";
import Blogwrite from "./Blog/Blogwrite";




// const BLOG = [{
//   id : nanoid(),
//   title: "Blog1",
//   content : "I have visited Tajmahal",
//   date: "2023-2-4"
// },
// {
//   id : nanoid(),
//   title: "Blog2",
//   content : "I have visited Kanyakumari",
//   date: "2022-03-03"
// }
//  ]

const App=()=> {
  // const [BlogList, setBlogList] = useState(BLOG);

  // const  addBlog = (newBlog) => {
  //   setBlogList([...BlogList,newBlog]);
  //  console.log([...BlogList,newBlog]);

  // }


  return (
    <Router>
      <Nav/>
      {/* <><Blogwrite addBlog={addBlog} />
        <BlogPost BlogList={BlogList} /></> */}
      {/*<Topbar />*/}
      <Routes> {/* Update to Routes */}
      <Route exact path="/"element={ < Homepage/>} />
      <Route path="/home" element={<Homepage/>} />
      <Route path="/blog" element={<Blog/>} />
     
      <Route path="/trip" element={<Trip/>} />

        <Route path="/" element={<Homepage />} /> {/* Update to Route */}
        <Route path="/posts" element={<Homepage />} /> {/* Update to Route */}
        <Route path="/header" element={<Homepage />} /> {/* Update to Route */}
        <Route path="/sidebar" element={<Homepage />} /> {/* Update to Route */}
      
      </Routes> {/* Update to Routes */}
    </Router>
    
  );
}

export default App;