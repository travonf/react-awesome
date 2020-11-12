import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';

const Demo = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>React Helmet Async</title>
          <link rel="canonical" href="#" />
        </Helmet>
        <h1>React Helmet Async</h1>
      </HelmetProvider>
    </div>
  );
};

export default Demo;
