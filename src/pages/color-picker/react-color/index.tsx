import React from 'react';
import { Row, Col, Card, message } from 'antd';
import {
  AlphaPicker,
  BlockPicker,
  ChromePicker,
  CirclePicker,
  CompactPicker,
  GithubPicker,
  HuePicker,
  MaterialPicker,
  PhotoshopPicker,
  SketchPicker,
  SliderPicker,
  SwatchesPicker,
  TwitterPicker,
} from 'react-color';
import changeTheme from '@/utils/changeTheme';
import delay from '@/utils/delay';

const ReactColor = () => {
  const [color, setColor] = React.useState<any>('#d9e3f0');

  const handleChangeComplete = async (color: any) => {
    message.loading('正在修改主题色');

    await changeTheme(false, { '@primary-color': color.hex });

    await delay(2000);
    setColor(color.hex);

    message.destroy();
    message.success('主题色修改成功');
  };

  const colResponsiveProps = {
    xs: { span: 0x18, offset: 0x00 },
    sm: { span: 0x18, offset: 0x00 },
    md: { span: 0x0c, offset: 0x00 },
    lg: { span: 0x0c, offset: 0x00 },
    xl: { span: 0x0c, offset: 0x00 },
  };

  return (
    <Row gutter={[0x18, 0x18]}>
      <Col {...colResponsiveProps}>
        <Card title="AlphaPicker" bordered={false}>
          <AlphaPicker
            color={color}
            onChangeComplete={handleChangeComplete}
            width={316}
            height={16}
            direction="horizontal"
            // renderers={{ canvas: Canvas }}
            // pointer={</>}
          />
        </Card>
      </Col>
      <Col {...colResponsiveProps}>
        <Card title="BlockPicker" bordered={false}>
          <BlockPicker
            color={color}
            onChangeComplete={handleChangeComplete}
            width={170}
            colors={[
              '#D9E3F0',
              '#F47373',
              '#697689',
              '#37D67A',
              '#2CCCE4',
              '#555555',
              '#dce775',
              '#ff8a65',
              '#ba68c8',
            ]}
            triangle="top"
            // onSwatchHover={(color, event) => {}}
          />
        </Card>
      </Col>
      <Col {...colResponsiveProps}>
        <Card title="ChromePicker" bordered={false}>
          <ChromePicker
            color={color}
            onChangeComplete={handleChangeComplete}
            disableAlpha={false}
            // renderers={{ canvas: Canvas }}
          />
        </Card>
      </Col>
      <Col {...colResponsiveProps}>
        <Card title="CirclePicker" bordered={false}>
          <CirclePicker
            color={color}
            onChangeComplete={handleChangeComplete}
            width={252}
            colors={[
              '#f44336',
              '#e91e63',
              '#9c27b0',
              '#673ab7',
              '#3f51b5',
              '#2196f3',
              '#03a9f4',
              '#00bcd4',
              '#009688',
              '#4caf50',
              '#8bc34a',
              '#cddc39',
              '#ffeb3b',
              '#ffc107',
              '#ff9800',
              '#ff5722',
              '#795548',
              '#607d8b',
            ]}
            circleSize={28}
            circleSpacing={14}
            // onSwatchHover={(color, event) => {}}
          />
        </Card>
      </Col>
      <Col {...colResponsiveProps}>
        <Card title="CompactPicker" bordered={false}>
          <CompactPicker
            color={color}
            onChangeComplete={handleChangeComplete}
            colors={[
              '#4D4D4D',
              '#999999',
              '#FFFFFF',
              '#F44E3B',
              '#FE9200',
              '#FCDC00',
              '#DBDF00',
              '#A4DD00',
              '#68CCCA',
              '#73D8FF',
              '#AEA1FF',
              '#FDA1FF',
              '#333333',
              '#808080',
              '#cccccc',
              '#D33115',
              '#E27300',
              '#FCC400',
              '#B0BC00',
              '#68BC00',
              '#16A5A5',
              '#009CE0',
              '#7B64FF',
              '#FA28FF',
              '#000000',
              '#666666',
              '#B3B3B3',
              '#9F0500',
              '#C45100',
              '#FB9E00',
              '#808900',
              '#194D33',
              '#0C797D',
              '#0062B1',
              '#653294',
              '#AB149E',
            ]}
            // onSwatchHover={(color, event) => {}}
          />
        </Card>
      </Col>
      <Col {...colResponsiveProps}>
        <Card title="GithubPicker" bordered={false}>
          <GithubPicker
            color={color}
            onChangeComplete={handleChangeComplete}
            width={200}
            colors={[
              '#B80000',
              '#DB3E00',
              '#FCCB00',
              '#008B02',
              '#006B76',
              '#1273DE',
              '#004DCF',
              '#5300EB',
              '#EB9694',
              '#FAD0C3',
              '#FEF3BD',
              '#C1E1C5',
              '#BEDADC',
              '#C4DEF6',
              '#BED3F3',
              '#D4C4FB',
            ]}
            triangle="top-left"
            // onSwatchHover={(color, event) => {}}
          />
        </Card>
      </Col>
      <Col {...colResponsiveProps}>
        <Card title="HuePicker" bordered={false}>
          <HuePicker
            color={color}
            onChangeComplete={handleChangeComplete}
            width={316}
            height={16}
            direction="horizontal"
            // pointer={}
          />
        </Card>
      </Col>
      <Col {...colResponsiveProps}>
        <Card title="MaterialPicker" bordered={false}>
          <MaterialPicker color={color} onChangeComplete={handleChangeComplete} />
        </Card>
      </Col>
      <Col {...colResponsiveProps}>
        <Card title="PhotoshopPicker" bordered={false}>
          <PhotoshopPicker
            color={color}
            onChangeComplete={handleChangeComplete}
            header="Color Picker"
            // onAccept={}
            // onCancel={}
          />
        </Card>
      </Col>
      <Col {...colResponsiveProps}>
        <Card title="SketchPicker" bordered={false}>
          <SketchPicker
            color={color}
            onChangeComplete={handleChangeComplete}
            disableAlpha={false}
            presetColors={[
              '#D0021B',
              '#F5A623',
              '#F8E71C',
              '#8B572A',
              '#7ED321',
              '#417505',
              '#BD10E0',
              '#9013FE',
              '#4A90E2',
              '#50E3C2',
              '#B8E986',
              '#000000',
              '#4A4A4A',
              '#9B9B9B',
              '#FFFFFF',
            ]}
            width={200}
            // renderers={{ canvas: Canvas }}
            // onSwatchHover={(color, event) => {}}
          />
        </Card>
      </Col>
      <Col {...colResponsiveProps}>
        <Card title="SliderPicker" bordered={false}>
          <SliderPicker
            color={color}
            onChangeComplete={handleChangeComplete}
            // pointer={}
          />
        </Card>
      </Col>
      <Col {...colResponsiveProps}>
        <Card title="SwatchesPicker" bordered={false}>
          <SwatchesPicker
            color={color}
            onChangeComplete={handleChangeComplete}
            width={320}
            height={360}
            // colors={}
            // onSwatchHover={(color, event) => {}}
          />
        </Card>
      </Col>
      <Col {...colResponsiveProps}>
        <Card title="TwitterPicker" bordered={false}>
          <TwitterPicker
            color={color}
            onChangeComplete={handleChangeComplete}
            width={276}
            colors={[
              '#FF6900',
              '#FCB900',
              '#7BDCB5',
              '#00D084',
              '#8ED1FC',
              '#0693E3',
              '#ABB8C3',
              '#EB144C',
              '#F78DA7',
              '#9900EF',
            ]}
            triangle="top-left"
            // onSwatchHover={(color, event) => {}}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default ReactColor;
