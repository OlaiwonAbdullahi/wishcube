import { NextResponse } from "next/server";

// Mock database
let mockUsers = {
  abc123: { wallet: 100 }, // Match with your frontend userId
};

let mockGifts = {
  1: { name: "Teddy Bear", price: 20 }, // Match gift ID
};

export async function POST(req) {
  const { userId, giftId, amount } = await req.json();

  const user = mockUsers[userId];
  const gift = mockGifts[giftId];

  if (!user || !gift) {
    return NextResponse.json(
      { success: false, message: "Invalid user or gift." },
      { status: 400 }
    );
  }

  if (user.wallet < amount) {
    return NextResponse.json(
      { success: false, message: "Insufficient balance." },
      { status: 400 }
    );
  }

  // Simulate purchase
  user.wallet -= amount;

  return NextResponse.json({ success: true, newBalance: user.wallet });
}
