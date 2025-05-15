import { IconType } from "react-icons";
export type GiftTransactionType = "sent" | "received";
export type GiftTransactionStatus = "successful" | "failed";

export interface GiftTransaction {
  id: string;
  type: GiftTransactionType;
  amount: number;
  timestamp: string;
  status: GiftTransactionStatus;
}

export interface Gift {
  id: number;
  name: string;
  icon: IconType;
  description: string;
  price: number;
  color: string;
}
