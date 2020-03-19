import React, { useState, useEffect } from 'react';
import Chart from 'react-google-charts';

function GlobalStautsByCounrtyTable() {
  const [countryByCityNumbers, setCountryByCityNumbers] = useState([]);

  useEffect(() => {
    fetch('/globalStatusByCountry/mix')
      .then(res => res.json())
      .then(results => {
        console.log(results);
        let arrayResults = Object.keys(results).map(key => {
          const korean = String(key).split(',')[1];
          const english = String(key).split(',')[0];
          return [{ v: english, f: korean }, Number(results[key].confirmator)];
        });
        arrayResults.unshift(['Country', '확진자']);
        setCountryByCityNumbers(arrayResults);
      });
  }, []);
  return (
    <Chart
      chartType="GeoChart"
      data={countryByCityNumbers}
      mapsApiKey="AIzaSyAPfPKg5VQGjvTQXY4ejFB09fNrZMB1pyg"
      options={{
        colorAxis: {
          colors: ['#FFB4B4', '#FF4848', '#FF3636', '#FF2424'],
        },
        backgroundColor: 'transparent',
        legend: 'none',
      }}
    />
  );
}

export default GlobalStautsByCounrtyTable;
