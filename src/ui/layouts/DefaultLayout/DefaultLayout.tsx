"use client";
import { FC, PropsWithChildren } from "react";
import { useEffect, useState } from "react";
import { StyledDefaultLayout } from "./DefaultLayout.styles";
import axios, { InternalAxiosRequestConfig } from "axios";
import Store from "@/data/dto/store";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BottomBanner, Footer, Header, Navbar, TopBanner } from "./components";

export const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  axios.defaults.baseURL = "https://restcountries.com/v2/";

  const handleRequestSuccess = (
    request: InternalAxiosRequestConfig<any>
  ): InternalAxiosRequestConfig<any> => {
    const { headers } = request;
    if (headers) {
      headers["Content-Type"] = "application/json";
      headers.accept = "application/json";
    }
    return request;
  };

  const handleRequestError = (error: any) => {
    console.log(`REQUEST ERROR! => ${error}`);
    return error;
  };

  axios.interceptors.request.use(handleRequestSuccess, handleRequestError);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  console.log({ Store });

  return (
    <Provider store={Store.store}>
      <PersistGate loading={null} persistor={Store.persistor}>
        <StyledDefaultLayout>
          <Navbar />
          <Header />
          <div className="max-centered">
            <TopBanner />
            <main role="main">{children}</main>
            <BottomBanner />
            <hr role="separator" />
            <Footer />
          </div>
        </StyledDefaultLayout>
      </PersistGate>
    </Provider>
  );
};
