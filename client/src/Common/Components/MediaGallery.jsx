import React from "react";

// Mui
import { useTheme, Box } from "@mui/material";
import { styled } from "@mui/system";

// Third Party
import Carousel from "react-material-ui-carousel";

const CarouselImage = styled("img")({
  height: "100%",
  width: "100%",
  objectFit: "cover",
});

const CarouselVideo = styled("video")({
  height: "100%",
  width: "100%",
  objectFit: "cover",
});

const Gradiant = styled("div")({
  height: "4rem",
  width: "100%",
  position: "absolute",
  bottom: 0,
  background:
    "linear-gradient(0deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 100%)",
  zIndex: 2,
});

const MediaGallery = ({
  items,
  height,
  width,
  borderRadius,
  children,
  isVideo,
}) => {
  const theme = useTheme();
  return (
    <div>
      <Carousel
        sx={{ height, width }}
        indicatorContainerProps={{
          sx: {
            position: "absolute",
            bottom: "0.5rem",
            display: "flex",
            justifyContent: "center",
            width: "100%",
            zIndex: 2,
          },
        }}
        indicatorIconButtonProps={{
          style: {
            color: theme?.palette.secondary.main, // Color of bullet point
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: theme?.palette.primary.light, // Color of bullet point
            backgroundColor: theme?.palette.secondary.main, // Ring around the bullet point
          },
        }}
      >
        {items.map((item, i) => (
          <Box key={i} sx={{ height, width }}>
            <Gradiant
              style={{ borderRadius: `0 0 ${borderRadius} ${borderRadius}` }}
            />
            {isVideo ? (
              <CarouselVideo>
                <source src={item.media} type="video/mp4" />
              </CarouselVideo>
            ) : (
              <CarouselImage
                src={item.media}
                alt={item.title}
                style={{ borderRadius: borderRadius }}
              />
            )}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: width,
              }}
            >
              {children}
            </div>
          </Box>
        ))}
      </Carousel>
    </div>
  );
};

export default MediaGallery;
