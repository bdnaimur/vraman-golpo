import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import BlogDetails from './BlogDetails';

const AllBlogs = () => {
    const [blogs, setBlogs] = useState([])
    const email = useSelector(state=>state.auth.authdetails.email);

    console.log('blogs', blogs);
    useEffect(() => {
        const url = `https://salty-shore-75037.herokuapp.com/services`;
        fetch(url)
            .then(res => res.json())
            .then(data => 
                {   const SignedBlogs = data.filter(userData => userData.email === email)
                    setBlogs(SignedBlogs)
                })                
    }, [])

    return (
        <div className="container mt-5">
            <div className="row">
                    <h3 className="text-center mb-3 text-secondary">Tour Packages</h3>
                    {blogs.map(blog => <BlogDetails blog={blog} />)}
            </div>
        </div>
    );
};

export default AllBlogs;