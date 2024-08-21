import { useEffect, useState } from "react";
import ModalProject from "../common/modal/ModalProject";
import { ApiClient } from "../../api";

function ProjectList() {
  const [open, setOpen] = useState(false);
  const [dataProducts, setDataProducts] = useState<any>([]);
  const [visibleItems, setVisibleItems] = useState(8);
  const [dataProductById, setDataProductById] = useState<any>(null);
  const getProducts = () => {
    new ApiClient().product.getProducts().then((res) => {
      setDataProducts(res?.data);
    });
  };

  const getProductById = (id: number) => {
    new ApiClient().product.getProducts1(id).then((res) => {
      setDataProductById(res);
      console.log(res);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

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

  const handleOpenModal = (id: number) => {
    getProductById(id);
    setOpen(true);
  };

  const handleShowMore = () => {
    setVisibleItems((prev) => {
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
          {dataProducts
            .slice(0, visibleItems)
            ?.map((item: any, index: number) => (
              <li
                key={index}
                onClick={() => handleOpenModal(item.id)}
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
                </div>
                <div className="shot-details-container js-shot-details-container">
                  <div className="user-information">
                    <a className="hoverable url" rel="contact">
                      <img
                        className="photo ls-is-cached lazyloaded"
                        alt={item.name}
                        width={24}
                        height={24}
                        src={item?.author?.avatar}
                      />
                      <span className="display-name">{item.name}</span>
                    </a>
                  </div>
                </div>
              </li>
            ))}
        </ol>
        <a
          className="home-feed__cta btn2 btn2--secondary btn2--large"
          onClick={handleShowMore}
        >
          Xem thêm các dự án
        </a>
      </div>

      <ModalProject
        onClose={handleCloseModal}
        isOpen={open}
        data={dataProductById}
      />
    </>
  );
}

export default ProjectList;
