import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import Admin from './Admin';

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
            price: data.price,
            day: data.day,
            night: data.night,
            breakfast: data.breakfast,
            meal: data.meal,
        };
        console.log(eventData);
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
                <div className="col-md-3">
                    <Admin/>
                </div>
                <div className="offset-1 col-md-6">
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
                                <textarea type="text" name="details" class="form-control" id="PackageDetails" placeholder="Write Details" ref={register} />
                            </div>
                            <div className="row">
                                <div class="form-group col-md-6">
                                    <label for="day">Number of Days</label>
                                    <input type="text" name="day" class="form-control" id="day" placeholder="Write Number of Days" ref={register} />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="night">Number of Nights</label>
                                    <input type="text" name="night" class="form-control" id="night" placeholder="Write Number of Nights" ref={register} />
                                </div>
                            </div>
                            <div className="row mt-1">
                                <div class="form-check col-md-3">
                                    
                                    <input type="checkbox" class="form-check-label" name="breakfast" id="breakfast" placeholder="Number of Night" ref={register} />
                                    <label for="breakfast" class="form-check-label">Breakfast</label>
                                </div>
                                <div class="form-check col-md-3">
                                    
                                    <input type="checkbox" name="meal" class="form-check-label" id="meal" placeholder="Add Details" ref={register} />
                                    <label for="meal" class="form-check-label">Meals</label>
                                </div>
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