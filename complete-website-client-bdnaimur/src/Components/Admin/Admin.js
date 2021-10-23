import { faFirstOrder } from '@fortawesome/free-brands-svg-icons';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faPlusSquare, faTasks } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import AllData from '../AllData/AllData';
import OurTeam from '../OurTeam/OurTeam';
import './Admin.css';

const Admin = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const { register, handleSubmit, watch, errors } = useForm();
  const [render, setRender] = useState(false);
  const [imageURL, setIMageURL] = useState(null);
  const [user, setUser] = useState([]);
  const [clicked, setClicked] = useState({
    manage: false,
    add: false,
    ourTeam: false
  });

  useEffect(() => {
    const url = `https://whispering-lowlands-13005.herokuapp.com/services`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const newRender = true;
        setRender(render);
        setUser(data)
      })
  }, [render])
  const onSubmit = data => {
    const eventData = {
      name: data.name,
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
      .then(res => console.log('server side response', res))
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

  const deleteItem = (event, id) => {
    console.log(event.currentTarget);
    console.log(id);
    fetch(`https://whispering-lowlands-13005.herokuapp.com/delete/${id}`, {
        method: 'DELETE',
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data) {
                const remainItem = user.filter( item => item._id !== id);
                setUser(remainItem);
            }
        })
}
  const handleAddClick = e => {
    const addclicked = { ...clicked };
    addclicked.add = true;
    addclicked.manage = false;
    addclicked.ourTeam = false;
    setClicked(addclicked);
  }
  const handleManageClick = e => {
    const addclicked = { ...clicked };
    addclicked.manage = true;
    addclicked.add = false;
    addclicked.ourTeam = false;
    setClicked(addclicked);
  }
  const handleOurTeamClick = e => {
    const addclicked = { ...clicked };
    addclicked.ourTeam = true;
    addclicked.add = false;
    setClicked(addclicked);
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 manage-product">
            <span onClick={handleManageClick}><span className="icon-style"><FontAwesomeIcon icon={faTasks} /></span><span>Manage Product</span></span><br />
            <span className="icon-style"><FontAwesomeIcon icon={faPlusSquare} /></span><Link to="/addPackages"><span>Add Product</span></Link><br />
            <span className="last-menu" onClick={handleOurTeamClick}><span className="icon-style"><FontAwesomeIcon icon={faEdit} /></span><span>Our Team</span></span><br/>
            <span className="last-menu"><span ><FontAwesomeIcon icon={faFirstOrder} /></span><span><Link to="/showAllOrders" className="icon-style">All Orders</Link></span></span>


          </div>

          <div className="col-md-8">
            {user.length === 0 && <div style={{ textAlign: "center" }}>
              <div class="spinner-border text-info" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>}
            <h6 style={{ backgroundColor: "lightCyan", textAlign: "center", padding: "5px 0px" }}>Please Select Add if you want to add product</h6>
            {clicked.manage ? <div>
              <table class="table table-hover shadow">
                <tbody>
                  {user.map(pitha => <AllData deleteItem={deleteItem} pitha={pitha}></AllData>)}
                </tbody>
              </table>
            </div> : <h6 style={{ backgroundColor: "lightCyan", textAlign: "center", padding: "5px 0px" }}>Please Select Manage if you want to Edit or Delete</h6>}

            {clicked.ourTeam ?
              <OurTeam></OurTeam>
              : <h6 style={{ backgroundColor: "lightCyan", textAlign: "center", padding: "5px 0px" }}>Please Select Add if you want to add product</h6>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
