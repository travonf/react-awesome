import React, { Component } from 'react';
import { Button, Pagination } from 'antd';
import { Document, Page, pdfjs } from 'react-pdf';
import styles from './index.less';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Demo extends Component {
  state = {
    numPages: 1,
    pageNumber: 1,
  };

  onDocumentLoadSuccess = ({ numPages }: any) => {
    this.setState({ numPages });
  };

  handlePage = (pageNumber: number) => {
    this.setState({ pageNumber });
  };

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div className={styles.wrapper}>
        <Document
          file="/assets/sample.pdf"
          onLoadSuccess={this.onDocumentLoadSuccess}
          // onLoadError={console.debug}
        >
          <Page pageNumber={pageNumber} width={800} />
        </Document>
        <Pagination
          style={{ marginTop: 8 }}
          simple
          defaultPageSize={1}
          total={numPages}
          onChange={this.handlePage}
        />
      </div>
    );
  }
}

export default Demo;
