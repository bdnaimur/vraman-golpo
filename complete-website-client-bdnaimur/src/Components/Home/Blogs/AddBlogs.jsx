import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Blogs from './Blogs';
import { getBlogsAction } from '../../../redux/action/categories';

const AddBlogs = () => {
    const history = useHistory()
    const { register, handleSubmit} = useForm();
    const [imageURL, setIMageURL] = useState(null);
    const email = useSelector(state=>state.auth.authdetails.email);
    const dispatch = useDispatch();
    console.log(email);
    const onSubmit = data => {
        const eventData = {
            email: email,
            name: data.name,
            details: data.details,
            imageURL: imageURL,
            title: data.title,
        };

    const url = `https://salty-shore-75037.herokuapp.com/addServices`;
    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(eventData)
    })
        .then(res => {
            if (res) {
                
        dispatch(getBlogsAction(eventData))
        history.push('/allBlogs')
            }
            console.log('server side response', res)
        })

    };
    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'd19020804cf08b620bfc1f44127a586c');
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setIMageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <Blogs/>
                </div>
                <div className="offset-1 col-md-6">
                    <form className="shadow p-5" onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="inputEmail4">Post Name</label>
                                <input name="name" type="text" class="form-control" id="inputEmail4" placeholder="Add Tour Name" {...register("name")} />
                            </div>
                            <div class="form-group">
                                <label for="title">Title</label>
                                <input type="text" name="title" class="form-control" id="title" placeholder="Add title" {...register("title")} />
                            </div>
                            <div class="form-group">
                                <label for="PackageDetails">Post Details</label>
                                <textarea type="text" name="details" class="form-control" id="PackageDetails" placeholder="Write Details" {...register("details")} />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlFile1">Select Image </label>
                            <br />
                            <input name="exampleRequired" type="file" class="form-control-file" id="exampleFormControlFile1" onChange={handleImageUpload} />
                        </div>
                        <br />
                        <input className="btn btn-info" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBlogs;