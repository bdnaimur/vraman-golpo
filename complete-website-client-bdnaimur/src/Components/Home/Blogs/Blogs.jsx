import React from 'react';
import { Link } from 'react-router-dom';
import './blogs.css'
const Blogs = () => {
    return (
        <div className="pt-5" style ={{"background":"rgb(48, 43, 43)", "width":"250px", "height":"100vh"}}>
            
            <Link className="link" to='/addBlogs'><span className="add-blogs">Add Blogs</span></Link>
            <Link className="link" to='/allBlogs'><span className="all-blogs">All Blogs</span></Link>
        </div>
    );
};

export default Blogs;