import React, { Fragment } from "react";
import { Card, Typography, Box } from "@mui/material";
import SideNavigation from "../components/UI/SideNavigation";
import team from "../assets/teams.jpg"

const Home = () => {
  return (
    <>
    <Fragment>

      <SideNavigation />
      <Card className="welcome-card">
        <Box p={4}>
          <Typography variant="h4" textAlign="center">
            Welcome to the Employee Portal
          </Typography>
          <Typography textAlign="center" mt={2}>
            This is your home base for managing employee information and tasks.<br /> Use the navigation on the left to get started.
          </Typography>

        </Box>

        <Box display="flex" justifyContent="center" p={2}>
          <img
            alt="people collaborating"
            src={team}
            width={400}
          />
        </Box>
      </Card>
    </Fragment>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14772.603846222933!2d70.89522204999999!3d22.23435035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959b4a660019ee9%3A0x3d6254f36ed0e794!2sRK%20University%20Main%20Campus!5e0!3m2!1sen!2sin!4v1712299986857!5m2!1sen!2sin" height={400} width={1800}  className="contact-map" allowfullscreen="" loading="lazy" title="iframe" referrerpolicy="no-referrer-when-downgrade"></iframe>
s    </>

  );
};

export default Home;