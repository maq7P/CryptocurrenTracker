import React from 'react'
import axios from "axios";
import {Coin} from "./Coin";
import './App.css'
function App() {
    console.log('render')
    const [coins, setCoins] = React.useState([])
    const [search, setSearch] = React.useState('')
    React.useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=rub&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then(res => {
                setCoins(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const handleChange = e => {
        setSearch(e.target.value)
    }

    const filterCoins = coins.filter(coin => {
        return coin.name.toLowerCase().includes(search.toLowerCase())
    })
  return (
    <div className="coin-app">
      <div className="coin-search">
          <h1 className="coin-text">Search a currency</h1>
          <form>
              <input
                  type="text"
                  className="coin-input"
                  placeholder="Search"
                  onChange={handleChange}
              />
          </form>
      </div>
        {filterCoins.map(coin => {
            return (
                <Coin
                    key={coin.id}
                    {...coin}
                />
            )
        })}
    </div>
  );
}

export default App;
