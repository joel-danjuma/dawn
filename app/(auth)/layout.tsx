import React from "react";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section>
      <div className="main">
        <div className="gradient" />
      </div>
      <main> {children}</main>
    </section>
  );
};

export default AuthLayout;
