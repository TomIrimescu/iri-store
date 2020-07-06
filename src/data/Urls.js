import { DataTypes } from "./Types";

const protocol = "http";
const hostname = "localhost";
const port = 3500;

export const RestUrls = {
  [DataTypes.PRODUCTS]: `${protocol}://${hostname}:${port}/api/products`,
  [DataTypes.CATEGORIES]: `${protocol}://${hostname}:${port}/api/categories`,
  [DataTypes.ORDERS]: `${protocol}://${hostname}:${port}/api/orders`
}

export const GraphQlUrl = `${protocol}://${hostname}:${port}/graphql`;
export const authUrl = `${protocol}://${hostname}:${port}/login`;

// export const RestUrls = {
//   [DataTypes.PRODUCTS]: `https://us-central1-irimescu-9d5e8.cloudfunctions.net/app/api/products`,
//   [DataTypes.CATEGORIES]: `https://us-central1-irimescu-9d5e8.cloudfunctions.net/app/api/categories`,
//   [DataTypes.ORDERS]: `https://us-central1-irimescu-9d5e8.cloudfunctions.net/app/api/orders`
// }

// export const GraphQlUrl = `https://us-central1-irimescu-9d5e8.cloudfunctions.net/app/graphql`;
// export const authUrl = `https://us-central1-irimescu-9d5e8.cloudfunctions.net/app/login`;