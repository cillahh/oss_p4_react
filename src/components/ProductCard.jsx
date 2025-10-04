import { useNavigate } from "react-router-dom";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product, putProduct, deleteProduct }) => {
  const { name, price, amount, id, image } = product;

  const navigate = useNavigate();

  const handleMinus = async () => {
    if (amount > 1) {
      await putProduct({ ...product, amount: Number(amount - 1) });
    } else {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this item?"
      );
      if (confirmDelete) {
        deleteProduct(id);
      }
    }
  };

  const handlePlus = async () => {
    await putProduct({ ...product, amount: Number(amount + 1) });
  };

  return (
    <div className={styles.cardContainer}>
      <img
        onClick={() => navigate("/UpdateProduct", { state: product })}
        src={image}
        alt="productImage"
      />
      <div className={styles.productInfo}>
        <h3>{name}</h3>
        <div className={styles.colorOptions}>
          {product.colorList?.map((color, index) => (
            <div
              key={index}
              className={styles.colorBox}
              style={{ backgroundColor: `#${color}` }}
            />
          ))}
        </div>
        <p className={styles.price}>{price}</p>
        <div className={styles.amountContainer}>
          <button onClick={handleMinus}>-</button>
          <p>{Number(amount)}</p>
          <button onClick={handlePlus}>+</button>
        </div>
        <button className={styles.remove} onClick={() => deleteProduct(id)}>
          REMOVE
        </button>
        {/* <p className={styles.total}>Product Total: {amount * price} </p> */}
      </div>
    </div>
  );
};

export default ProductCard;
