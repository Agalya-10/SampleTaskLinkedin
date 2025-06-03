import React from "react";
import { AppBar,Box,Card,CardContent, Chip, Container,Divider,Grid, Typography,useTheme,} from "@mui/material";
import {ArrowRightAlt as ArrowRightAltIcon,AccessTime as AccessTimeIcon,TrendingDown as TrendingDownIcon,} from "@mui/icons-material";

const FlightSearchResults = () => {
  const theme = useTheme();

  const flights = [
    {
      departureTime: "8:40 PM",
      arrivalTime: "5:20 AM",
      nextDay: true,
      price: "CHF 1,116",
      origin: "GVA",
      destination: "HKG",
      tripType: "round trip",
      airline: "AF",
      stops: "1 stop in CDG",
      duration: "14 hr 40 min",
      airlineName: "Air France",
      emissions: "-28% emissions",
    },
    {
      departureTime: "11:15 AM",
      arrivalTime: "6:55 AM",
      nextDay: true,
      price: "CHF 1,435",
      origin: "GVA",
      destination: "HKG",
      tripType: "round trip",
      airline: "A",
      stops: "1 stop in ZRH",
      duration: "13 hr 40 min",
      airlineName: "SWISS, Cathay Pacific",
      emissions: "-20% emissions",
    },
    {
      departureTime: "10:50 AM",
      arrivalTime: "6:55 AM",
      nextDay: true,
      price: "CHF 1,742",
      origin: "GVA",
      destination: "HKG",
      tripType: "round trip",
      airline: "A",
      stops: "1 stop in ZRH",
      duration: "14 hr 5 min",
      airlineName: "SWISS, Cathay Pacific",
      emissions: "-20% emissions",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <AppBar position="static"elevation={0}sx={{backgroundColor: "white",borderBottom: "1px solid #e0e0e0",}}>
        <Container maxWidth="lg">
          <Box sx={{display: "flex",justifyContent: "space-between",alignItems: "center",}}>
            <Typography
              variant="subtitle1"
              sx={{color: "#757575",fontSize: "0.975rem",}}>Travel</Typography>
            <Typography variant="subtitle1"sx={{color: "#757575",fontSize: "0.975rem",}}>Explore</Typography>
            <Typography variant="subtitle1"sx={{color: "#1976d2",fontSize: "0.975rem",fontWeight: 600,}}>Flights</Typography>
            <Typography variant="subtitle1"sx={{color: "#757575",fontSize: "0.975rem",}}>Hotels</Typography>
            <Typography variant="subtitle1"sx={{color: "#757575",fontSize: "0.975rem",}}>Vacation rentals</Typography>
          </Box>
        </Container>
      </AppBar>
      <Container maxWidth="lg" sx={{ py: 3 }}>
        <Typography variant="h6"sx={{fontWeight: 700,color: "#212121",fontSize: "1.25rem",mb: 3,}}>Departing flights</Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {flights.map((flight, index) => (
            <Card key={index}elevation={0}sx={{backgroundColor: "white",borderRadius: "8px",boxShadow: "0 1px 3px rgba(0,0,0,0.1)","&:hover": {boxShadow: "0 2px 8px rgba(0,0,0,0.15)",},}}>
              <CardContent sx={{ p: 2 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={5}>
                    <Box sx={{display: "flex",alignItems: "center",gap: 2,}}>
                      <Box>
                        <Typography variant="body1"sx={{fontWeight: 600,color: "#212121",fontSize: "1rem",}}>{flight.departureTime}</Typography>
                        <Typography variant="body2"sx={{color: "#757575",fontSize: "0.75rem",mt: 0.5,}}>{flight.price}{flight.nextDay && (<sup style={{ fontSize: "0.6rem" }}>+1</sup>)}</Typography>
                      </Box>
                      <ArrowRightAltIcon sx={{ color: "#bdbdbd", fontSize: "1.25rem" }}/>
                      <Box>
                        <Typography variant="body1"sx={{fontWeight: 600,color: "#212121",fontSize: "1rem",}}>{flight.arrivalTime}</Typography>     
                        <Box sx={{display: "flex",alignItems: "center",gap: 1,mt: 0.5,}}>
                          <Chip label={flight.origin}size="small"sx={{height: "20px",backgroundColor: "#e3f2fd",color: "#1976d2",fontSize: "0.6875rem",fontWeight: 500,}}/>
                          <Chip label={flight.destination}size="small"sx={{height: "20px",backgroundColor: "#f5f5f5",color: "#424242",fontSize: "0.6875rem",fontWeight: 500,}}/>
                          <Typography variant="caption"sx={{color: "#757575",fontSize: "0.6875rem",}}>{flight.tripType}</Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={1}><Divider orientation="vertical" flexItem /></Grid>
                  <Grid item xs={12} sm={5}>
                    <Box>
                      <Typography variant="body2"sx={{fontWeight: 500,color: "#212121",fontSize: "0.875rem",}}>{flight.airline} · {flight.stops}</Typography>
                      <Box sx={{display: "flex",alignItems: "center",gap: 1,mt: 0.5,}}>
                        <AccessTimeIcon sx={{color: "#757575",fontSize: "1rem",}}/>
                        <Typography variant="caption"sx={{color: "#757575",fontSize: "0.75rem",}}>{flight.duration}</Typography>
                        <Typography variant="caption"sx={{color: "#757575",fontSize: "0.75rem",}}>{flight.airlineName}</Typography>
                      </Box>
                    </Box>
                    <Box sx={{display: "flex",alignItems: "center",gap: 0.5,mt: 1,}}>
                      <TrendingDownIcon sx={{color: "#4caf50",fontSize: "1rem",}}/>
                      <Typography variant="caption"sx={{color: "#4caf50",fontSize: "0.75rem",fontWeight: 500,}}>{flight.emissions}</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
export default FlightSearchResults;