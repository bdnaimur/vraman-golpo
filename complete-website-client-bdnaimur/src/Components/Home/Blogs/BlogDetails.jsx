import React from 'react';
import { Link } from 'react-router-dom';

const BlogDetails = ({blog}) => {
    console.log(blog);
    return (
        <div className='col-md-4'>
            <div class="card mb-4 tour-height">
                <img class="card-img-top image-scale" src={blog.imageURL} height="250px" alt="Card image cap" />
                <div class="card-body ">
                    <h5 class="card-title">Package Name : {blog.name}</h5>
                    <div className="d-flex justify-content-between">
                    <Link to={`/singleBookingDetails/${blog._id}`}><button  className="btn btn-warning me-5 mr-5">Show Details</button></Link>
                    <div className="price ms-5 ml-5 pe-3"><strong>$ </strong>{blog.price}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;