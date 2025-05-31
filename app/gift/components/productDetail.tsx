import React, { useState, useCallback } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { PiConfettiThin } from "react-icons/pi";

interface Currency {
  code: string;
  symbol: string;
  rate: number;
}

const CURRENCIES: Currency[] = [
  { code: "NGN", symbol: "₦", rate: 1 },
  { code: "USD", symbol: "$", rate: 0.0013 },
];

const ProductDetail: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedCurrency, setSelectedCurrency] = useState<string>("NGN");

  const basePrice = 200;
  const originalPrice = 400;

  const handleQuantityIncrease = useCallback(() => {
    setQuantity((prev) => prev + 1);
  }, []);

  const handleQuantityDecrease = useCallback(() => {
    setQuantity((prev) => Math.max(1, prev - 1));
  }, []);

  const handleQuantityChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(e.target.value) || 1;
      setQuantity(Math.max(1, value));
    },
    []
  );

  const handleCurrencyChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedCurrency(e.target.value);
    },
    []
  );

  const getCurrentCurrency = (): Currency => {
    return (
      CURRENCIES.find((curr) => curr.code === selectedCurrency) || CURRENCIES[0]
    );
  };

  const formatPrice = (price: number): string => {
    const currency = getCurrentCurrency();
    const convertedPrice = price * currency.rate;
    return `${currency.symbol}${convertedPrice.toLocaleString("en-US", {
      minimumFractionDigits: currency.code === "USD" ? 2 : 0,
      maximumFractionDigits: currency.code === "USD" ? 2 : 0,
    })}`;
  };

  const totalPrice = basePrice * quantity;

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 space-y-6">
      {/* Product Header */}
      <div className="flex items-start gap-6">
        <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-4 rounded-xl border border-pink-100">
          <PiConfettiThin className="h-20 w-20 text-pink-500" />
        </div>

        <div className="flex-1 space-y-3">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">
              Sparkle Confetti
            </h1>
            <p className="text-gray-600 leading-relaxed">
              Premium quality confetti perfect for celebrations, parties, and
              special occasions.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-lg text-gray-500 line-through">
              {formatPrice(originalPrice)}
            </span>
            <span className="text-3xl font-bold text-gray-900">
              {formatPrice(basePrice)}
            </span>
            <span className="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded-full">
              50% OFF
            </span>
          </div>
        </div>
      </div>

      {/* Quantity and Price Controls */}
      <div className="flex flex-wrap items-center justify-center gap-6 p-4 bg-gray-50 rounded-lg">
        {/* Quantity Selector */}
        <div className="flex items-start flex-col">
          <label className="text-sm font-medium text-gray-700 mr-3">
            Quantity:
          </label>
          <div className="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden bg-white">
            <button
              onClick={handleQuantityDecrease}
              disabled={quantity <= 1}
              className="p-2 cursor-pointer hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Decrease quantity"
            >
              <FiMinus className="w-4 h-4 text-gray-600" />
            </button>

            <input
              type="number"
              value={quantity}
              min="1"
              onChange={handleQuantityChange}
              className="w-16 px-3 py-2 text-center border-x-2 border-gray-200 focus:outline-none focus:bg-blue-50"
              aria-label="Quantity"
            />

            <button
              onClick={handleQuantityIncrease}
              className="p-2 cursor-pointer hover:bg-gray-50 transition-colors"
              aria-label="Increase quantity"
            >
              <FiPlus className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="flex items-start flex-col ">
          <label
            htmlFor="currency"
            className="text-sm font-medium text-gray-700"
          >
            Currency:
          </label>
          <select
            id="currency"
            value={selectedCurrency}
            onChange={handleCurrencyChange}
            className="border-2 cursor-pointer border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-200 transition-all"
            aria-label="Select currency"
          >
            {CURRENCIES.map((currency) => (
              <option key={currency.code} value={currency.code}>
                {currency.code} ({currency.symbol})
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-2 mt-3">
          <span className="text-sm font-medium text-gray-700">Total:</span>
          <span className="text-xl font-bold text-gray-600">
            {formatPrice(totalPrice)}
          </span>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          className="flex-1 py-1.5 px-6 cursor-pointer border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-200"
          type="button"
        >
          Cancel
        </button>

        <button
          className="flex-1 py-1.5 px-6 cursor-pointer bg-gray-800 text-white font-medium rounded-lg  focus:outline-none focus:ring-2 focus:ring-gray-200 transform hover:scale-[1.02] transition-all duration-200"
          type="button"
        >
          Send Gift
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
