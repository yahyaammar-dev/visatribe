import React from "react";
import { Grid, Typography } from "@mui/material";

function ServicesCard({ data }) {
  return (
    <Grid container direction="column" sx={{ mb: 10, pr: 5 }}>
      <Grid item container direction="row">
        <img src={data.image} alt="services" width="70px" height="70px" />
        <Typography sx={{ typography: { md: "h5", xs: "h6" }, m: 3 }}>
          {data.heading}
        </Typography>
      </Grid>
      <Grid item textAlign="justify">
        <Typography sx={{ typography: { md: "body1", xs: "body2" } }}>
          {data.detail}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default ServicesCard;
