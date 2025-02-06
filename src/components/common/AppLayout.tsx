import React from "react";
import AppHeader from "./header/AppHeader";
import AppFooter from "./footer/AppFooter";

export interface AppLayoutProps {
  children: React.ReactNode;
  header?: boolean;
  footer?: boolean;
}

export default function AppLayout({
  children,
  header = true,
  footer = true,
}: AppLayoutProps) {
  return (
    <div className="appLayout">
      {header && <AppHeader />}
      <main>{children}</main>
      {footer && <AppFooter />}
    </div>
  );
}
