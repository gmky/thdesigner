function Step() {
  const data = [
    {
      name: "GỬI THÔNG TIN",
      desc: "Khách hàng gửi thông tin cho 10+ bao gồm kích thước hiện trạng công trình , nhiệm vụ thiết kế và tạm ứng 50% số tiền theo khối lượng triển khai.",
      img: "/images/step_1.jpg",
    },
    {
      name: "THIẾT KẾ CONCEPT",
      img: "/images/step_2.jpg",
      desc: "10+ tiếp nhận thông tin , lên concept theo thông tin tiếp nhận và gửi phối cảnh 3D dạng concept cho khách hàng đúng thời gian thỏa thuận.",
    },
    {
      name: "DIỄN HỌA PHỐI CẢNH 3D",
      img: "/images/step_3.jpg",
      desc: "10+ triển khai render xuất ảnh tĩnh hoặc 360 ( nếu khách hàng yêu đăng ký gói 360 ) và khách hàng hoàn thành 50% số thiền còn lại theo khối lượng triển khai.",
    },
    // {
    //   name: "TRIỂN KHAI HỒ SƠ KỸ THUẬT",
    //   img: "/images/step_4.jpg",
    //   desc: `10+ triển khai hồ sơ kỹ thuật thi công theo yêu cầu của khách hàng. <br/>
    //          <strong>Lưu ý: 10+ hỗ trợ khách hàng chỉnh sửa để hoàn thiện bản thiết kế, nếu khối lượng chỉnh sửa quá 70% thì 2 bên sẽ thỏa thuận để tính thêm chi phí phát sinh.</strong>`,
    // },

    {
      name: "TRIỂN KHAI HỒ SƠ KỸ THUẬT",
      img: "/images/step_4.jpg",
      desc: "10+ triển khai hồ sơ kỹ thuật thi công theo yêu cầu của khách hàng.",
    },
    // {
    //   name: "TRIỂN KHAI HỒ SƠ KỸ THUẬT",
    //   img: "/images/step_4.jpg",
    //   desc: "Which home inspires you the most? An expansive villa with sweeping sea views? A modernist cabin nestled deep in the woods? Browse for your perfect home, or let us assist in your searc",
    // },
  ];
  return (
    <section className="sc-af8ca28b-0 Esouy">
      <div
        data-scroll="normal"
        className="sc-af8ca28b-1 jeqrpA"
        style={{ opacity: 1, transform: "translate(0px, 0px)" }}
      >
        <h2 className="sc-af8ca28b-2 ihAgmt">Quy trình làm việc</h2>
        <div className="sc-af8ca28b-3 hRMiZS">
          {data.map((item: any, index: any) => (
            <section
              data-scroll="normal"
              className="sc-af8ca28b-4 kfeuou"
              style={{ opacity: 1, transform: "translate(0px, 0px)" }}
            >
              <div className="sc-af8ca28b-6 jxvGEP">
                <span className="sc-af8ca28b-5 hckztZ">STEP {index + 1}</span>
                <h3 className="sc-af8ca28b-9 juMPAa">{item.name}</h3>
                <p
                  className="sc-af8ca28b-10 hsqlfX"
                  dangerouslySetInnerHTML={{ __html: item.desc }}
                />
              </div>
              <div className="sc-af8ca28b-7 ihgJMe">
                <img
                  src={item.img}
                  alt=""
                  loading="lazy"
                  className="sc-af8ca28b-8 icIqTE"
                />
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Step;
