import React from "react";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const ModalProject: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Modal */}
      <div id="signup-overlay" className="overlay" style={{ height: "100%" }}>
        <div className="lightbox">
          <a href="#" className="close" aria-label="close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              height={25}
              viewBox="0 0 25 25"
              fill="none"
              role="img"
              className="icon icon-24 lazyloaded"
            >
              <rect x={3} y={5} width={18} height={16} fill="white" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.5051 0.135254C14.9528 0.135152 17.3455 0.860879 19.3807 2.22066C21.416 3.58044 23.0022 5.51321 23.939 7.77453C24.8757 10.0359 25.1209 12.5242 24.6434 14.9248C24.166 17.3255 22.9873 19.5306 21.2566 21.2614C19.5259 22.9922 17.3207 24.1709 14.9201 24.6485C12.5195 25.126 10.0311 24.881 7.76979 23.9443C5.50843 23.0076 3.57561 21.4214 2.21576 19.3862C0.855913 17.3511 0.130107 14.9583 0.130127 12.5107C0.130141 9.22858 1.43392 6.08092 3.75467 3.76009C6.07542 1.43926 9.22304 0.135377 12.5051 0.135254V0.135254ZM7.13525 16.4156C6.9463 16.6101 6.84148 16.8711 6.84346 17.1423C6.84544 17.4135 6.95406 17.6729 7.14583 17.8647C7.3376 18.0564 7.59711 18.1649 7.86827 18.1668C8.13943 18.1687 8.40044 18.0638 8.59488 17.8748L12.4997 13.9699L16.4103 17.8805C16.6047 18.0698 16.8659 18.1749 17.1372 18.1731C17.4085 18.1712 17.6682 18.0626 17.8601 17.8707C18.0519 17.6788 18.1605 17.4191 18.1623 17.1478C18.164 16.8765 18.0589 16.6153 17.8695 16.421L13.9592 12.5106L17.8847 8.58516C18.072 8.39039 18.1754 8.12994 18.1727 7.85976C18.1701 7.58958 18.0616 7.33122 17.8705 7.14017C17.6795 6.94911 17.4211 6.8406 17.1509 6.83794C16.8808 6.83529 16.6203 6.93869 16.4255 7.12594L12.4997 11.051L8.57998 7.13125C8.38644 6.93769 8.12393 6.82894 7.8502 6.82892C7.57647 6.82891 7.31394 6.93763 7.12038 7.13118C6.92681 7.32472 6.81806 7.58724 6.81804 7.86097C6.81803 8.13469 6.92675 8.39722 7.1203 8.59078L11.0402 12.5106L7.13525 16.4156Z"
                fill="#979797"
              />
            </svg>
          </a>
          <div className="display">
            <div className="processing">Loading…</div>
          </div>
        </div>
      </div>
      <div
        className={`shot-overlay js-shot-overlay lazyloading-hidden-container lazyloaded ${
          isOpen === true ? "overlay-visible" : "overlay-hide"
        }`}
      >
        <div className="overlay-content js-overlay-content">
          <div className="shot-container js-shot-container lazyload-hidden-element">
            <div className="shot-content js-media-content ">
              <div className="shot-content-container">
                <div className="shot-header js-shot-header">
                  <div className="shot-header__container">
                    <h1 className="shot-header__title">
                      Hope you are staying cool 😎
                    </h1>
                  </div>
                </div>
                <div className="sticky-header " data-sticky-header>
                  <div className="sticky-header__container">
                    <div className="sticky-header__user-container">
                      <div
                        className="sticky-header__avatar"
                        data-uuid-passthrough
                      >
                        <a
                          className="hoverable url"
                          rel="contact"
                          title="Aldo Crusher"
                        >
                          <picture>
                            <source
                              srcSet="https://cdn.dribbble.com/users/319371/avatars/normal/ce4194208467f0e61c9ee26b321fce69.png?1543866222"
                              media="(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-device-pixel-ratio: 1.5), (min-resolution: 1.5dppx)"
                            />
                            <source srcSet="https://cdn.dribbble.com/users/319371/avatars/small/ce4194208467f0e61c9ee26b321fce69.png?1543866222" />
                            <img
                              className="photo"
                              alt="Aldo Crusher"
                              width={48}
                              height={48}
                              src="https://cdn.dribbble.com/users/319371/avatars/small/ce4194208467f0e61c9ee26b321fce69.png?1543866222"
                            />
                          </picture>
                        </a>
                      </div>
                      <div className="sticky-header__user-details">
                        <div className="sticky-header__name">
                          <span>
                            <a className="hoverable" rel="contact">
                              Tuấn Mạnh
                            </a>
                          </span>
                        </div>
                        <div className="sticky-header__user-status js-shot-header-action-links ">
                          <div className="follow-prompt follow-prompt-text sticky-header__follow">
                            <a
                              className="form-btn follow shot-follow sentence-btn "
                              rel="tipsy"
                              data-signup-trigger
                              data-context="follow-user"
                              original-title="Follow Aldo Crusher"
                            >
                              tuanmanh97x@gmail.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="ssr-app" className="shot-page-container">
                  <div className="content-block-container full-width">
                    <div
                      className="block-media-wrapper content-block"
                      style={{ aspectRatio: "1.3333333333333333" }}
                    >
                      <div
                        className="block-media contain auto-width false"
                        style={{
                          aspectRatio: "1.33333 / 1",
                          objectFit: "contain",
                        }}
                      >
                        <a className="img-th" target="_blank">
                          {/* <img
                            style={{
                              width: "100%",
                              height: "100%",
                            }}
                            data-test="v-img"
                            src="https://imagedelivery.net/jZ4zarr81i7OIuT1JQY5_A/lp/next/tokyo/gallery1.jpg/public"
                            alt=""
                            className="v-img content-block border-radius-8"
                            srcSet="https://imagedelivery.net/jZ4zarr81i7OIuT1JQY5_A/lp/next/tokyo/gallery1.jpg/public"
                          /> */}

                          <iframe
                            src="https://kuula.co/share/collection/7cczq"
                            // allowFullScreen
                            // loop={true}
                            // autoPlay={true}
                            // muted={true}
                            // playsInline={true}
                            // className="fjRubF-video"
                            style={{
                              borderRadius: 8,
                              display: "block",
                              objectFit: "cover",
                              width: "100%",
                              objectPosition: "50% 50%",
                              height: "100%",
                            }}
                          />
                        </a>
                      </div>
                    </div>{" "}
                  </div>

                  <div className="content-block-container" data-v-7bc368fc>
                    {/**/}{" "}
                    <div
                      className="content-block"
                      data-v-0ffb479a
                      data-v-7bc368fc
                    >
                      <h2 style={{ textAlign: "start" }}>
                        <strong>We are ready for new projects 🤠</strong>
                      </h2>
                      <p style={{ textAlign: "start" }}>
                        ----------------------------------------------------------------
                      </p>
                      <p style={{ textAlign: "start" }}>
                        Send inquiry to:<strong> 📨 </strong>
                        <a
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          href="mailto:work@keitoto.com"
                        >
                          <strong>
                            <u>work@keitoto.com</u>
                          </strong>
                        </a>
                      </p>
                      <p style={{ textAlign: "start" }}>
                        or visit our website:<strong> 🌐 </strong>
                        <a
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          href="http://www.keitoto.com"
                        >
                          <strong>
                            <u>www.keitoto.com</u>
                          </strong>
                        </a>
                      </p>
                    </div>{" "}
                  </div>

                  <div className="content-block-container">
                    {/**/}{" "}
                    <div className="content-block">
                      <h1 style={{ textAlign: "start" }}>
                        <strong>About</strong>
                      </h1>
                      <p style={{ textAlign: "start" }}>
                        Travel Companion Mobile App offers a seamless travel
                        planning experience, allowing users to organize their
                        entire trip in one convenient location. Share
                        itineraries with family and friends, receive flight
                        alerts, store essential documents, and create wish lists
                        of must-visit destinations.
                      </p>
                    </div>{" "}
                  </div>

                  <div className="content-block-container full-width">
                    <div className="sc-b159753-0 kfgvQI">
                      <h2
                        data-scroll="normal"
                        className="sc-b159753-1 jwxPIV"
                        style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                      >
                        Gallery
                      </h2>
                      <div className="sc-b159753-2 jhbUlU">
                        <picture
                          data-scroll="normal"
                          data-column={1}
                          style={{
                            opacity: 1,
                            transform: "translate(0px, 0px)",
                          }}
                        >
                          <source
                            srcSet="https://imagedelivery.net/jZ4zarr81i7OIuT1JQY5_A/lp/next/tokyo/gallery1-sp.jpg/public"
                            media="(max-width: 768px)"
                          />
                          <img
                            src="https://imagedelivery.net/jZ4zarr81i7OIuT1JQY5_A/lp/next/tokyo/gallery1.jpg/public"
                            alt=""
                            loading="lazy"
                          />
                        </picture>
                        <picture
                          data-scroll="normal"
                          data-column={1}
                          style={{
                            opacity: 1,
                            transform: "translate(0px, 0px)",
                          }}
                        >
                          <source
                            srcSet="https://imagedelivery.net/jZ4zarr81i7OIuT1JQY5_A/lp/next/tokyo/gallery2-sp.jpg/public"
                            media="(max-width: 768px)"
                          />
                          <img
                            src="https://imagedelivery.net/jZ4zarr81i7OIuT1JQY5_A/lp/next/tokyo/gallery2.jpg/public"
                            alt=""
                            loading="lazy"
                          />
                        </picture>
                        <picture
                          data-scroll="normal"
                          data-column={2}
                          style={{
                            opacity: 1,
                            transform: "translate(0px, 0px)",
                          }}
                        >
                          <source
                            srcSet="https://imagedelivery.net/jZ4zarr81i7OIuT1JQY5_A/lp/next/tokyo/gallery3-sp.jpg/public"
                            media="(max-width: 768px)"
                          />
                          <img
                            src="https://imagedelivery.net/jZ4zarr81i7OIuT1JQY5_A/lp/next/tokyo/gallery3.jpg/public"
                            alt=""
                            loading="lazy"
                          />
                        </picture>
                        <picture
                          data-scroll="normal"
                          data-column={2}
                          style={{
                            opacity: 1,
                            transform: "translate(0px, 0px)",
                          }}
                        >
                          <source
                            srcSet="https://imagedelivery.net/jZ4zarr81i7OIuT1JQY5_A/lp/next/tokyo/gallery4-sp.jpg/public"
                            media="(max-width: 768px)"
                          />
                          <img
                            src="https://imagedelivery.net/jZ4zarr81i7OIuT1JQY5_A/lp/next/tokyo/gallery4.jpg/public"
                            alt=""
                            loading="lazy"
                          />
                        </picture>
                        <picture
                          data-scroll="normal"
                          data-column={1}
                          style={{
                            opacity: 1,
                            transform: "translate(0px, 0px)",
                          }}
                        >
                          <source
                            srcSet="https://imagedelivery.net/jZ4zarr81i7OIuT1JQY5_A/lp/next/tokyo/gallery5-sp.jpg/public"
                            media="(max-width: 768px)"
                          />
                          <img
                            src="https://imagedelivery.net/jZ4zarr81i7OIuT1JQY5_A/lp/next/tokyo/gallery5.jpg/public"
                            alt=""
                            loading="lazy"
                          />
                        </picture>
                        <picture
                          data-scroll="normal"
                          data-column={2}
                          style={{
                            opacity: 1,
                            transform: "translate(0px, 0px)",
                          }}
                        >
                          <source
                            srcSet="https://imagedelivery.net/jZ4zarr81i7OIuT1JQY5_A/lp/next/tokyo/gallery6-sp.jpg/public"
                            media="(max-width: 768px)"
                          />
                          <img
                            src="https://imagedelivery.net/jZ4zarr81i7OIuT1JQY5_A/lp/next/tokyo/gallery6.jpg/public"
                            alt=""
                            loading="lazy"
                          />
                        </picture>
                        <picture
                          data-scroll="normal"
                          data-column={2}
                          style={{
                            opacity: 1,
                            transform: "translate(0px, 0px)",
                          }}
                        >
                          <source
                            srcSet="https://imagedelivery.net/jZ4zarr81i7OIuT1JQY5_A/lp/next/tokyo/gallery7-sp.jpg/public"
                            media="(max-width: 768px)"
                          />
                          <img
                            src="https://imagedelivery.net/jZ4zarr81i7OIuT1JQY5_A/lp/next/tokyo/gallery7.jpg/public"
                            alt=""
                            loading="lazy"
                          />
                        </picture>
                        <picture
                          data-scroll="normal"
                          data-column={2}
                          style={{
                            opacity: 1,
                            transform: "translate(0px, 0px)",
                          }}
                        >
                          <source
                            srcSet="https://imagedelivery.net/jZ4zarr81i7OIuT1JQY5_A/lp/next/tokyo/gallery8-sp.jpg/public"
                            media="(max-width: 768px)"
                          />
                          <img
                            src="https://imagedelivery.net/jZ4zarr81i7OIuT1JQY5_A/lp/next/tokyo/gallery8.jpg/public"
                            alt=""
                            loading="lazy"
                          />
                        </picture>
                        <picture
                          data-scroll="normal"
                          data-column={2}
                          style={{
                            opacity: 1,
                            transform: "translate(0px, 0px)",
                          }}
                        >
                          <source
                            srcSet="https://imagedelivery.net/jZ4zarr81i7OIuT1JQY5_A/lp/next/tokyo/gallery9-sp.jpg/public"
                            media="(max-width: 768px)"
                          />
                          <img
                            src="https://imagedelivery.net/jZ4zarr81i7OIuT1JQY5_A/lp/next/tokyo/gallery9.jpg/public"
                            alt=""
                            loading="lazy"
                          />
                        </picture>
                        <picture
                          data-scroll="normal"
                          data-column={2}
                          style={{
                            opacity: 1,
                            transform: "translate(0px, 0px)",
                          }}
                        >
                          <source
                            srcSet="https://imagedelivery.net/jZ4zarr81i7OIuT1JQY5_A/lp/next/tokyo/gallery10-sp.jpg/public"
                            media="(max-width: 768px)"
                          />
                          <img
                            src="https://imagedelivery.net/jZ4zarr81i7OIuT1JQY5_A/lp/next/tokyo/gallery10.jpg/public"
                            alt=""
                            loading="lazy"
                          />
                        </picture>
                        <picture
                          data-scroll="normal"
                          data-column={2}
                          style={{
                            opacity: 1,
                            transform: "translate(0px, 0px)",
                          }}
                        >
                          <source
                            srcSet="https://imagedelivery.net/jZ4zarr81i7OIuT1JQY5_A/lp/next/tokyo/gallery11-sp.jpg/public"
                            media="(max-width: 768px)"
                          />
                          <img
                            src="https://imagedelivery.net/jZ4zarr81i7OIuT1JQY5_A/lp/next/tokyo/gallery11.jpg/public"
                            alt=""
                            loading="lazy"
                          />
                        </picture>
                        <picture
                          data-scroll="normal"
                          data-column={2}
                          style={{
                            opacity: 1,
                            transform: "translate(0px, 0px)",
                          }}
                        >
                          <source
                            srcSet="https://imagedelivery.net/jZ4zarr81i7OIuT1JQY5_A/lp/next/tokyo/gallery12-sp.jpg/public"
                            media="(max-width: 768px)"
                          />
                          <img
                            src="https://imagedelivery.net/jZ4zarr81i7OIuT1JQY5_A/lp/next/tokyo/gallery12.jpg/public"
                            alt=""
                            loading="lazy"
                          />
                        </picture>
                        <picture
                          data-scroll="normal"
                          data-column={2}
                          style={{
                            opacity: 1,
                            transform: "translate(0px, 0px)",
                          }}
                        >
                          <source
                            srcSet="https://imagedelivery.net/jZ4zarr81i7OIuT1JQY5_A/lp/next/tokyo/gallery13-sp.jpg/public"
                            media="(max-width: 768px)"
                          />
                          <img
                            src="https://imagedelivery.net/jZ4zarr81i7OIuT1JQY5_A/lp/next/tokyo/gallery13.jpg/public"
                            alt=""
                            loading="lazy"
                          />
                        </picture>
                        <picture
                          data-scroll="normal"
                          data-column={1}
                          style={{
                            opacity: 1,
                            transform: "translate(0px, 0px)",
                          }}
                        >
                          <source
                            srcSet="https://imagedelivery.net/jZ4zarr81i7OIuT1JQY5_A/lp/next/tokyo/gallery14-sp.jpg/public"
                            media="(max-width: 768px)"
                          />
                          <img
                            src="https://imagedelivery.net/jZ4zarr81i7OIuT1JQY5_A/lp/next/tokyo/gallery14.jpg/public"
                            alt=""
                            loading="lazy"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          onClick={() => {
            onClose();
          }}
          className="js-close-overlay close-overlay"
          aria-label="close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 26 26"
            fill="none"
            role="img"
            className="icon fill-current"
          >
            <path
              d="M8.28596 6.51819C7.7978 6.03003 7.00634 6.03003 6.51819 6.51819C6.03003 7.00634 6.03003 7.7978 6.51819 8.28596L11.2322 13L6.51819 17.714C6.03003 18.2022 6.03003 18.9937 6.51819 19.4818C7.00634 19.97 7.7978 19.97 8.28596 19.4818L13 14.7678L17.714 19.4818C18.2022 19.97 18.9937 19.97 19.4818 19.4818C19.97 18.9937 19.97 18.2022 19.4818 17.714L14.7678 13L19.4818 8.28596C19.97 7.7978 19.97 7.00634 19.4818 6.51819C18.9937 6.03003 18.2022 6.03003 17.714 6.51819L13 11.2322L8.28596 6.51819Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
      <div id="shot-modals-app" className="js-shot-modal-content">
        {/**/} {/**/} {/**/}
      </div>
      <div id="good-modals-app"></div>
      <div id="work-availability-modal-app"></div>
    </>
  );
};

export default ModalProject;
