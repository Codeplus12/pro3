import React from "react";

export default function About(props) {
  return (
    <>
      <div className="container" id="About">
        <div className="h100a w-100"></div>
        <div className="row">
          <div className="col-md-6">
            <p className="fs">{props.a1}</p>
            <p className="fs1 fw">{props.a2}</p>
            <p className="fs13">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
              consequuntur perspiciatis deleniti pariatur, animi odio eligendi
              molestias, omnis ab libero repellendus assumenda quos voluptatem
              atque ducimus magnam error! Animi, fugit?accordion assumenda quos
              voluptatem atque ducimus magnam error! Animi, fugit?
            </p>
            <div className="h50 w-100"></div>
            <div className="row">
              <div className="col-md-6">
                <p className="fs1 fw m-0">{props.a3}</p>
                <p className="fs13 p-0">{props.a4}</p>
              </div>
              <div className="col-md-6">
                <p className="fs1 fw m-0">{props.a5}</p>
                <p className="fs13 p-0">{props.a6}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="h100a w-100"></div>
            <p className="fs13 ">{props.a7}</p>
            <div className="h100a w-100"></div>
            <button className="fs bt1" href="#a1">
              Buy Tickets
            </button>
          </div>
        </div>
        <div className="h100 w-100"></div>
      </div>
    </>
  );
}
