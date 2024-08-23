import axios from "axios";
import { useEffect, useState } from "react";
// import { ApiClient } from "../../api/ApiClient";

function UserList() {
  const [items, setItems] = useState([]); // State để lưu trữ danh sách các phần tử
  // const getUsers = () => {
  //   new ApiClient().user.getUsers().then((res) => {
  //     // setItems(res?.data);
  //     console.log(res);
  //   });
  // };
  const getDataUsers = () => {
    axios.get("files/users.json").then((res) => {
      setItems(res.data);
    });
  };

  useEffect(() => {
    getDataUsers();
    // getUsers();
  }, []);
  return (
    <>
      <main className="home-page">
        <section className="hero">
          <div className="home-container">
            <div className="home-badge home-badge--color-cycle">
              <a data-track-cta="Get started">
                Hơn 1.000 dự án đã triển khai và hoàn thành!
              </a>
            </div>
            <h1 className="hero__heading">
              Điểm đến của mọi người về thiết kế
            </h1>
            <div className="home-type-body-large font-weight-500">
              Một trong những đơn vị đầu tiên đi đầu về phòng thiết kế thuê
              ngoài.
            </div>
            <a
              className="margin-t-32 btn2 btn2--large"
              href="https://zalo.me/0962918804"
              rel="nofollow"
              target="_blank"
            >
              NHẬN BẢNG GIÁ
            </a>
          </div>
          <div
            className="hero-marquee"
            style={{ "--card-count": items.length } as React.CSSProperties}
          >
            <div className="hero-marquee__track">
              <div className="hero-marquee__grid">
                {items.map((item: any, index: any) => (
                  <div
                    key={index}
                    className="hero-marquee-item lazyloaded"
                    data-lazy-parent
                    // id={`hero-marquee-item-${index}`}
                  >
                    <div className="hero-marquee-item__info">
                      <div className="hero-marquee-item__name">{item.name}</div>
                      <div className="hero-marquee-item__title">
                        {item.title}
                      </div>
                      <ul className="hero-marquee-item__tags">
                        {item.tags.map((tag: string) => (
                          <li key={tag} className="hero-marquee-item__tag">
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="hero-marquee-item__media">
                      <img
                        alt="Lilla Bardenova"
                        width={273}
                        height={340}
                        loading="lazy"
                        className="lazypreload lazyautosizes lazyloaded"
                        data-sizes="auto"
                        data-aspectratio="0.8029411764705883"
                        data-srcset={item.avatar}
                        sizes="273px"
                        srcSet={item.avatar}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default UserList;
