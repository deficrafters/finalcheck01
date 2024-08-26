"use client";
import { Provider } from "react-redux";
import store from "./store";
import ThirdWeb from "@/context/ThirdWeb";

export default function Providers({ children }) {
  return (
    <div>
      <Provider store={store}>
        <ThirdWeb>{children}</ThirdWeb>
      </Provider>
    </div>
  );
}
