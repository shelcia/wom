import React, { createContext, useState } from "react";
import GroundnutBig from "../assets/products/shadow_pics/GDB_shadow.png";
import GingellyBig from "../assets/products/shadow_pics/SSB_shadow.png";
import SesameBig from "../assets/products/shadow_pics/CCB_shadow.png";

import GroundnutBigInfo from "../assets/products/product_info/Ground_Info.jpg";
import SesameBigInfo from "../assets/products/product_info/Gingelly_Info.jpg";
import GingellyBigInfo from "../assets/products/product_info/Sesame_Info.jpg";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products] = useState([
    {
      product_id: "ground_nut_500ml",
      name: "Groundnut Oil",
      image: GroundnutBig,
      info_image: GroundnutBigInfo,
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
      info_image: SesameBigInfo,
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
      info_image: GingellyBigInfo,
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
