import { Inter } from "next/font/google";
import "../public/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JobHub",
  description: "Get Jobs. Find Talents",
};

export default function RootLayout({ children, auth }) {
  return (
    <html lang="en">
      <body style={{ display: "relative" }} className={inter.className}>
        <div>{children}</div>
        {auth}
      </body>
    </html>
  );
}
