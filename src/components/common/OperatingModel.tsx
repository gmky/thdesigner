function OperatingModel() {
  return (
    <>
      <section className="sc-2251413b-0 bpmCvk">
        <h2 className="sc-af8ca28b-2 ihAgmt">Năng lực của chúng tôi</h2>
        <section
          data-scroll="normal"
          className="sc-2251413b-1 iMIGZJ"
          style={{ opacity: 1, transform: "translate(0px, 0px)" }}
        >
          <img
            src="/images/features-2.jpg"
            loading="lazy"
            className="sc-2251413b-2 fjRubF"
          />
          <div>
            <h3 className="sc-2251413b-3 fTIImM">DIỄN HỌA 3D KIẾN TRÚC</h3>
            <p className="sc-2251413b-4 fFhZYb">
              Japan is no longer a rare destination, but a home-away-from-home
              for millions around the world. As recent increases in tourist
              numbers reveal, Japan enjoys a strong global reputation for its
              stunning natural landscapes, innovative architecture, high-quality
              craftsmanship, and luxurious customer service at the heart of
              every interaction.
            </p>
          </div>
        </section>
        <section
          data-scroll="normal"
          className="sc-2251413b-1 gYPWPE"
          style={{ opacity: 1, transform: "translate(0px, 0px)" }}
        >
          {/* <img
            src="/images/features-2.jpg"
            loading="lazy"
            className="sc-2251413b-2 fjRubF"
          /> */}
          <div className="o-video">
            <video
              src="https://r2.gmky.dev/Video.mp4"
              loop={true}
              autoPlay={true}
              muted={true}
              playsInline={true}
              className="fjRubF-video"
              style={{
                borderRadius: 8,
                display: "block",
                objectFit: "cover",
                // backgroundColor: "rgba(0, 0, 0, 0)",
                objectPosition: "50% 50%",
                // border: "1px solid red",
              }}
            />
          </div>

          <div>
            <h3 className="sc-2251413b-3 fTIImM">DIỄN HỌA 3D NỘI THẤT</h3>
            <p className="sc-2251413b-4 fFhZYb">
              Esteemed creatives and industry pioneers, our Creators are the
              heart and soul of what we offer. By bringing their architectural
              visions to life, together we are creating a new type of livable
              art.
            </p>
          </div>
        </section>
        <section
          data-scroll="normal"
          className="sc-2251413b-1 iMIGZJ"
          style={{ opacity: 1, transform: "translate(0px, 0px)" }}
        >
          <img
            src="/images/features-2.jpg"
            loading="lazy"
            className="sc-2251413b-2 fjRubF"
          />
          <div>
            <h3 className="sc-2251413b-3 fTIImM">TRIỂN KHAI 2D KỸ THUẬT</h3>
            <p className="sc-2251413b-4 fFhZYb">
              NOT A HOTEL leverages cutting-edge technology and design to
              encourage sustainable and socially responsible practices
              throughout our business, properties, and the surrounding
              communities.
            </p>
          </div>
        </section>
      </section>
    </>
  );
}

export default OperatingModel;
