import React from "react";

export default function Venue(props) {
  return (
    <>
      <div className="container" id="Venue">
        <div className="row">
          <div className="col-md-6">
            <p className="fs4 fw3">Venue</p>
            <div className="col-md-12">
              <p className="fs5">{props.v1}</p>
              <div className="h20 w-100"></div>
              <p className="fs13">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusamus molestiae doloribus possimus placeat, similique
                dolorum adipisci eveniet fugit et aperiam voluptates ratione eos
                nihil nemo exercitationem, porro harum suscipit dignissimos.
              </p>
            </div>
            <div className="h40 w-100"></div>
            <button className="bt1" href="#a2">
              Buy Tickets
            </button>
          </div>
          <div className="col-md-6">
          <div className="h30 w-100"></div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2032341578306!2d-74.0050440248306!3d40.75755453482683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2596b0b3394a7%3A0x8461e42130f7d0a6!2sJacob%20Javits%20Convention%20Center!5e0!3m2!1sen!2sin!4v1711512747240!5m2!1sen!2sin"
              width="100%"
              height="370"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="h100a w-100"></div>
      </div>
    </>
  );
}
