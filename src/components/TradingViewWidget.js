import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget({id}) {
  const container = useRef();

  useEffect(() => {
    const existingScripts = container.current.querySelectorAll('script[data-type="tradingview-widget"]');

    if (existingScripts.length === 0) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = false;
      script.dataset.type = "tradingview-widget";
      script.innerHTML = `
        {
          "width": "980",
          "height": "610",
          "symbol": "${id === 'bitcoin' ? 'BITSTAMP:BTCUSD' : 'BITSTAMP:ETHUSD'}",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "2",
          "locale": "en",
          "enable_publishing": false,
          "hide_legend": true,
          "save_image": false,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
