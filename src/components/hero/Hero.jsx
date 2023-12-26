import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Container, Link, Stack, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./slider.css";
const Hero = () => {
  return (
    <Container sx={{ mt: 2.5, display: "flex", alignItems: "center", gap: 2 }}>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="src/images/banner-15.jpg" alt="" />
          <Box sx={{ position: "absolute ", left: "10%" }}>
            <Typography
              sx={{
                color: "#222",
              }}
              variant="h5"
            >
              LIFESTYLE COLLECTION
            </Typography>
            <Typography
              sx={{
                color: "#222",
                fontWeight: 400,
                my: 1,
              }}
            >
              MEN
            </Typography>
            <Stack
             sx={{ 
                justifyContent: "center",
                }}
                direction={"row"}
                alignItems={"center"}
                >
               <Typography
                 color={"#333"} mr={1} variant="h4">
                SALE UP TO
                </Typography>
                <Typography color={"#D23F57"} variant="h4">
                    30% OF
                    </Typography>     
            </Stack>
          </Box>
        </SwiperSlide>
      </Swiper>

      <Box sx={{ display: { xs: "none", md: "block", minWidth: "26.6%" } }}>
        <Box sx={{ position: "relative" }}>
          <img width={"100%"} src="src/images/banner-17.jpg" alt="" />
          <Stack
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: 31,
            }}
          >
            <Typography
              variant="caption"
              sx={{ color: "#2B3445", fontSize: "18px" }}
            >
              NEW ARRIVALS
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#2B3445",
                lineHeight: "16px",
                mt: 1,
              }}
            >
              SUMMER
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#2B3445",
              }}
            >
              SALE 20% OFF
            </Typography>
            <Link
              sx={{
                color: "#2B3445",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "0.2s",
                "&:hover": {
                  color: "#D23F57",
                },
              }}
              href="#"
              underline="none"
            >
              shop now
              <ArrowForwardIcon sx={{ fontSize: "13px" }} />
            </Link>
          </Stack>
        </Box>
        <Box sx={{ position: "relative" }}>
          <img width={"100%"} src="src/images/banner-16.jpg" alt="" />
          <Stack
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: 31,
            }}
          >
            <Typography
              variant="caption"
              sx={{ color: "#2B3445", fontSize: "18px", fontWeight: 300 }}
            >
              GAMING 4K
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#2B3445",
                lineHeight: "16px",
                mt: 1,
              }}
            >
              DESKTOPS &
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#2B3445",
              }}
            >
              LAPTOPS
            </Typography>
            <Link
              sx={{
                color: "#2B3445",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "0.2s",
                "&:hover": {
                  color: "#D23F57",
                },
              }}
              href="#"
              underline="none"
            >
              shop now
              <ArrowForwardIcon sx={{ fontSize: "13px" }} />
            </Link>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default Hero;
