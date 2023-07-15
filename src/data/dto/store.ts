import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers/";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const initialState = {};
let middleware: any[] = [];

const persistConfig = {
  // Root?
  key: "root",
  storage: storage,
  blacklist: [""],
};
const persistReduce = persistReducer(persistConfig, reducers);
if (process.env.NODE_ENV === "development") {
  const reduxImmutableStateInvariant =
    require("redux-immutable-state-invariant").default();
  middleware = [...middleware, reduxImmutableStateInvariant, thunk];
} else {
  middleware = [...middleware, thunk];
}

let store = configureStore({
  reducer: persistReduce,
  middleware: middleware,
  preloadedState: initialState,
  devTools: true,
});
let persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  store,
  persistor,
};
