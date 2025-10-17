const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

// ✅ Example usage: log metrics in console
reportWebVitals(console.log);

// ✅ Example usage: send metrics to Google Analytics or custom endpoint
// reportWebVitals(metric => {
//   fetch('https://your-endpoint.com/metrics', {
//     method: 'POST',
//     body: JSON.stringify(metric),
//     headers: { 'Content-Type': 'application/json' },
//   });
// });

export default reportWebVitals;
