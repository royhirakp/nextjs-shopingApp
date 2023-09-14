"use client";
import React from "react";
import { store } from "./store";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

// let persistor = persistStore(store);

const StoreProvidor: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  let persistor = persistStore(store);
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    </>
  );
};

export default StoreProvidor;
