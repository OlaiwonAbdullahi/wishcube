export type GiftTransactionType = "sent" | "received";
export type GiftTransactionStatus = "successful" | "failed";

export interface GiftTransaction {
  id: string;
  type: GiftTransactionType;
  amount: number;
  timestamp: string;
  status: GiftTransactionStatus;
}
export interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp?: string;
}
