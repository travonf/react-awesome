import React, { Component } from 'react';
import html2canvas from 'html2canvas';
import JsPDF from 'jspdf';
import { Button, Card } from 'antd';

export default class Expand extends Component {
  print = () => {
    const element = document.getElementById('document');
    html2canvas(element).then(canvas => {
      // HTMLCanvasElement.toDataURL()
      const imgData = canvas.toDataURL('image/png');
      const pdf = new JsPDF();
      pdf.addImage(imgData, 'JPEG', 0, 0);
      pdf.save('download.pdf');
    });
  };

  render() {
    return (
      <Card
        title={
          <div>
            <h1>将页面导出为PDF文件</h1>
            <dl>
              <dt>
                <a href="https://html2canvas.hertzen.com/">html2canvas</a>
              </dt>
              <dd>Screenshots with JavaScript</dd>
              <dt>
                <a href="http://raw.githack.com/MrRio/jsPDF/master/docs/">jsPDF</a>
              </dt>
              <dd>A library to generate PDFs in JavaScript.</dd>
            </dl>
          </div>
        }
      >
        <Button onClick={this.print}>Print</Button>
        <div
          id="document"
          style={{
            border: '1px dashed #9e9e9e',
            backgroundColor: '#f5f5f5',
            width: '210mm',
            minHeight: '297mm',
            marginTop: 10,
            // marginLeft: 'auto',
            // marginRight: 'auto',
            padding: 10,
          }}
        >
          <div>Note: Here the dimensions of div are same as A4</div>
          <div>You Can add any component here</div>
        </div>
      </Card>
    );
  }
}
