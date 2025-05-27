// pages/_app.js atau _app.tsx
import React from 'react';
import '../styles/globals.css'; // jika ada style global

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
