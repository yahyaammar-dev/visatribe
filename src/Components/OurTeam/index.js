import React from "react";
import { Typography, Grid } from "@mui/material";
import { teamMembers as Data } from "../../Data";

function OurTeam() {
  return (
    <div id="team">
      <Grid component="section" container direction="column" alignItems="center">
        <Typography
          sx={{
            mt: { md: 15, sm: 3, xs: 5 },
            mb: { md: 10, xs: 5 },
            typography: { md: "h3", xs: "h4" },
            color: "primary.main",
          }}
        >
          Our Team
        </Typography>
        <Grid component="div" container item direction="row" alignItems="center" justifyContent="center" sx={{ pb: { xs: 5, md: 15 } }}>
          {Data.map((person, index) => (
            <Grid md={3} sm={6} xs={12} container item justifyContent="center" key={index} direction="column" textAlign="center" alignItems="center">
              <img width="230px" height="auto" src={person.photo} alt="" />
              <Typography
                sx={{
                  my: { md: 2, xs: 1 },
                  typography: {
                    md: "h5",
                    xs: "h6",
                  },
                  color: "primary.main",
                }}
              >
                {person.name}
              </Typography>
              <Typography
                sx={{
                  typography: {
                    md: "body1",
                    xs: "caption",
                  },
                  color: "primary.main",
                }}
              >
                {person.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default OurTeam;
