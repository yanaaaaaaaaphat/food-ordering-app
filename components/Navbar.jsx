import styles from "../styles/Navbar.module.css";
import Image from "next/image";

export const Navbar = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image
            width="32px"
            height="32px"
            src="/img/8.png"
            alt="telephone image"
          />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>099 978 7871</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image width="100px" height="100px" src="/img/logo.png" alt="logo" />
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blogs</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
            <Image width="50px" height="50px" src="/img/cart.png" alt="cart image"/>
            <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
