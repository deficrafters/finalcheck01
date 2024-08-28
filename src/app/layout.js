import { Poppins } from "next/font/google";
import "./globals.css";

import SideNavigation from "@/components/common/SideNavigation";
import Footer from "@/components/common/Footer";
import GlobalContextProvider from "@/components/context/global/GlobalContextProvider";
import HeroPointer from "@/components/common/HeroPointer";
import LoginPopup from "@/components/common/LoginPopup";
import { Toaster } from "react-hot-toast";
import Providers from "@/store/Providers";
import UserSubMenu from "@/components/common/UserSubMenu";
import HamMenu from "@/components/headers/HamMenu";
import Header from "@/components/headers/Header";
import { GoogleOAuthProvider } from "@react-oauth/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Dream GameZ",
  description: "World Of Crypto games",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <GoogleOAuthProvider clientId='348461256920-glglvlspj1b278hd6nltk54m0crk1gh7.apps.googleusercontent.com'>
          <Providers>
            <Toaster
              toastOptions={{
                success: {
                  style: {
                    transform: "translate(255px,0px)",
                    zIndex: "20",
                    backgroundColor: "#373aa4",
                    color: "#fff",
                  },
                },
                error: {
                  style: {
                    zIndex: "20",
                    backgroundColor: "#5a4926",
                    color: "#fff",
                  },
                },
              }}
              position='top-center'
              reverseOrder={false}
            />
            <GlobalContextProvider>
              <main className={`text-white`}>
                <SideNavigation />
                <div className={`flex`}>
                  <div className={`hidden lg:block min-w-[255px]`}></div>
                  <div
                    id='hero'
                    className={`relative w-[100%] lg:max-w-[calc(100%-255px)]`}
                  >
                    <HamMenu />
                    <UserSubMenu />
                    <LoginPopup />
                    <HeroPointer />
                    <Header />
                    {children}
                    <Footer />
                  </div>
                </div>
              </main>
            </GlobalContextProvider>
          </Providers>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
