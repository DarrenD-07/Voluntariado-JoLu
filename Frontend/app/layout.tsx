import React, { ReactNode } from "react";
import "./global.css"; 

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
   <body className="font-bebas bg-gradient-to-br from-[#8ecae6] to-[#219ebc] min-h-screen">{children}</body>
  );
};

export default Layout;

