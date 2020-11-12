import React from 'react';
import QRCode from 'qrcode-react';

const Demo = () => {
  return (
    <div
      style={{
        border: '4px solid #FFF',
        borderRadius: 4,
        width: 256,
        height: 256,
        boxSizing: 'content-box',
      }}
    >
      <QRCode
        value="http://facebook.github.io/react/"
        size={256}
        bgColor="#FFF"
        fgColor="#000"
        logo="/assets/react.ico"
        logoWidth={64}
        logoHeight={64}
      />
    </div>
  );
};

export default Demo;
