import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Box>
      <AppBar style={{ backgroundColor: "black" }}>
        <Toolbar>
          <Typography variant="h3">
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              {" "}
              Shopzee
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
