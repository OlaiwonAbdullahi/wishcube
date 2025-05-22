import React from "react";
import Menu from "../ui/menu";
import WalletBalance from "./components/walletBallance";
import QuickAction from "./components/quickAction";
import ProtectedRoute from "../protectedRoutes";

const Page = () => {
  return (
    <ProtectedRoute>
      <div className="p-4 space-y-4">
        <WalletBalance />
        <QuickAction />
        <Menu />
      </div>
    </ProtectedRoute>
  );
};

export default Page;
