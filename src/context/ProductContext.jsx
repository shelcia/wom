import React, { createContext, useState } from "react";
import GroundnutBig from "../assets/products/GDB_shadow.png";
import SesameBig from "../assets/products/SSB_shadow.png";
import GingellyBig from "../assets/products/CCB_shadow.png";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products] = useState([
    {
      product_id: "ground_nut_500ml",
      name: "Groundnut Oil",
      image: GroundnutBig,
      rate: 100,
      old_rate: 200,
      offer: 15,
      quanity: "500 ml",
      desc:
        "Our groundnut oil is a special and our best seller, loved and used by thousands of customers across the country as a healthier alternative for refined oils. It is made from specifically chosen expensive varieties that have the best aroma and health value. ",
      benefits: [
        "Controls Cholesterol Levels",
        "Boosts Heart Health",
        "Lowers Blood Pressure",
        "Prevents Cognitive Disorders",
        "Boosts Immune System",
      ],
      storage:
        "Transfer the oil from PET bottle to a non-plastic container to have more shelf life.",
    },
    {
      product_id: "sesame_500ml",
      name: "Sesame Oil",
      image: SesameBig,
      rate: 100,
      old_rate: 200,
      offer: 15,
      quanity: "500 ml",
      desc:
        "Our groundnut oil is a special and our best seller, loved and used by thousands of customers across the country as a healthier alternative for refined oils. It is made from specifically chosen expensive varieties that have the best aroma and health value. ",
      benefits: [
        "Controls Cholesterol Levels",
        "Boosts Heart Health",
        "Lowers Blood Pressure",
        "Prevents Cognitive Disorders",
        "Boosts Immune System",
      ],
      storage:
        "Transfer the oil from PET bottle to a non-plastic container to have more shelf life.",
    },
    {
      product_id: "gingelly_500ml",
      name: "Gingelly Oil",
      image: GingellyBig,
      rate: 100,
      old_rate: 200,
      offer: 15,
      quanity: "500 ml",
      desc:
        "Our groundnut oil is a special and our best seller, loved and used by thousands of customers across the country as a healthier alternative for refined oils. It is made from specifically chosen expensive varieties that have the best aroma and health value. ",
      benefits: [
        "Controls Cholesterol Levels",
        "Boosts Heart Health",
        "Lowers Blood Pressure",
        "Prevents Cognitive Disorders",
        "Boosts Immune System",
      ],
      storage:
        "Transfer the oil from PET bottle to a non-plastic container to have more shelf life.",
    },
  ]);
  return (
    <ProductContext.Provider value={[products]}>
      {children}
    </ProductContext.Provider>
  );
};
