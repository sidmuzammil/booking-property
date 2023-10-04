import React from "react";
import { useParams } from "react-router-dom";
import jsonData from "../items.json";
import "./ProductDisplayy.css";
import locationicon from "../assets/location.svg";
import flatIcon from "../../src/assets/flaticon.svg";
import bedIcon from "../../src/assets/bedicon.svg";
import bathIcon from "../../src/assets/bathicon.svg";
import squarefeeticon from "../../src/assets/squareicon.svg";


// in this section is when i clicked any card ,the card details navigate to this page

function ProductDisplay() {
  const params = useParams();
  const { id } = params;
  return (
    <div>
      <div className="second-section">
        <div className="card-main">
          <div className="image">
            <img src={jsonData[id - 1].mainImage} alt="" />
            <div className="image-icons">
              <button>for rent</button>
            </div>
          </div>
          <div className="card-main-details">
            <div className="card-main-heading">
              <div className="card-location">
                <img src={locationicon} alt="" />
                <p>8558 pecan St</p>
              </div>
              <h3>RCE theaters - 907 backford Dr.Henderson , nc 27536</h3>
            </div>
            <div className="card-room-fecility-icons">
              <div>
                <img src={flatIcon} alt="" />
                <p>3 rooms</p>
              </div>
              <div>
                <img src={bedIcon} alt="" />
                <p>4 beds</p>
              </div>
              <div>
                <img src={bathIcon} alt="" />
                <p>4 bath</p>
              </div>
              <div>
                <img src={squarefeeticon} alt="" />
                <p>732 left</p>
              </div>
            </div>
            <hr />
            <div className="Rate-Tag">
              <div className="price-month">
                <h3>
                  $7234/<span>month</span>
                </h3>
              </div>
              <button>read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;

{
  /* <h1>{jsonData[id - 1].main - location - name}</h1>
 <p>{jsonData[id - 1].price}</p> */
}
