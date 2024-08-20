import { useEffect, useState } from "react";
import ModalProject from "../common/modal/ModalProject";
import { ApiClient } from "../../api";

function ProjectList() {
  const [open, setOpen] = useState(false);
  const [dataProducts, setDataProducts] = useState<any>([]);
  const [visibleItems, setVisibleItems] = useState(8);
  const getProducts = () => {
    new ApiClient().product.getProducts().then(res => {
      setDataProducts(res?.data)
    })
  }

  useEffect(() => {
    getProducts();
  }, [])

  useEffect(() => {

    if (open) {
      document.body.classList.add("noscroll");
    } else {
      document.body.classList.remove("noscroll");
    }
    return () => {
      document.body.classList.remove("noscroll");
    };
  }, [open]);

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleShowMore = () => {
    setVisibleItems(prev => {
      const remainingItems = dataProducts.length - prev;
      if (remainingItems <= 4) {
        return prev + remainingItems;
      } else {
        return prev + 4;
      }
    });
  };
  return (
    <>
      <div className="home-feed">
        <h2 className="home-feed__heading home-container">
          Khám phá những thiết kế đầy cảm hứng
        </h2>
        <ol className="js-thumbnail-grid shots-grid group dribbbles  container-fluid">
          {dataProducts.slice(0, visibleItems)?.map((item: any, index: number) => (
            <li
              key={index}
              onClick={() => {
                setOpen(true);
              }}
              className="shot-thumbnail js-thumbnail shot-thumbnail-container"
            >
              <div className="js-thumbnail-base shot-thumbnail-base disabled-shot-section dribbble-shot dribbble  ">
                <figure className="js-thumbnail-placeholder shot-thumbnail-placeholder">
                  <img
                    alt={item.name}
                    data-sizes="auto"
                    className="lazyautosizes ls-is-cached lazyloaded"
                    src={item?.thumbnail}
                    sizes="413px"
                  />
                </figure>
                {/* <div className="shot-thumbnail-overlay">
                  <div className="shot-thumbnail-overlay-content">
                    <div className="shot-title">
                      Dauernd - Creative Design Agency Responsive Page Website
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="shot-details-container js-shot-details-container">
                <div className="user-information">
                  <a className="hoverable url" rel="contact">
                    <img
                      className="photo ls-is-cached lazyloaded"
                      alt={item.name}
                      width={24}
                      height={24}
                      src="https://cdn.dribbble.com/users/1667332/avatars/small/edd45777913e5de4434a1a1b812c76cf.png?1566878129"
                    />
                    <span className="display-name">{item.name}</span>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ol>
        {visibleItems < dataProducts?.length && (
          <a
            className="home-feed__cta btn2 btn2--secondary btn2--large"
            onClick={handleShowMore}
          >
            Xem thêm các dự án
          </a>
        )}
      </div>

      <ModalProject onClose={handleCloseModal} isOpen={open} />
    </>
  );
}

export default ProjectList;
