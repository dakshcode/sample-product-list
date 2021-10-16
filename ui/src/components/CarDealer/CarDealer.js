import React, { useEffect } from "react";
import DealerCars from "../../hooks/DealerCars";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const CarDealer = (props) => {
    var camalize = function camalize(str) {
        return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
    }

  const title = (id) => {
     if(id == "true-motors")
        return "True Motors";
     else if(id == "aone-motors")
        return "Aone Motors";
    else if(id == "classic-motors")
        return "Classic Motors";
  }

  let id = props.match.params.id;

  return (
    <>
      <Header />
      <main>
        {/* Section 4 */}
        <section className="section-4">
          <h2 style={{"marginTop": "15px"}}>{ title(id)}</h2> 
          <DealerCars id={props.match.params.id}/>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CarDealer;
