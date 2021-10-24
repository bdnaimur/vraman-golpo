import { faFirstOrder } from '@fortawesome/free-brands-svg-icons';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faPlusSquare, faTasks } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';

const Admin = () => {
  const [subMenu, setSubMenu] = useState(false)
// const handleMouseEnter = e =>{
//   setSubMenu(true)
// }
  return (
    <div className="manage-product">
      <Link to='/allservices'><FontAwesomeIcon icon={faTasks} /><span>Manage Product</span></Link> <br />
      <span className="icon-style"><FontAwesomeIcon icon={faPlusSquare} /></span><Link to="/addPackages"><span>Add Product</span></Link><br />
      <span className="icon-style"><FontAwesomeIcon icon={faEdit} /></span><span><Link onMouseEnter={()=>setSubMenu(true)} to="/ourTeam">Our Team</Link></span><br />
      {subMenu && <div><span className="icon-style"><FontAwesomeIcon icon={faEdit} /></span><span><Link to="/addTeamMember">Add Team Member</Link></span></div>}
      <span ><FontAwesomeIcon icon={faFirstOrder} /></span><span><Link to="/showAllOrders" className="icon-style">All Orders</Link></span>
    </div>
  );
};

export default Admin;
