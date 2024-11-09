import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  LineChart,
  XAxis,
  YAxis,
  Line,
  CartesianGrid,
  Tooltip,
} from "recharts";

const StockMarketAnalysisApp = () => {
  const [stockData, setStockData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStockData = async () => {
      setLoading(true);
      try {
        const response = await import("C:/Users/sumit/Desktop\response.json");
        setStockData(response.default);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchStockData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Stock Market Analysis App</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <LineChart width={800} height={400} data={stockData}>
          <XAxis dataKey="CH_TIMESTAMP" />
          <YAxis />
          <CartesianGrid stroke="#ccc" />
          <Line type="monotone" dataKey="CH_CLOSING_PRICE" stroke="#8884d8" />
          <Tooltip />
        </LineChart>
      )}
    </div>
  );
};

export default StockMarketAnalysisApp;
