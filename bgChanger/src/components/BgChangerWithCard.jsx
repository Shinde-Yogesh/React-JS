import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useState, useEffect } from 'react';

function BgChangerWithCard() {
  // State for background color
  const [color, setColor] = useState("olive");

  // Array of colors to switch between
  const colors = [
    "#e63946", // Red (Pantone)
    "green",   // Green
    "#00B4D8", // Pacific cyan
    "purple",  // Purple
    "Silver",  // Silver
    "#A2D2FF", // Aqua
    "#985277", // Magenta haze
    "#FFAFCC", // Carnation pink
    "#457B9D", // Cerulean
  ];

  // Automatically change the background color every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setColor((prevColor) => {
        const currentIndex = colors.indexOf(prevColor);
        const nextIndex = (currentIndex + 1) % colors.length;
        return colors[nextIndex];
      });
    }, 5000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // MediaControlCard component for the Material-UI card
  const MediaControlCard = () => {
    const theme = useTheme();

    return (
      <Card sx={{ display: 'flex', maxWidth: 500 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              Live From Space
            </Typography>
            <Typography variant="subtitle1" component="div" sx={{ color: 'text.secondary' }}>
              Mac Miller
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <IconButton aria-label="previous">
              {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
            </IconButton>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
            <IconButton aria-label="next">
              {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
            </IconButton>
          </Box>
        </Box>
            <CardMedia
            component="img"
            sx={{ width: 151 }}
            image="https://mui.com/static/images/cards/live-from-space.jpg"
            alt="Live from space album cover"
        />
      </Card>
    );
  };

  return (
    <div
      className="w-full h-screen duration-200"
      style={{
        backgroundColor: color,
        transition: "background-color 2s ease-in-out", // Smooth transition effect
      }}
    >
      <div className="flex justify-center items-center h-full">
        {/* Rendering the Material-UI Card */}
        <MediaControlCard />
      </div>

      {/* Optional: Add color buttons for manual background color change */}
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {colors.map((colorCode, index) => (
            <button
              key={index}
              onClick={() => setColor(colorCode)}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: colorCode }}
            >
              {colorCode}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BgChangerWithCard;
