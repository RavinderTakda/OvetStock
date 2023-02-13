
import styles from "./Navbar.module.css"
import { RiAccountCircleFill } from 'react-icons/ri';
import { AiOutlineHeart } from 'react-icons/ai';
import {BsCart} from 'react-icons/bs';

export  const Navbar = () => {


    return(
        <div>
        <div className={styles.navbar}>
            <div>
            <img className={styles.navbarlogo} src="https://searchlogovector.com/wp-content/uploads/2018/09/overstock-logo-vector.png" ></img>
            </div>
            
            <div className={styles.navbarsearch}>
            <input className={styles.navbarinput}  placeholder="Search...everything you find ships for free" ></input>
            </div>
            
            <div className={styles.navbaraccount} >
                <div className={styles.accounthover}>
                <p><RiAccountCircleFill/></p> 
                <h6 className={styles.navbarh6} >Account</h6>
                <div className={styles.hovers}>
                <h4>Sign In</h4>
                <p>View your account and check your order status.</p>
                <hr></hr>
                <h4>Create an Account</h4>
                <p>Track orders,save items to lists and more!</p>
                <hr></hr>
                <p>My Account</p>
                <p>My Orders</p>
                <p>My Reviews</p>
                <p>Help</p>
                </div>
                </div>
                
             
            
                <div>
                <p><AiOutlineHeart/></p> 
                <h6 className={styles.navbarh6} >Lists</h6>
                </div>

                <div>
                <p><BsCart/></p> 
                <h6 className={styles.navbarh6} >Cart</h6>
                </div>
            </div>

        </div>

        <hr className={styles.navbarline}></hr>

<div className={styles.navbarhome}>
<p>Furniture</p>
<p>Rugs</p>
<p>Decor</p>
<p>Bedding</p>
<p>Home Improvement</p>
<p>Kitchen</p>
<p>Outdoor</p>
<p>Lighting</p>
<p>Kids & Baby</p>
<p>Bath</p>
<p>More</p>
<p>Ideas</p>
<p>Sales & Deals</p>
</div>

</div>
    )
}