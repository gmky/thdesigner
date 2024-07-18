import React, { useEffect, useRef } from "react";

function Join() {
  // const canvasRef = useRef<any>(null);

  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   const ctx = canvas.getContext("2d");

  //   // Set canvas size
  //   canvas.width = 800;
  //   canvas.height = 400;

  //   // Draw the Earth globe with polka dots
  //   drawEarthGlobe(ctx);
  // }, []);

  // const drawEarthGlobe = (ctx: any) => {
  //   const earthImage = new Image();
  //   earthImage.src =
  //     "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg"; // Earth image URL

  //   earthImage.onload = () => {
  //     ctx.drawImage(earthImage, 0, 0, 800, 400);

  //     // Draw polka dots
  //     const dotSize = 3;
  //     const dotColor = "rgba(255, 0, 0, 0.8)";
  //     const dotSpacing = 30;

  //     for (let lat = -90; lat <= 90; lat += 15) {
  //       for (let lon = -180; lon <= 180; lon += 15) {
  //         const [x, y] = latLonToXY(lat, lon);
  //         ctx.beginPath();
  //         ctx.arc(x, y, dotSize, 0, 2 * Math.PI);
  //         ctx.fillStyle = dotColor;
  //         ctx.fill();
  //       }
  //     }
  //   };
  // };

  // // Helper function to convert latitude and longitude to canvas coordinates
  // const latLonToXY = (lat: any, lon: any) => {
  //   const radius = 200; // Adjust this according to your globe size
  //   const centerX = 400; // Adjust this according to your canvas size
  //   const centerY = 200; // Adjust this according to your canvas size

  //   const phi = ((90 - lat) * Math.PI) / 180;
  //   const theta = ((180 - lon) * Math.PI) / 180;

  //   const x = radius * Math.sin(phi) * Math.cos(theta) + centerX;
  //   const y = radius * Math.cos(phi) + centerY;

  //   return [x, y];
  // };
  return (
    <div
      className="framer-9L1qR framer-PyGGP framer-tvBuf framer-zZPvB framer-1tpzw0m"
      style={{
        minHeight: "100vh",
        width: "auto",
      }}
    >
      <div className="framer-1oe39p4" data-framer-name="CONTENT" id="body">
        <div className="framer-mlsokg">
          <div className="framer-mjxgg5" data-framer-name="Section">
            <div className="framer-en031i" data-framer-name="Blog">
              <div className="framer-1mqpga6-container">
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    placeItems: "center",
                    placeContent: "center",
                    overflow: "visible",
                    background: "rgb(255, 255, 255)",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      aspectRatio: "1 / 1",
                      maxWidth: "800px",
                      maskImage:
                        "radial-gradient(circle at 50% 50%, rgb(0, 0, 0) 60%, rgba(0, 0, 0, 0) 70%)",
                    }}
                  >
                    <canvas
                      width={1000}
                      style={{
                        width: "100%",
                        height: "100%",
                        contain: "size layout paint",
                        cursor: "auto",
                        userSelect: "none",
                      }}
                      height={1000}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Join;
