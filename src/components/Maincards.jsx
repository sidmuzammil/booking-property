import React from "react";
import { useState } from "react";
import locationicon from "../assets/location.svg";
import flatIcon from "../../src/assets/flaticon.svg";
import bedIcon from "../../src/assets/bedicon.svg";
import bathIcon from "../../src/assets/bathicon.svg";
import squarefeeticon from "../../src/assets/squareicon.svg";
import { useNavigate } from "react-router-dom";

const Maincards = ({ items }) => {
  const navigate = useNavigate(); // navigate hook for click  any card, then to change navigate location

  const [showmore, setShowmore] = useState(6); //using state hook for update the slice value

  const handleclikck = () => {
    //this fnction on running when you click show more button
    setShowmore((previoseValue) => previoseValue + 3);
  };

  return (
    <div>
      <div className="cards">
        {items.slice(0, showmore).map((data, key) => {
          return (
            <div
              className="main-card-contant"
              key={key}
              onClick={() => {
                navigate(`${data.id}`); //when you click  the card navigate card link is changing with id number in here like this "localhost/1" 
              }}
            >
              {/* hard code section , offcourse we change it dinamically on future */} 
              <div className="second-section">
                <div className="card-main">
                  <div className="image">
                    <img src={data.mainImage} alt="" />
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
                      <h3>
                        RCE theaters - 907 backford Dr.Henderson , nc 27536
                      </h3>
                    </div>
                    <div className="card-room-fecility-icons">
                      <div>
                        <img src={flatIcon} alt="" /> <p>3 rooms</p>
                      </div>
                      <div>
                        <img src={bedIcon} alt="" /> <p>4 beds</p>
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
        })}
      </div>
      <div className="showmore-button">
        <button onClick={handleclikck}>show more</button> 
      </div>
    </div>
  );
};

export default Maincards;
