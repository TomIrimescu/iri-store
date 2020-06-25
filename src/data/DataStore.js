import { createStore, applyMiddleware } from "redux";
import { StoreReducer } from "./StoreReducer";
import { CartReducer } from "./CartReducer";
import { CommonReducer } from "./CommonReducer";
import { asyncActions } from "./AsyncMiddleware";

export const IriStoreDataStore
  = createStore(CommonReducer(StoreReducer, CartReducer),
    applyMiddleware(asyncActions));