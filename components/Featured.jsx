import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useState } from "react";

const Featured = () => {
  const [index, setIndex] = useState(0);

  //   const images = [
  //   "/img/1.png",
  //   "/img/2.png",
  //   "/img/3.png",
  // ];

  const handleArrow = (direction) => {
    if (direction === "l") {
        setIndex(index !== 0 ? index-1: 2)
    }
    if (direction === "r") {
        setIndex(index !== 2 ? index+1: 0)
    }
  }

  console.log(index);

  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }} onClick={()=> handleArrow("l")}>
        <Image src="/img/left-arrow.png" alt="" layout="fill" objectFit="contain"/>
      </div>
      <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
        <div className={styles.imgContainer} key="0">
          <Image
            src="/img/5.png"
            alt="pizza"
            layout="fill"
            objectFit="contain"
          />
          ;
        </div>
        <div className={styles.imgContainer} key="1">
          <Image
            src="/img/3.png"
            alt="pizza"
            layout="fill"
            objectFit="contain"
          />
          ;
        </div>
        <div className={styles.imgContainer} key="2">
          <Image
            src="/img/1.png"
            alt="pizza"
            layout="fill"
            objectFit="contain"
          />
          ;
        </div>
      </div>

      <div className={styles.arrowContainer} style={{ right: 0 }} onClick={()=> handleArrow("r")}>
        <Image src="/img/right-arrow.png" alt="" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};

export default Featured;
