import React, { useState } from "react";

function Sale() {
  const [data, setData] = useState([
    {
      image:
        "https://stylo.pk/cdn/shop/products/FR511415_3_720x.jpg?v=1681565040",
      title1: "-31%",
      title2: "Golden Formal Sandal FR4881",
      price1: "Rs3,500",
      price2: "Rs2,415",
    },
    {
      image:
        "https://rjspret.com/cdn/shop/products/shshtaj-2.jpg?v=1682965687&width=1445",
      title1: "-31%",
      title2: "Fancy Dress FR7883",
      price1: "Rs3,500",
      price2: "Rs2,415",
    },
    {
      image:
        "https://stylo.pk/cdn/shop/products/FR511715_3_720x.jpg?v=1687350591",
      title1: "-41%",
      title2: "Golden Formal Sandal FR5117",
      price1: "Rs4,500",
      price2: "Rs2,415",
    },
    {
      image:
        "https://stylo.pk/cdn/shop/products/FR493920_3_720x.jpg?v=1678167428",
      title1: "-31%",
      title2: "Yellow Formal Sandal FR4981",
      price1: "Rs2,500",
      price2: "Rs1,415",
    },
    {
      image:
        "https://assets0.mirraw.com/images/11700888/LT-7006_large_m.jpg?1690444315",
      title1: "-31%",
      title2: "Black Formal dress FR4881",
      price1: "Rs5,500",
      price2: "Rs3,415",
    },
    {
      image:
        "https://stylo.pk/cdn/shop/products/CL137323_3_720x.jpg?v=1678708025",
      title1: "-38%",
      title2: "Peach Casual Chappal CL1373",
      price1: "Rs1,500",
      price2: "Rs 800",
    },
    {
      image:
        "https://stylo.pk/cdn/shop/products/FR791011_3_eabf8ff0-0f79-40a8-9321-2c1bc802fa54_720x.jpg?v=1680085753",
      title1: "-31%",
      title2: "Green Formal Slipper FR7910",
      price1: "Rs2,500",
      price2: "Rs1,715",
    },
    {
      image:
        "https://www.khasstores.com/cdn/shop/products/kkh-1481-winter-2022-vol-iii-khas-stores-726584.jpg?v=1665664562&width=600",
      title1: "-31%",
      title2: "Yellow Formal Dress FR4881",
      price1: "Rs3,500",
      price2: "Rs2,415",
    },
    {
      image:
        "https://stylo.pk/cdn/shop/products/FR788662_3_720x.jpg?v=1679313938",
      title1: "-21%",
      title2: "Beige Formal Slipper FR7886",
      price1: "Rs3,500",
      price2: "Rs2,208",
    },
    {
      image:
        "https://stylo.pk/cdn/shop/products/FR490120_3_720x.jpg?v=1676632333",
      title1: "-31%",
      title2: "Yellow Formal Sandal FR4981",
      price1: "Rs2,800",
      price2: "Rs1,915",
    },
    {
      image:
        "https://stylo.pk/cdn/shop/products/FR791018_3_720x.jpg?v=1677056990",
      title1: "-31%",
      title2: "Pink Formal Slipper FR7910",
      price1: "Rs2,500",
      price2: "Rs1,415",
    },
    {
      image:
        "https://stylo.pk/cdn/shop/products/FR788618_3_720x.jpg?v=1680174009",
      title1: "-31%",
      title2: "Pink Formal Slipper FR7886",
      price1: "Rs3,500",
      price2: "Rs 2,250",
    },
  ]);

  return (
    <div>
      <div className="container d-flex flex-wrap justify-content-center  gap-5 mt-5">
        {data.map((item) => {
          return (
            <div class="card" style={{ width: "15rem" }}>
              <img src={item.image} alt="Card image cap" height={"320px"} width={"256px"} />
              <div class="cover">
                <button class="btn btn-light ml-5">
                  <span>Quick View</span>
                </button>
                <button class="btn btn-light ml-5">
                  <span>Quick Shop</span>
                </button>
              </div>

              <div class="text-block2">
                <h6>{item.title1}</h6>
              </div>
              <h5 class="card-title fs-6 w-10 text-center mt-2">{item.title2}</h5>
              <p class="card-text text-center">
                <del style={{ color: "gray" }}>{item.price1}</del>{" "}
                <emb style={{ color: "red" }}>{item.price2}</emb>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sale;
