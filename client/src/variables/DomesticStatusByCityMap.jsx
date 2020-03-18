import React, { useState, useEffect } from 'react';
import Chart from 'react-google-charts';

function DomesticStatusByCityMap() {
  const [domesticByCityNumbers, setDomesticByCityNumbers] = useState([]);

  useEffect(() => {
    fetch('/domesticStatusByCity/code')
      .then(res => res.json())
      .then(results => {
        let arrayResults = Object.keys(results).map(key => {
          return [
            { v: key.split(',')[0], f: key.split(',')[1] },
            Number(results[key].confirmator),
            Number(results[key].dead),
          ];
        });
        arrayResults.unshift(['City', '확진자', '사망자']);
        setDomesticByCityNumbers(arrayResults);
      });
  }, []);
  return (
    <Chart
      chartType="GeoChart"
      data={domesticByCityNumbers}
      options={{
        region: 'KR',
        resolution: 'provinces',
        colorAxis: {
          colors: [
            '#FFD8D8',
            '#FFB4B4',
            '#FF5A5A',
            '#FF4848',
            '#FF3636',
            '#FF2424',
          ],
        },
        displayMode: 'regions',
        enableRegionInteractivity: 'true',
        keepAspectRatio: true,
        backgroundColor: 'transparent',
        legend: 'none',
      }}
      // Note: you will need to get a mapsApiKey for your project.
      // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
      mapsApiKey="YOUR_KEY_HERE"
      rootProps={{ 'data-testid': '2' }}
    />
  );
}

export default DomesticStatusByCityMap;
