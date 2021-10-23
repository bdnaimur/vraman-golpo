import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';

const AddPackages = () => {
    // const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const history = useHistory()
    const refer = useRef(null);
    const { register, handleSubmit, watch, errors } = useForm();
    //   const [render, setRender] = useState(false);
    const [imageURL, setIMageURL] = useState(null);
    const [pithaWithUser, setPithaWithUser] = useState([]);
    const [clicked, setClicked] = useState({
        manage: false,
        add: false,
        ourTeam: false
    });
    const onSubmit = data => {
        const eventData = {
            name: data.name,
            details: data.details,
            imageURL: imageURL,
            price: data.price
        };
        console.log(eventData);
        const url = `https://whispering-lowlands-13005.herokuapp.com/addServices`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => {
                if(res){
                    history.push('/packages')
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
        <div className="container">
            <div className="row">
                <div className="offset-3 col-md-6">
                    <form className="shadow p-5" onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="inputEmail4">Tour Name</label>
                                <input name="name" type="text" class="form-control" id="inputEmail4" placeholder="Add Tour Name" ref={register} />
                            </div>
                            <div class="form-group">
                                <label for="price">Price</label>
                                <input type="text" name="price" class="form-control" id="price" placeholder="Add Price" ref={register} />
                            </div>
                            <div class="form-group">
                                <label for="PackageDetails">Package Details</label>
                                <input type="text" name="details" class="form-control" id="PackageDetails" placeholder="Add Details" ref={register} />
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

export default AddPackages;