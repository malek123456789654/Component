import React from "react";
// import RangeSlider from "react-bootstrap-range-slider";
import "./Cards.css";
import products from "./Cards.json";

const Cards = () => {
  const handleName = (category, price) => {
    console.log(category, price);
    alert(`${category} price :${price}`);
  };
  // const min1 = Math.min(users.age);
  // const max1 = Math.max(users.age);
  // console.log(min1);
  // console.log(max1);
  // const [value, setValue] = useState(min1);
  //   const filtredArray = users.filter((user) => user.age > 20);
  return (
    <section className="section1">
      <h2 className="title">
        <b>This is product list</b>
      </h2>

      <div className="list-users">
        {products.map((produit, i) => (
          <div
            className="user-card"
            onClick={() => handleName(produit.title, produit.price)}
            key={i}
          >
            <div className="left1">
              <h6 className="name">{produit.title}</h6>
              <button className=" btn btn-outline-primary button1">
                {" "}
                CLICK TO KNOW PRICE
              </button>

              <p>{produit.description}</p>
              {/* <p>{user.desc}</p> */}
            </div>
            <img src={produit.image} className="img" alt="produits" />
          </div>
        ))}
      </div>
      <div className="title" id="range-div">
        <h2 className="title" id="title2">
          User their age greater than : {products.price}
        </h2>
        {/* 
        <RangeSlider
          className="rangex"
          value={value}
          // min={min1}
          // max={max1}
          onChange={(changeEvent) => setValue(changeEvent.target.value)}
        /> */}
      </div>

      <div className="list-users">
        {products
          .filter(
            (produit) =>
              produit.category === `men's clothing` && produit.price > 100
          )
          .map((produit, i) => (
            <div
              className="user-card"
              onClick={() => handleName(produit.title, produit.price)}
              key={i}
            >
              <div className="left1">
                <h6 className="name">{produit.title}</h6>
                <button className=" btn btn-outline-primary button1">
                  {" "}
                  CLICK TO KNOW PRICE
                </button>

                <p>{produit.description}</p>
                {/* <p>{produit.desc}</p> */}
              </div>
              <img src={produit.image} className="img" alt="produits" />
            </div>
          ))}
      </div>

      <h2 className="title">average age is :</h2>
      <h2>
        {(
          products.reduce((acc, curr) => acc + curr.age, 0) / products.length
        ).toFixed(2)}
      </h2>
    </section>
  );
};

export default Cards;
