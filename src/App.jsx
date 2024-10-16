import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";

// PAGES
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import RatingRoom from "./pages/RatingRoom";
import Profile from "./pages/Profile";
import Room from "./pages/Room";
import Payment from "./pages/Payment";
import Halaman from "./pages/halaman"; 

// COMPONENTS
import Frame from "./components/Frame"; 


const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#8E0000",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Frame>
          <Routes>
            {/* Define your routes */}
            <Route path="/FE_MahagaNajwanKaidan_XIIRPL/home" element={<Home />} />
            <Route path="/FE_MahagaNajwanKaidan_XIIRPL/booking" element={<Booking />} />
            <Route path="/FE_MahagaNajwanKaidan_XIIRPL/ratingRoom" element={<RatingRoom />} />
            <Route path="/FE_MahagaNajwanKaidan_XIIRPL/profile" element={<Profile />} />
            <Route path="/FE_MahagaNajwanKaidan_XIIRPL/room" element={<Room />} />
            <Route path="/FE_MahagaNajwanKaidan_XIIRPL/payment" element={<Payment />} />
            <Route path="/FE_MahagaNajwanKaidan_XIIRPL/" element={<Halaman />} />
          </Routes>
        </Frame>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
