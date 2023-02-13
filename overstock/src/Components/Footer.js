import styles from "./Footer.module.css"

export const Footer = () => {


return(

    <div>
    <div className={styles.footer}>

        <div className={styles.footeraccount}>
            <h5>MY ACCOUNT</h5>
            <p>Orders & Returns</p>
            <p>Email Preferences</p>
            <p>Account Settings</p>
        </div>

        <div className={styles.footeraccount}>
            <h5>LET US HELP</h5>
            <p>Contact Customer Care</p>
            <p>Shipping Information</p>
            <p>Return Policy</p>
            <p>International Help</p>
            <p>Accessibility</p>
        </div>

        <div className={styles.footeraccount}>
            <h5>COMPANY INFORMATION</h5>
            <p>About Overstock™</p>
            <p>Contact Us</p>
            <p>Careers</p>
            <p>Investor Relations</p>
            <p>Sell Your Products</p>
            <p>Supply Chain Transparency</p>
        </div>

        <div className={styles.footeraccount}>
            <h5>MORE WAYS TO SHOP</h5>
            <p>Tips & Ideas</p>
            <p>Deals</p>
            <p>Clearance</p>
            <p>New Arrivals</p>
        </div>
    </div>

    <div className={styles.footercopyright}>

<div className={styles.footercoliseum}>
    <p>© Copyright 2023, Overstock.com®, Inc.</p>
    <p>799 Coliseum Way Midvale, UT 84047 | 1-800-843-2446</p>
</div>

<div className={styles.footercondition}>
    <p>Privacy Policy</p>
    <p>Terms & Conditions</p>
    <p>*Promotion Terms</p>
    <p>Ship to:IN flag</p>

</div>

    </div>

    </div>
)

}