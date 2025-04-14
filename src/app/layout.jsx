import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/view/ui/Header";
import "./globals.css";
import { ProductsContextProvider } from "@/store/product.provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Móviles Acer | Compra Smartphones Acer al Mejor Precio",
  description: "Explora nuestra tienda online de móviles Acer. Tecnología innovadora, diseño elegante y rendimiento confiable. Compra con garantía y envío rápido.",
  keywords: [
    "móviles Acer",
    "smartphones Acer",
    "comprar móviles Acer",
    "Acer Android",
    "teléfonos Acer",
    "tienda Acer",
    "smartphones gama media Acer",
    "smartphones baratos Acer"
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ProductsContextProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} `}
        >
          <Header />
          {children}
        </body>
      </ProductsContextProvider>
    </html>
  );
}
