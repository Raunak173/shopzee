import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";
import ProductCard from "./ProductCard";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    marginTop: "3%",
    flexWrap: "wrap",
    padding: "4%",
    justifyContent: "space-between",
    alignItems: "space-between",
    backgroundColor: "#f1faee",
  },
});

const ProductList = () => {
  const classes = useStyles();
  const products = useSelector((state) => state.productReducer.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className={classes.container}>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
