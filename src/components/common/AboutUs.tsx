function AboutUs() {
  return (
    <div className="sc-b9b9b8e5-0 hqTSUb">
      <h2 className="sc-b9b9b8e5-1 bSOXCb">
        <span className="sc-b9b9b8e5-2 cIZvsz">về chúng tôi</span>
        <p className="sc-b9b9b8e5-3 jrdSLU">
          10+ Archviz không phải là thiết kế
          <br />
          Đó là một cách sống mới
        </p>
      </h2>
      <div className="sc-b9b9b8e5-4 isofQe">
        <div className="swiper-slide">
          <picture>
            <source
              media="(min-width: 769px)"
              type="image/webp"
              srcSet="/images/background-mv.webp"
            />
            <source
              media="(min-width: 769px)"
              srcSet="/images/background-mv_pc.jpg"
            />
            <img
              className="sc-b9b9b8e5-5 eFjphg use-pc"
              data-scroll="background-pc"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            />
          </picture>
          <picture>
            <source
              media="(max-width: 768px)"
              type="image/webp"
              srcSet="/images/background-mv.webp"
            />
            <source
              media="(max-width: 768px)"
              srcSet="/images/background-mv_pc.jpg"
            />
            <img
              className="sc-b9b9b8e5-5 eFjphg use-sp"
              data-scroll="background-sp"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            />
          </picture>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
