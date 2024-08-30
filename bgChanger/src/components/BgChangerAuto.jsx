import { useState, useEffect } from "react";

function BgChangerAuto() {
  const [color, setColor] = useState("olive");

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
        // Get the index of the current color and calculate the next index
        const currentIndex = colors.indexOf(prevColor);
        const nextIndex = (currentIndex + 1) % colors.length;
        return colors[nextIndex];
      });
    }, 5000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
    className="w-full h-screen duration-200"
    style={{
      backgroundColor: color,
      transition: "background-color 2s ease-in-out", // Smooth transition effect
    }}
  >
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

export default BgChangerAuto;
