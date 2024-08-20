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
              Diễn Họa 3D Kiến Trúc là công cụ mạnh mẽ giúp biến ý tưởng thiết
              kế thành những hình ảnh sống động và chân thực. Với công nghệ 3D
              tiên tiến, chúng tôi tạo ra các mô hình kiến trúc chi tiết và sắc
              nét, giúp bạn dễ dàng hình dung không gian và cấu trúc của công
              trình trước khi bắt đầu xây dựng. Dù là nhà ở, văn phòng, hay công
              trình công cộng, dịch vụ của chúng tôi sẽ giúp bạn thể hiện tầm
              nhìn và phong cách thiết kế một cách hoàn hảo.
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
              Diễn Họa 3D Nội Thất mang đến cái nhìn chân thực và sinh động về
              không gian sống và làm việc của bạn. Chúng tôi sử dụng công nghệ
              3D tiên tiến để tái hiện chi tiết từng góc cạnh của nội thất, từ
              màu sắc, chất liệu cho đến ánh sáng và bố cục. Dịch vụ này giúp
              bạn dễ dàng trải nghiệm và điều chỉnh thiết kế nội thất theo ý
              muốn trước khi thực hiện, đảm bảo mỗi chi tiết đều phù hợp với
              phong cách và nhu cầu của bạn.
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
              Triển Khai 2D Kỹ Thuật là bước quan trọng trong quá trình hiện
              thực hóa ý tưởng thiết kế thành bản vẽ chi tiết và chính xác.
              Chúng tôi cung cấp các bản vẽ 2D kỹ thuật, bao gồm các mặt bằng,
              mặt cắt và chi tiết kỹ thuật cần thiết cho quá trình thi công. Với
              độ chính xác cao và tuân thủ chặt chẽ các tiêu chuẩn xây dựng,
              dịch vụ của chúng tôi đảm bảo rằng mọi khía cạnh của dự án đều
              được thể hiện rõ ràng, giúp dễ dàng quản lý và thực hiện công
              việc.
            </p>
          </div>
        </section>
      </section>
    </>
  );
}

export default OperatingModel;
