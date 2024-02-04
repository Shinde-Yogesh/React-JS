import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200" //backgroundColor : '#f4acb7'
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("#e63946")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#e63946" }}
          >
            Red (Pantone)
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("#00B4D8")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#00B4D8" }}
          >
            Pacific cyan
          </button>
          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
          {/* new 4 added */}
          <button
            onClick={() => setColor("Silver")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Silver" }}
          >
            Silver
          </button>

          <button
            onClick={() => setColor("#A2D2FF")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#A2D2FF" }}
          >
            Aqua
          </button>
          <button
            onClick={() => setColor("#985277")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#985277" }}
          >
            Magenta haze
          </button>
          <button
            onClick={() => setColor("#FFAFCC")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#FFAFCC" }}
          >
            Carnation pink
          </button>
          <button
            onClick={() => setColor("#457B9D")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#457B9D" }}
          >
            Cerulean
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
