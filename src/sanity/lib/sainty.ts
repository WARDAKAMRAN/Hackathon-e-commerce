// import { createClient } from "@sanity/client";

// export const sanityClient = createClient({
//   projectId: "b48tbhm2", // Apna Sanity project ID yahan likhein
//   dataset: "production", // Agar apka dataset kuch aur hai to update karein
//   apiVersion: "2024-02-07", // Latest ya required API version likhein
//   useCdn: true, // Faster data fetching ke liye CDN enable karein
// });



import { createClient } from "next-sanity";

export const sanityclient = createClient({
  projectId: "b48tbhm2",  // 👈 Yeh ID Sanity Dashboard se check karein
  dataset: "production",   // 👈 "production" ke ilawa koi aur dataset use to nahi kar rahe?
  apiVersion: "2024-02-07", // 👈 Yeh API version latest hai?
  useCdn: false, // 👈 Agar aapko live updates chahiye, to `false` rakhein
});

