import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../redux/actions/productActions";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    marginTop: "3%",
    padding: "4%",
    height: "160vh",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

const ProductDetails = () => {
  const classes = useStyles();
  const { productId } = useParams();
  const product = useSelector((state) => state.selectedProductReducer);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
  }, [productId]);

  return (
    <div className={classes.container}>
      <img src={image} width="500px" height="700px" />
      <Typography variant="h3">{title}</Typography>
      <Typography variant="h3" style={{ fontWeight: "bold" }}>
        {price} $
      </Typography>
      <Typography variant="h4">{category}</Typography>
      <Typography>{description}</Typography>
    </div>
  );
};

export default ProductDetails;
