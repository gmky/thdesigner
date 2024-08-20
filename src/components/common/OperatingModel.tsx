function OperatingModel() {
  const data = [
    {
      name: 'DIỄN HỌA 3D KIẾN TRÚC',
      desc: 'Diễn Họa 3D Kiến Trúc là công cụ mạnh mẽ giúp biến ý tưởng thiết kế thành những hình ảnh sống động và chân thực. Với công nghệ 3D tiên tiến, chúng tôi tạo ra các mô hình kiến trúc chi tiết và sắc nét, giúp bạn dễ dàng hình dung không gian và cấu trúc của công trình trước khi bắt đầu xây dựng. Dù là nhà ở, văn phòng, hay công trình công cộng, dịch vụ của chúng tôi sẽ giúp bạn thể hiện tầm nhìn và phong cách thiết kế một cách hoàn hảo.',
      img: '3d_kien_truc.jpg'
    },
    {
      name: 'DIỄN HỌA 3D NỘI THẤT',
      desc: 'Diễn Họa 3D Nội Thất mang đến cái nhìn chân thực và sinh động về không gian sống và làm việc của bạn.Chúng tôi sử dụng công nghệ 3D tiên tiến để tái hiện chi tiết từng góc cạnh của nội thất, từ màu sắc, chất liệu cho đến ánh sáng và bố cục. Dịch vụ này giúp bạn dễ dàng trải nghiệm và điều chỉnh thiết kế nội thất theo ý muốn trước khi thực hiện, đảm bảo mỗi chi tiết đều phù hợp với phong cách và nhu cầu của bạn.',
      img: '3d_noi_that.jpg'
    },
    {
      name: 'TRIỂN KHAI 2D KỸ THUẬT',
      desc: 'Triển Khai 2D Kỹ Thuật là bước quan trọng trong quá trình hiện thực hóa ý tưởng thiết kế thành bản vẽ chi tiết và chính xác. Chúng tôi cung cấp các bản vẽ 2D kỹ thuật, bao gồm các mặt bằng, mặt cắt và chi tiết kỹ thuật cần thiết cho quá trình thi công. Với độ chính xác cao và tuân thủ chặt chẽ các tiêu chuẩn xây dựng, dịch vụ của chúng tôi đảm bảo rằng mọi khía cạnh của dự án đều được thể hiện rõ ràng, giúp dễ dàng quản lý và thực hiện công việc.',
      img: '2d.jpg'
    },
  ]
  return (
    <>
      <section className="sc-2251413b-0 bpmCvk">
        <h2 className="sc-af8ca28b-2 ihAgmt">Năng lực của chúng tôi</h2>
        {
          data?.map((item: any, index: number) => (
            <section
              key={index}
              data-scroll="normal"
              className={`sc-2251413b-1 ${index % 2 === 0 ? 'iMIGZJ' : 'gYPWPE'}`}
              style={{ opacity: 1, transform: "translate(0px, 0px)" }}
            >
              <img
                src={`/images/${item.img}`}
                loading="lazy"
                className="sc-2251413b-2 fjRubF"
              />
              <div>
                <h3 className="sc-2251413b-3 fTIImM">{item.name}</h3>
                <p className="sc-2251413b-4 fFhZYb">
                  {item.desc}
                </p>
              </div>
            </section>
          ))
        }
      </section>
    </>
  );
}

export default OperatingModel;
