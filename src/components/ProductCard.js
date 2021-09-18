import { Card, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div>
      <Card
        style={{
          width: "430px",
          height: "600px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
          justifyContent: "space-between",
          marginBottom: "8%",
        }}
      >
        <Typography variant="h4">
          <Link
            to={`/products/${product.id}`}
            style={{ color: "black", textDecoration: "none" }}
          >
            {product.title}
          </Link>
        </Typography>
        <img src={product.image} width="200px" height="250px" />
        <Typography variant="h4" style={{ fontWeight: "bold" }}>
          {product.price} $
        </Typography>
        <Typography variant="h5">{product.category}</Typography>
      </Card>
    </div>
  );
};

export default ProductCard;
