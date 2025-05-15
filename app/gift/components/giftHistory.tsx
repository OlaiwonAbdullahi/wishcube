import React from "react";
import { BsArrowDownLeft, BsArrowUpRight } from "react-icons/bs";
import { GiftTransaction, GiftTransactionType } from "../../types";

interface GiftHistoryProps {
  transactions?: GiftTransaction[];
}

const getTransactionIcon = (type: GiftTransactionType) => {
  const iconProps = {
    sent: {
      Icon: BsArrowUpRight,
      bgClass: "text-red-500 bg-red-500/20",
    },
    received: {
      Icon: BsArrowDownLeft,
      bgClass: "text-green-500 bg-green-500/20",
    },
  };

  return iconProps[type];
};

const formatAmount = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

const formatTime = (timestamp: string) => {
  return new Date(timestamp).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const GiftTransactionItem: React.FC<GiftTransaction> = ({
  type,
  amount,
  timestamp,
  status,
}) => {
  const { Icon, bgClass } = getTransactionIcon(type);
  const isSuccessful = status === "successful";

  return (
    <div className="flex items-center gap-2 w-full justify-between p-2.5 rounded-lg border border-gray-300 mx-auto">
      <div className="flex items-center gap-2">
        <div className={`${bgClass} rounded-full p-1`}>
          <Icon className={`size-5 ${bgClass.split(" ")[0]}`} />
        </div>
        <div>
          <div>{type === "sent" ? "Sent Gift" : "Received Gift"}</div>
          <div className="text-gray-500 text-xs">{formatTime(timestamp)}</div>
        </div>
      </div>
      <div className="flex items-center gap-2 flex-col">
        <div className="flex items-center gap-1">
          <span className={isSuccessful ? "text-green-500" : "text-red-500"}>
            {formatAmount(amount)}
          </span>
        </div>
        <div
          className={`
            ${
              isSuccessful
                ? "text-green-800 bg-green-500/20 border-green-500"
                : "text-red-800 bg-red-500/20 border-red-500"
            } 
            border rounded-full px-2 text-sm
          `}
        >
          {status === "successful" ? "Successful" : "Failed"}
        </div>
      </div>
    </div>
  );
};

const GiftHistory: React.FC<GiftHistoryProps> = ({ transactions = [] }) => {
  if (transactions.length === 0) {
    return (
      <div className="flex flex-col gap-2 p-3.5 md:w-3/5 w-4/5 mx-auto">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-medium">Gift History</h2>
          <p className="text-gray-500">
            No gift transactions yet. Start sending or receiving gifts!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 p-3.5 md:w-3/5 w-4/5 mx-auto">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-medium">Gift History</h2>
        <p className="text-gray-500">
          Track your gift history and redeem your gifts to unlock exclusive
          rewards.
        </p>
      </div>

      <div className="space-y-2">
        {transactions.map((transaction) => (
          <GiftTransactionItem key={transaction.id} {...transaction} />
        ))}
      </div>
    </div>
  );
};

export default GiftHistory;
