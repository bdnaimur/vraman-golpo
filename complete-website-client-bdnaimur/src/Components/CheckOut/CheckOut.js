import React, { useContext, useEffect, useState } from 'react';
import { FaAngleDown, FaMinus, FaPlus, FaUsers } from 'react-icons/fa';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';

const CheckOut = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [statusInfo, setStatusInfo] = useState('');
    const [quantity, setQuantity] = useState(false);
    const [adult, setAdult] = useState(0);
    const [child, setChild] = useState(0);
    const [infant, setInfant] = useState(0);
    const [date, setDate] = useState('');
    // const [cost, setCost] = useState(0);

    console.log(adult,child,infant);
    useEffect(() => {
        const url = "https://salty-shore-75037.herokuapp.com/services";
        // console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const clickedProduct = data.find(dt => dt._id === productId);
                setProduct(clickedProduct);
            })
    }, [productId])
    const handleClick = () => {
        
        const productWithUser = {
            name: product.name,
            imageURL: product.imageURL,
            price: product.price,
            status: "pending", 
            adult: adult || 1,
            child: child,
            infant: infant,
            date: date || new Date().toLocaleDateString(),
            cost: cost || product.price
        };
        productWithUser.email = loggedInUser.email;
        productWithUser.displayName = loggedInUser.displayName;
        console.log(productWithUser);
        const url = "https://salty-shore-75037.herokuapp.com/addProductWithUser";
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productWithUser)
        })
            .then(res => console.log('server side response', res))
    }
    const cost = adult*product.price + child*product.price*.5 + infant*product.price*.25;

    return (
        <div className="container">
            <div className="row">
                <h4>CheckOut</h4>
                <table class="table table-hover shadow">
                    <thead>
                        <tr className="text-center">
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Total Cost</th>
                            <th scope="col">No. of Traveler</th>
                            <th>Date</th>
                            <th scope="col">Image</th>
                            <th scope="col">Submit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-center">
                            <td>{product.name}</td>
                            <td>$ {product.price}</td>
                            <td>$ {adult*product.price + child*product.price*.5 + infant*product.price*.25}</td>
                            <td className="d-flex justify-content-center">
                                <div>
                                    <div onClick={() => setQuantity(!quantity)} className="quantity-top  text-white">
                                        <div className="topBar d-flex justify-content-between align-items-center">
                                            <FaUsers />
                                            <span>{adult + child + infant} Traveler(s)</span>
                                            <FaAngleDown />
                                        </div>
                                    </div>
                                    <div className="quantity-bottom text-white">
                                        {
                                            quantity &&
                                            <div className="" >
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div>Adult</div>
                                                    <div>
                                                        <FaPlus onClick={() => setAdult(adult + 1)} />
                                                        {adult}
                                                        <FaMinus onClick={() => setAdult(adult - 1)} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div>Child</div>
                                                        <div>
                                                            <FaPlus onClick={() => setChild(child + 1)} />
                                                            {child}
                                                            <FaMinus onClick={() => setChild(child - 1)} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div>Infant</div>
                                                        <div>
                                                            <FaPlus onClick={() => setInfant(infant + 1)} />
                                                            {infant}
                                                            <FaMinus onClick={() => setInfant(infant - 1)} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div onClick={() => setQuantity(!quantity)} className="text-center">Done</div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </td>
                            <td>
                                <input type="date" onBlur={(e)=>setDate(e.target.value)} id="birthday" name="date" required/>
                            </td>
                            <td>
                                <img style={{ width: "60px", height: "60px", boxShadow: "5px 5px 15px lightGray", borderRadius: "50%" }} src={product.imageURL} alt="" />
                            </td>
                            <td>
                                <Link to="/orders"><button onClick={handleClick} className="btn btn-success">Checkout</button></Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CheckOut;