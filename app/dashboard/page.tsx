import React from "react";
import Menu from "../ui/menu";
import WalletBalance from "./components/walletBalance";
import QuickAction from "./components/quickAction";
//import Generator from "../generateWebsite/components/generator";

const Page = () => {
  return (
    <div className="p-4 space-y-4">
      <WalletBalance />
      <QuickAction />
      <Menu />
    </div>
  );
};

export default Page;
