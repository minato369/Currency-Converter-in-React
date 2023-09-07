import { useState, useEffect } from "react";
import "./App.css";
import Props from "./Props";
function App() {
  const [country, setCountry] = useState([]);
  const [baseCurrency, setBaseCurrency] = useState();
  const [toCurrency, setTocurrency] = useState();
  const [rates, setRates] = useState();
  const [amount, setAmount] = useState(1);
  const [amountFromCurrency, setAmountFromCurrency] = useState(true);

  let toAmount, fromAmount;
  if (amountFromCurrency) {
    fromAmount = amount;
    toAmount = amount * rates;
  } else {
    toAmount = amount;
    fromAmount = amount / rates;
  }

  const url = "https://api.exchangerate.host/latest";
  const apiData = async () => {
    const data = await fetch(url);
    const response = await data.json();
    setCountry([response.base, ...Object.keys(response.rates)]);
    setBaseCurrency(response.base);
    setTocurrency(Object.keys(response.rates)[0]);
    setRates(response.rates[Object.keys(response.rates)[0]]);
  };

  const apiAmount = async () => {
    if (baseCurrency != null && toCurrency != null) {
      const amountData = await fetch(
        `${url}?base=${baseCurrency}&symbols=${toCurrency}`
      );
      const response = await amountData.json();
      setRates(response.rates[toCurrency]);
    }
  };

  useEffect(() => {
    apiData();
  }, []);

  useEffect(() => {
    apiAmount();
  }, [baseCurrency, toCurrency]);

  const handleChangeFromAmount = (e) => {
    setAmount(e.target.value);
    setAmountFromCurrency(true);
  };

  const handleChangeToAmount = (e) => {
    setAmount(e.target.value);
    setAmountFromCurrency(false);
  };

  console.log(rates);

  return (
    <div className="App">
      <h1>Currency Converter</h1>
      <div className="container">
        <Props
          country={country}
          selectedCurrency={baseCurrency}
          handleChange={(e) => setBaseCurrency(e.target.value)}
          amount={fromAmount}
          onChangeAmount={handleChangeFromAmount}
        />
        <p>To</p>
        <Props
          country={country}
          selectedCurrency={toCurrency}
          handleChange={(e) => setTocurrency(e.target.value)}
          amount={toAmount}
          onChangeAmount={handleChangeToAmount}
        />
      </div>
    </div>
  );
}

export default App;





















