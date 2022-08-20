import React from "react";
import { Typography, Grid, Container } from "@mui/material";
import { AboutusData as Data } from "../../Data";

function Aboutus() {
  return (
    <div id="aboutus">
      <Container sx={{ px: { md: 5.8, xs: 2 }, py: { md: 15, xs: 5 } }}>
        <Grid component="section" container alignItems="center" justifyContent="space-between">
          <Grid item xs={12} sm={6}>
            <Typography
              sx={{
                mb: { md: 5, xs: 2 },
                mx: 0,
                typography: { md: "h3", xs: "h4" },
              }}
            >
              About Us
            </Typography>
            <Typography
              sx={{
                my: { md: 2, xs: 1 },
                typography: { md: "body1", xs: "body2" },
              }}
            >
              {Data.paragraph}
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} sx={{ mt: 3 }}>
            <img src={Data.img} alt="" width="100%" height="auto" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Aboutus;
