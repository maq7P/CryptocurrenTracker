import React from 'react'
import './Coin.css'
export const Coin = ({image, name, symbol, current_price, market_cap, price_change_percentage_24h, total_volume}) => {
    const priceChange = price_change_percentage_24h
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto"/>
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">{current_price} ₽</p>
                    <p className="coin-volume">{total_volume.toLocaleString('ru-RU')} ₽</p>
                    {priceChange < 0
                        ? <p className="coin-percent red">{priceChange && priceChange.toFixed(2)}%</p>
                        : <p className="coin-percent green">{priceChange && priceChange.toFixed(2)}%</p>
                    }
                    <p className="coin-marketcap">Mkt cap: {market_cap.toLocaleString('ru-RU')} ₽</p>
                </div>
            </div>
        </div>
    )
}