import React, { useState, useEffect } from 'react';
import StockItem from './StockItem'; // A sub-component for individual stock items

const StockList = () => {
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        // Fetch stock data from an API
        const fetchData = async () => {
            const response = await fetch('/api/stocks');
            const data = await response.json();
            setStocks(data);
        };

        fetchData();
    }, []);

    return (
        <div className="stock-list">
            {stocks.map(stock => (
                <StockItem key={stock.id} stock={stock} />
            ))}
        </div>
    );
};

export default StockList;
