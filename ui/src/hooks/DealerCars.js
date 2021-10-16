import React, { useEffect, useState } from "react";
import Car from "../components/Item/Card/Car";
import { useAxios } from "./useAxios";

export default function useDealerCars({id}) {
  const [response, fetchCars] = useAxios({
    method: "GET",
    url: "/cars/dealer/"+id,
    headers: {
      // no need to stringify
      accept: "*/*",
    },
  });

  // useEffect(() => {
  //   fetchCars();
  //   console.log(response.data);
  // }, []);

  return (
    <div className="team row ">
      {response.data.map((obj) => {
        return <div className="col-md-4 col-12 text-center">
          <Car data={obj} dealer_id={id} />
        </div>;
      })}
    </div>
  );
}

//export default Cars;
