import React from "react";

function Step() {
  const data = [
    {
      name: "Gửi thông tin",
      desc: "Which home inspires you the most? An expansive villa with sweeping sea views? A modernist cabin nestled deep in the woods? Browse for your perfect home, or let us assist in your searc",
      img: "/images/public 3.avif",
    },
    {
      name: "THIẾT KẾ CONCEPT",
      img: "/images/public4.avif",
      desc: "Which home inspires you the most? An expansive villa with sweeping sea views? A modernist cabin nestled deep in the woods? Browse for your perfect home, or let us assist in your searc",
    },
    {
      name: "DIỄN HỌA PHỐI CẢNH 3D",
      img: "/images/public5.avif",
      desc: "Which home inspires you the most? An expansive villa with sweeping sea views? A modernist cabin nestled deep in the woods? Browse for your perfect home, or let us assist in your searc",
    },
    {
      name: "TRIỂN KHAI HỒ SƠ KỸ THUẬT",
      img: "/images/public.avif",
      desc: "Which home inspires you the most? An expansive villa with sweeping sea views? A modernist cabin nestled deep in the woods? Browse for your perfect home, or let us assist in your searc",
    },
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
                <p className="sc-af8ca28b-10 hsqlfX">{item.desc}</p>
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
