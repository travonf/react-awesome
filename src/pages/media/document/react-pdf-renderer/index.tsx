import React from 'react';
import { Card } from 'antd';
// import { dirname } from 'path';
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from './Component';

// eslint-disable-next-line react/prefer-stateless-function
export default class MyApp extends React.Component {
  render() {
    // console.log(__dirname);
    return (
      <PDFViewer width={800} height={600}>
        <MyDocument />
      </PDFViewer>
    );
  }
}
