// import { groq } from "next-sanity";

// export const allProductsQuery = groq`*[_type == "product"]`;
// export const fourProductsQuery = groq`*[_type == "product"][0...4]`;

import { groq } from "next-sanity";

export const allProductsQuery = groq`
  *[_type == "product"]{
    title,
    description,
    price,
    isNew,
    dicountPercentage,
    tags,
    "imageUrl": productImage.asset->url
  }
`;
