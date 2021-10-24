import { faFirstOrder } from '@fortawesome/free-brands-svg-icons';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faPlusSquare, faTasks } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './Admin.css';

const Admin = () => {

  return (
    <div className="manage-product">
      <Link to='/allservices'><FontAwesomeIcon icon={faTasks} /><span>Manage Product</span></Link> <br />
      <span className="icon-style"><FontAwesomeIcon icon={faPlusSquare} /></span><Link to="/addPackages"><span>Add Product</span></Link><br />
      <span className="last-menu" ><span className="icon-style"><FontAwesomeIcon icon={faEdit} /></span><span><Link to="/ourTeam">Our Team</Link></span></span><br />
      <span className="last-menu"><span ><FontAwesomeIcon icon={faFirstOrder} /></span><span><Link to="/showAllOrders" className="icon-style">All Orders</Link></span></span>
    </div>
  );
};

export default Admin;
