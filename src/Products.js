import { useState } from "react";
import iphone from "./iphone.png";
import heart from "./heart.png";
import heartRed from "./heart.red.png";
function Products() {
    const [liked , setLiked] = useState(false)
  const phones = [
    {
      title: "iPhone 15 Pro Max",
      image: "./images/1.jpg",
      description:
        "Флагманский смартфон Apple с титановым корпусом, чипом A17 Pro и камерой 48 МП.",
      price: 129990,
    },
    {
      title: "Samsung Galaxy S24 Ultra",
      image: "./images/2.jpg",
      description:
        "Премиум-смартфон с S Pen, 200 МП камерой и дисплеем Dynamic AMOLED 2X.",
      price: 119990,
    },
    {
      title: "Xiaomi 14 Pro",
      image: "./images/3.jpg",
      description:
        "Смартфон с камерой Leica, процессором Snapdragon 8 Gen 3 и быстрой зарядкой 120 Вт.",
      price: 79990,
    },
    {
      title: "Google Pixel 8 Pro",
      image: "./images/4.jpg",
      description:
        "Смартфон с чистым Android, чипом Tensor G3 и лучшей AI-камерой.",
      price: 89990,
    },
    {
      title: "OnePlus 12",
      image: "./images/5.jpg",
      description:
        "Флагман с дисплеем 120 Гц, Snapdragon 8 Gen 3 и зарядкой SuperVOOC 100 Вт.",
      price: 69990,
    },
    {
      title: "Huawei P60 Pro",
      image: "./images/6.jpg",
      description:
        "Смартфон с камерой XMAGE, изогнутым дисплеем и технологией SuperCharge.",
      price: 74990,
    },
    {
      title: "Realme GT 5 Pro",
      image: "./images/7.jpg",
      description: "Игровой флагман с Snapdragon 8 Gen 3 и зарядкой 100 Вт.",
      price: 54990,
    },
    {
      title: "Nothing Phone (2)",
      image: "./images/8.jpg",
      description:
        "Смартфон с уникальным дизайном Glyph Interface и чистым Android.",
      price: 49990,
    },
  ];

  return (
    <div className="products">
      {phones.map((item) => {
        console.log(item.title);
        return (
          <div className="card_product">
            <div className="like">
              <img src={liked ? heartRed : heart} onClick={()=> setLiked(!liked)} alt="" />
            </div>

            <div className="card_top">
              <div className="card_image">
                <img src={item.image} alt="" />
              </div>
            </div>

            <div className="card_bottom">
              <div className="card_title">{item.title}</div>

              <div className="card_desc">{item.description}</div>

              <div className="card_price">{item.price}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
