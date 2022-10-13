import styles from "../styles/Pizzalist.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({pizzaList}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem Ipsum dolor sit amet, consectetur adipiscing elit, Ut blandit arcu
        in pretium molestie. Interdum et malesuda fames acme. Lorem ipsum dolor
        sit amet, consectetur adipscing elit.
      </p>
      <div className={styles.wrapper}>
        {Array.from(pizzaList).map((pizza) => (
           <PizzaCard key={pizza._id} pizza={pizza}/>
        ))}
        
      </div>
    </div>
  );
};

export default PizzaList;
