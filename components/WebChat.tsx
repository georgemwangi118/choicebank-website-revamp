'use client';

import Script from 'next/script';

export default function WebChat({ nonce }: { nonce?: string }) {
  return (
    <>
      <div
        id="telvoip-chat-root"
        className="telvoip-chat-root"
        data-widget-position="right"
      >
        <button
          className="floating-button"
          aria-label="Open chat support"
          onClick={() => {
            const el = document.getElementById('chat-container');
            el?.classList.toggle('show');
          }}
        >
          <span className="badge-telvoip"></span>
          <span className="material-icons-telvoip">forum</span>
        </button>

        <div id="chat-container">
          <iframe
            id="chat-iframe"
            src="https://app.telvoip.io/web-chat?t=1d0d3c13-7c43-4552-96e4-bbc660f1c896"
            title="Web Chat Widget"
            frameBorder="0"
          />
          <button
            className="close-button"
            onClick={() => {
              const el = document.getElementById('chat-container');
              el?.classList.remove('show');
            }}
          >
            ✖
          </button>
        </div>
      </div>

      <Script src="/telvoip-init.js" strategy="afterInteractive" nonce={nonce} />
    </>
  );
}
