import Slider from "react-slick";
function Partner() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div
      className="framer-wRFpk framer-ejFQB framer-tvBuf framer-PyGGP framer-5AEpc framer-qAUFj framer-1i2w9vb"
      style={{ width: "auto" }}
    >
      <div className="framer-d7oayb">
        <div className="framer-1qg5dww" data-framer-name="Masthead">
          <div className="framer-10nwgvd" data-framer-name="Logos">
            <div className="ssr-variant hidden-1w06yzo hidden-16f4sdh">
              <div
                className="framer-1d89l3d"
                style={{
                  outline: "none",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  flexShrink: 0,
                  opacity: 1,
                  transform: "none",
                }}
              >
                <p
                  className="framer-text"
                  style={{
                    textAlign: "center",
                    fontSize: " 18px",
                    fontFamily: "Mona-Sans Medium",
                  }}
                >
                  The biggest brands rely on Dribbble to find the most talented
                  and accomplished designers in the world.
                </p>
              </div>
            </div>
            <div className="framer-1qxa3ht-container">
              <div className="ssr-variant hidden-1w06yzo">
                <div className="partner">
                  <Slider {...settings}>
                    {[...Array(12)].map((item: any, index: any) => (
                      <div
                        style={{
                          width: "155px",
                          height: "40px",
                        }}
                      >
                        <svg
                          width="155"
                          height="40"
                          viewBox="0 0 155 40"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <text
                            x="0"
                            y="30"
                            font-family="Arial, sans-serif"
                            font-size="30"
                            font-weight="bold"
                            fill="#000000"
                          >
                            facebook
                          </text>
                        </svg>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partner;
