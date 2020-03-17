import React, { useState, useEffect } from 'react';
import Chart from 'react-google-charts';

function GlobalStautsByCounrtyTable() {
  const [countryByCityNumbers, setCountryByCityNumbers] = useState([]);

  useEffect(() => {
    fetch('/globalStatusByCountry/mix')
      .then(res => res.json())
      .then(results => {
        delete results.numbers;
        let arrayResults = Object.keys(results).map(key => {
          const korean = String(key).split(',')[1];
          const english = String(key).split(',')[0];
          return [
            { v: english, f: korean },
            Number(results[key]),
            /* `${korean}<br/><div>확진자${Number(results[key])}명</div>`, */
          ];
        });
        arrayResults.unshift([
          'Country',
          '확진자',
          /* { role: 'tooltip', p: { html: true }  },*/
        ]);
        setCountryByCityNumbers(arrayResults);
      });
  }, []);
  console.log(countryByCityNumbers);
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
