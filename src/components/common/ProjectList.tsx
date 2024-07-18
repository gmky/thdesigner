import React, { useEffect, useState } from "react";
import ModalProject from "./modal/ModalProject";

function ProjectList() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add("noscroll");
    } else {
      document.body.classList.remove("noscroll");
    }

    // Optional: Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove("noscroll");
    };
  }, [open]); // Dependency array includes 'open'

  const handleCloseModal = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="home-feed">
        <h2 className="home-feed__heading home-container">
          Explore inspiring designs
        </h2>
        <ol className="js-thumbnail-grid shots-grid group dribbbles  container-fluid">
          {[...Array(12)].map((item: any, index: any) => (
            <li
              onClick={() => {
                setOpen(true);
              }}
              id="screenshot-24499910"
              data-thumbnail-id={24499910}
              className="shot-thumbnail js-thumbnail shot-thumbnail-container    "
              data-ad-data
              data-boost-id
              data-is-boost-fallback
              data-request-source
              data-track-location="Shot"
              data-search-uuid="58bb152d-049f-416b-be2b-5a47af2edb51"
            >
              <div className="js-thumbnail-base shot-thumbnail-base disabled-shot-section dribbble-shot dribbble  ">
                <figure className="js-thumbnail-placeholder shot-thumbnail-placeholder">
                  <noscript>
                    &lt;img
                    src="https://cdn.dribbble.com/userupload/15535224/file/original-962243af7048543127211e8b4f8f00e1.png?resize=400x0"
                    alt="Dauernd - Creative Design Agency Responsive Page
                    Website agency clean creative agency design designer landing
                    page mobile website modern portfolio responsive responsive
                    layout ui ux web web design website website design"&gt;
                  </noscript>
                  <img
                    alt="City Adventure andres lozano buildings character city digital drawn folioart illustration line search find urban wheres wally"
                    data-srcset="https://cdn.dribbble.com/userupload/15547574/file/original-b1b3c7b745648abb3bbb808373318b0b.jpg?crop=0x220-1404x1273&amp;resize=320x240&amp;vertical=center 320w, https://cdn.dribbble.com/userupload/15547574/file/original-b1b3c7b745648abb3bbb808373318b0b.jpg?crop=0x220-1404x1273&amp;resize=400x300&amp;vertical=center 400w, https://cdn.dribbble.com/userupload/15547574/file/original-b1b3c7b745648abb3bbb808373318b0b.jpg?crop=0x220-1404x1273&amp;resize=450x338&amp;vertical=center 450w, https://cdn.dribbble.com/userupload/15547574/file/original-b1b3c7b745648abb3bbb808373318b0b.jpg?crop=0x220-1404x1273&amp;resize=640x480&amp;vertical=center 640w, https://cdn.dribbble.com/userupload/15547574/file/original-b1b3c7b745648abb3bbb808373318b0b.jpg?crop=0x220-1404x1273&amp;resize=700x525&amp;vertical=center 700w, https://cdn.dribbble.com/userupload/15547574/file/original-b1b3c7b745648abb3bbb808373318b0b.jpg?crop=0x220-1404x1273&amp;resize=800x600&amp;vertical=center 800w, https://cdn.dribbble.com/userupload/15547574/file/original-b1b3c7b745648abb3bbb808373318b0b.jpg?crop=0x220-1404x1273&amp;resize=840x630&amp;vertical=center 840w, https://cdn.dribbble.com/userupload/15547574/file/original-b1b3c7b745648abb3bbb808373318b0b.jpg?crop=0x220-1404x1273&amp;resize=1000x750&amp;vertical=center 1000w, https://cdn.dribbble.com/userupload/15547574/file/original-b1b3c7b745648abb3bbb808373318b0b.jpg?crop=0x220-1404x1273&amp;resize=1200x900&amp;vertical=center 1200w"
                    data-src="https://cdn.dribbble.com/userupload/15547574/file/original-b1b3c7b745648abb3bbb808373318b0b.jpg?crop=0x220-1404x1273&amp;resize=400x300&amp;vertical=center"
                    data-sizes="auto"
                    className="lazyautosizes ls-is-cached lazyloaded"
                    src="https://cdn.dribbble.com/userupload/15547574/file/original-b1b3c7b745648abb3bbb808373318b0b.jpg?crop=0x220-1404x1273&amp;resize=400x300&amp;vertical=center"
                    sizes="413px"
                    srcSet="https://cdn.dribbble.com/userupload/15547574/file/original-b1b3c7b745648abb3bbb808373318b0b.jpg?crop=0x220-1404x1273&amp;resize=320x240&amp;vertical=center 320w, https://cdn.dribbble.com/userupload/15547574/file/original-b1b3c7b745648abb3bbb808373318b0b.jpg?crop=0x220-1404x1273&amp;resize=400x300&amp;vertical=center 400w, https://cdn.dribbble.com/userupload/15547574/file/original-b1b3c7b745648abb3bbb808373318b0b.jpg?crop=0x220-1404x1273&amp;resize=450x338&amp;vertical=center 450w, https://cdn.dribbble.com/userupload/15547574/file/original-b1b3c7b745648abb3bbb808373318b0b.jpg?crop=0x220-1404x1273&amp;resize=640x480&amp;vertical=center 640w, https://cdn.dribbble.com/userupload/15547574/file/original-b1b3c7b745648abb3bbb808373318b0b.jpg?crop=0x220-1404x1273&amp;resize=700x525&amp;vertical=center 700w, https://cdn.dribbble.com/userupload/15547574/file/original-b1b3c7b745648abb3bbb808373318b0b.jpg?crop=0x220-1404x1273&amp;resize=800x600&amp;vertical=center 800w, https://cdn.dribbble.com/userupload/15547574/file/original-b1b3c7b745648abb3bbb808373318b0b.jpg?crop=0x220-1404x1273&amp;resize=840x630&amp;vertical=center 840w, https://cdn.dribbble.com/userupload/15547574/file/original-b1b3c7b745648abb3bbb808373318b0b.jpg?crop=0x220-1404x1273&amp;resize=1000x750&amp;vertical=center 1000w, https://cdn.dribbble.com/userupload/15547574/file/original-b1b3c7b745648abb3bbb808373318b0b.jpg?crop=0x220-1404x1273&amp;resize=1200x900&amp;vertical=center 1200w"
                  />
                </figure>
                <div className="shot-thumbnail-overlay">
                  <div className="shot-thumbnail-overlay-content">
                    <div className="shot-title">
                      Dauernd - Creative Design Agency Responsive Page Website
                    </div>
                  </div>
                </div>
              </div>
              <div className="shot-details-container js-shot-details-container">
                <div className="user-information" data-uuid-passthrough>
                  <a className="hoverable url" rel="contact">
                    <img
                      className="photo ls-is-cached lazyloaded"
                      alt="One Week Wonders"
                      width={24}
                      height={24}
                      data-src="https://cdn.dribbble.com/users/1667332/avatars/small/edd45777913e5de4434a1a1b812c76cf.png?1566878129"
                      src="https://cdn.dribbble.com/users/1667332/avatars/small/edd45777913e5de4434a1a1b812c76cf.png?1566878129"
                    />
                    <span className="display-name">One Week Wonders</span>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ol>
        <div id="boosted-shots-app" />
        <a
          className="home-feed__cta btn2 btn2--secondary btn2--large"
          href="/shots/popular"
        >
          Browse more inspiration
        </a>
      </div>

      <ModalProject onClose={handleCloseModal} isOpen={open} />
    </>
  );
}

export default ProjectList;
