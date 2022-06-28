import React, { useState } from "react";
import workapi from "../api/workApi";

const HowItWorks = () => {
  const [workData, setWorkData] = useState(workapi);
  return (
    <>
      <section>
        <div className="container work-container">
          <h1 className="main-heading text-center">How does it work</h1>
          <div className="row">
            {workData.map((curElem) => {
              const { id, logo, title, info } = curElem;
              return (
                <>
                  <div
                    className="col-12 col-lg-4 text-center work-container-subdiv"
                    key={id}
                  >
                    <i className={`fontawesome-style ${logo}`} />
                    <h2 className="sub-heading">{title}</h2>
                    <p className="main-hero-para w-100">{info}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
