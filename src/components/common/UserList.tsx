import { useEffect, useState } from "react";

function UserList() {
  const [items, setItems] = useState([]); // State để lưu trữ danh sách các phần tử

  useEffect(() => {
    // Mô phỏng danh sách các mục trong carousel
    const mockItems: any = [
      {
        name: "Chris Owens",
        title: "Creative Director",
        tags: ["Illustration", "Mobile", "UI"],
      },
      {
        name: "Elif Kameşoğlu",
        title: "Brand Designer",
        tags: ["Brand", "Illustration", "Web"],
      },
      {
        name: "Helen Tran",
        title: "Lead Product Designer",
        tags: ["Leadership", "Product", "UX"],
      },
      {
        name: "Helen Tran",
        title: "Lead Product Designer",
        tags: ["Leadership", "Product", "UX"],
      },
      {
        name: "Helen Tran",
        title: "Lead Product Designer",
        tags: ["Leadership", "Product", "UX"],
      },
      {
        name: "Helen Tran",
        title: "Lead Product Designer",
        tags: ["Leadership", "Product", "UX"],
      },
      {
        name: "Helen Tran",
        title: "Lead Product Designer",
        tags: ["Leadership", "Product", "UX"],
      },
      {
        name: "Helen Tran",
        title: "Lead Product Designer",
        tags: ["Leadership", "Product", "UX"],
      },
      {
        name: "Helen Tran",
        title: "Lead Product Designer",
        tags: ["Leadership", "Product", "UX"],
      },
      {
        name: "Helen Tran",
        title: "Lead Product Designer",
        tags: ["Leadership", "Product", "UX"],
      },
      {
        name: "Helen Tran",
        title: "Lead Product Designer",
        tags: ["Leadership", "Product", "UX"],
      },
      {
        name: "Helen Tran",
        title: "Lead Product Designer",
        tags: ["Leadership", "Product", "UX"],
      },
      // Thêm các mục khác nếu cần
    ];

    setItems(mockItems); // Cập nhật danh sách các mục vào state
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
              Lấy cảm hứng từ tác phẩm của hàng triệu nhà thiết kế và đại lý
              được xếp hạng hàng đầu trên khắp thế giới.
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
                        <li className="hero-marquee-item__tag">Brand</li>
                        <li className="hero-marquee-item__tag">Illustration</li>
                        <li className="hero-marquee-item__tag">Web</li>
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
                        data-srcset="https://cdn.dribbble.com/uploads/47174/original/4f02d72fe701b15b2168a4954332427f.png?1685645150&format=webp&resize=320x399&vertical=center 320w, https://cdn.dribbble.com/uploads/47174/original/4f02d72fe701b15b2168a4954332427f.png?1685645150&format=webp&resize=400x498&vertical=center 400w, https://cdn.dribbble.com/uploads/47174/original/4f02d72fe701b15b2168a4954332427f.png?1685645150&format=webp&resize=640x797&vertical=center 640w, https://cdn.dribbble.com/uploads/47174/original/4f02d72fe701b15b2168a4954332427f.png?1685645150&format=webp&resize=752x937&vertical=center 752w, https://cdn.dribbble.com/uploads/47174/original/4f02d72fe701b15b2168a4954332427f.png?1685645150&format=webp&resize=1024x1275&vertical=center 1024w, https://cdn.dribbble.com/uploads/47174/original/4f02d72fe701b15b2168a4954332427f.png?1685645150&format=webp&resize=1200x1495&vertical=center 1200w, https://cdn.dribbble.com/uploads/47174/original/4f02d72fe701b15b2168a4954332427f.png?1685645150&format=webp&resize=1504x1873&vertical=center 1504w, https://cdn.dribbble.com/uploads/47174/original/4f02d72fe701b15b2168a4954332427f.png?1685645150&format=webp&resize=2048x2551&vertical=center 2048w, https://cdn.dribbble.com/uploads/47174/original/4f02d72fe701b15b2168a4954332427f.png?1685645150&format=webp&resize=273x340&vertical=center 273w, https://cdn.dribbble.com/uploads/47174/original/4f02d72fe701b15b2168a4954332427f.png?1685645150&format=webp&resize=546x680&vertical=center 546w"
                        sizes="273px"
                        srcSet="https://cdn.dribbble.com/uploads/47174/original/4f02d72fe701b15b2168a4954332427f.png?1685645150&format=webp&resize=320x399&vertical=center 320w, https://cdn.dribbble.com/uploads/47174/original/4f02d72fe701b15b2168a4954332427f.png?1685645150&format=webp&resize=400x498&vertical=center 400w, https://cdn.dribbble.com/uploads/47174/original/4f02d72fe701b15b2168a4954332427f.png?1685645150&format=webp&resize=640x797&vertical=center 640w, https://cdn.dribbble.com/uploads/47174/original/4f02d72fe701b15b2168a4954332427f.png?1685645150&format=webp&resize=752x937&vertical=center 752w, https://cdn.dribbble.com/uploads/47174/original/4f02d72fe701b15b2168a4954332427f.png?1685645150&format=webp&resize=1024x1275&vertical=center 1024w, https://cdn.dribbble.com/uploads/47174/original/4f02d72fe701b15b2168a4954332427f.png?1685645150&format=webp&resize=1200x1495&vertical=center 1200w, https://cdn.dribbble.com/uploads/47174/original/4f02d72fe701b15b2168a4954332427f.png?1685645150&format=webp&resize=1504x1873&vertical=center 1504w, https://cdn.dribbble.com/uploads/47174/original/4f02d72fe701b15b2168a4954332427f.png?1685645150&format=webp&resize=2048x2551&vertical=center 2048w, https://cdn.dribbble.com/uploads/47174/original/4f02d72fe701b15b2168a4954332427f.png?1685645150&format=webp&resize=273x340&vertical=center 273w, https://cdn.dribbble.com/uploads/47174/original/4f02d72fe701b15b2168a4954332427f.png?1685645150&format=webp&resize=546x680&vertical=center 546w"
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
