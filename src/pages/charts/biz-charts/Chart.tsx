import React from 'react';
import PropTypes from 'prop-types';
import { Axis, Chart, Coord, Geom, Label, Legend, Tooltip } from 'bizcharts';
import DataSet from '@antv/data-set';

function BasicChart(props) {
  const {
    data,
    Axis: [x, y],
  } = props;
  const ds = new DataSet();
  const dv = ds.createView().source(data);
  return (
    // 图表最顶级的组件，控制着图表的创建、绘制、销毁等。
    <Chart
      renderer="canvas" // 指定图表的渲染方式，自BizCharts 3.2.1-beta.2版本开始，支持 chart 级别使用 svg 渲染。
      forceFit // 图表的宽度自适应开关，默认为 false，设置为 true 时表示自动取 dom（实例容器）的宽度。
      // width // 指定图表的宽度，默认单位为 'px'，当 forceFit: true 时宽度配置不生效。
      height={500} // 指定图表的高度，单位为 'px'。
      padding={80} // 图表内边距
      // pixelRatio // 设置设备像素比，默认取浏览器的值 window.devicePixelRatio。
      data={dv} // 设置图表的数据源，data 是一个包含 JSON 对象的数组或者 DataSet.View 对象。
      // placeholder // 图表source为空时显示的内容，未设置该属性时为G2 默认样式。
      scale={{
        [x]: {
          alias: 'X轴', // 数据字段的别名，会影响到轴的标题内容
          // type: 'linear', // 指定数据类型
          // formatter: () => {}, // 格式化文本内容，会影响到轴的label格式
          // range: array, // 输出数据的范围，默认[0, 1]，格式为 [min, max]，min 和 max 均为 0 至 1 范围的数据。
          tickCount: 12, // 设置坐标轴上刻度点的个数
          // ticks: array, // 用于指定坐标轴上刻度点的文本信息，当用户设置了 ticks 就会按照 ticks 的个数和文本来显示
          // sync: boolean // 当 chart 存在不同数据源的 view 时，用于统一相同数据属性的值域范围
        },
        [y]: {
          alias: 'Y轴',
        },
      }} // 配置数据比例尺，该配置会影响数据在图表中的展示方式。
      // filter // 过滤数据，如果存在对应的图例，则过滤掉的字段置灰。 Array:[[fieldString1, callback1], [fieldString2, callback2]]
      // className // 设置图表最外层div的类名。
      // style={} // 设置图表最外层div的样式。
      // background // 设置图表整体的边框和背景样式，是一个对象
      // plotBackground // 图表绘图区域的边框和背景样式，是一个对象
      animate // 图表动画开关，默认为 true，即开启动画。
      theme="dark" // 设置当前图表的主题，默认提供 "default" 和 "dark" 样式。也可以是一个包含主题配置项的对象，具体配置项参考图表皮肤内容。
    >
      {/* 坐标系组件，设置 BasicChart 或者 View 的坐标系类型。 */}
      <Coord
        type="rect" // 坐标系类型;不同类型的坐标系所支持的配置属性也不一样。
        // rotate // 坐标系旋转，angle 表示旋转的度数，单位为角度。
        scale={[1.0, 1.0]} // 放大、缩小，默认按照坐标系中心放大、缩小。 参数为长度2的数组，第一个值代表 x 方向缩放比例，第二个值代表 y 方向缩放比例。
        // transpose // 将坐标系 x 轴和 y 轴交换.
        // reflect="x" // 镜像, 沿 x 方向镜像或者沿 y 轴方向映射。默认值为：'y'. 如果参数是个数组，将依次调用.例如['x', 'y'] 则先执行x方向翻转reflect('x') 再执行y方向翻转reflect('y'),以此类推。

        // polar、theta 类型的极坐标系配置
        // radius // 设置半径，值为 0 至 1 的小数
        // innerRadius // 内部极坐标系的半径，[0 - 1]的小数
        // startAngle // 	起始角度（弧度）
        // endAngle // 结束角度（弧度）
      />

      {/* 坐标轴组件，控制图表中坐标轴的样式等。 */}
      <Axis
        name={x} // 当前坐标轴对应数据源中的字段名(必填)
        visible // 当前坐标轴是否需要可见，默认值true。
        position="bottom" // 设置当前坐标轴的摆放位置，可设置的值为top、bottom、left、right。
        title // 当前坐标轴标题是否需要显示,及其样式配置。
        // line // 设置坐标轴线的样式，包括线的颜色、粗细等。如果该属性值为 null 则表示不展示坐标轴线。
        // tickLine // 设置坐标轴的刻度线。如果该属性值为 null 则表示不展示。
        // label // 设置坐标轴文本的样式。如果该属性值为 null 则表示不展示坐标轴文本。
        // grid // 设置坐标轴网格线的样式，网格线与坐标轴线垂直。如果该属性值为 null 则表示不展示。
        // min
        // zIndex
        // subTickCount // 当前坐标轴次刻度线个数。
        // subTickLine // 当前坐标轴次刻度线样式配置。
      />
      <Axis
        name={y}
        visible
        position="left"
        title
        // line
        // tickLine
        // label
        // grid
        // min
        // zIndex
        // subTickCount
        // subTickLine
      />

      {/* 几何标记对象，决定创建图表的类型。 */}
      <Geom
        type="interval" // 几何标记类型
        // adjust // 声明几何标记对象的数据调整方式，可用于绘制层叠图、扰动图、分组图等。支持单一的数据调整方式也支持各种数据调整方式的组合。
        position={`${x}*${y}`} // 位置属性的映射；用于确定由数据中的哪几个字段来确定数据在平面坐标系的位置。通俗地解释，即确定 x 轴和 y 轴的数据字段。它是唯一一个可以用于编码分类又可用于编码定序或者定量的数据属性。
        color={[x, '#FF6666-#FFCC99-#FFFF66']} // field 为数据字段名，内部会使用主题中的默认颜色进行数据值到颜色值的映射；
        shape="rect" // 将数据值映射到图形的形状上的方法。
        opacity={1.0} // 将数据值映射到图形的透明度上的方法。
        // size // 对于不同的几何标记含义不完全一致：对于 point 点来说，size 对应着点的半径；对于 line 线来说，size 对应着线的粗细；对于 interval 柱状图来说，size 对应着柱子的宽度。
        // style // 配置几何图形的样式。 当 style 的值是 Object 时，该 Object 中只能设置固定样式。 当 style 的值是 Array 时，可以通过回调函数根据具体的数据去动态配置样式。
        // tooltip={x} // 将数据值映射到 Tooltip 上。
        // active // 开启以及关闭 shape 对于鼠标 hover 时的响应效果，G2 默认为各个 geom 内置了 active 效果 。
        // animate // 定义几何标记上的动画效果，具体配置参数及使用参见animate文档
        // line
        // select // 开启、关闭以及设置 shape 对于鼠标 click 事件的响应效果。BizCharts 默认仅为饼图开启了选中效果。
        // selected
      >
        {/* 几何标记对象上的文本。 */}
        <Label
          content={y} // 指定 label 上显示的文本内容，可以是数据纬度，也可以自定义。
          // labelEmit
          // labelLine // 文本距离几何线的配置，如果值为false，表示不展示文本线。默认不展示。
          position="top" // 设置文本处于几何图形的哪个位置，支持的配置："top" | "middle" | "bottom"
          // offset // 设置文本距离几何图形的的距离
          // textStyle // 文本的图形样式。其他样式请参考绘图属性
          autoRotate // 是否需要自动旋转，默认值：true。
          formatter={text => `${text}个单位`} // 用于格式化坐标轴上显示的文本信息。
          // htmlTemplate // 自定义 html 文本
        />
      </Geom>

      {/* 图例。 */}
      <Legend
        // name // 图例的对应到数据源中的数据字段名，不传则默认设置所有图例。
        visible // 图例是否可见,默认值:true。
        position="top-center" // 设置图例的显示位置，可设置的值有12个：left-top,left-center,left-bottom,right-top,right-bottom, right-center,top-left,top-center,top-bottom,bottom-left,bottom-center,bottom-right。也可使用bottom,top,left,right设置位置，此时对应的值分别为bottom-center,top-center,left-bottom,right-bottom。
        // title // 图例标题的显示样式设置，如果值为 null，表示不展示图例标题，默认不展示。
        // offsetX // 图例 x 方向的偏移值，数值类型，数值单位为 'px'，默认值为 0。
        offsetY={-20} // 图例 Y 方向的偏移值，数值类型，数值单位为 'px'，默认值为 0。
        // 分类类型
        // layout // 对分类类型的图例生效，用于设置各个图例项的排列方式，可设置值包括：vertical、horizontal，分别表示垂直和水平排布。
        // itemGap // 对分类类型的图例生效，表示图例每项之间的间距，如果是水平排布则为左右间距，如果是竖直排布则为上下间距。
        // itemMarginBottom // 对分类类型的图例生效，表示各个图例项垂直方向的间距。
        // itemWidth // 对分类类型的图例生效，设置图例项的宽度，当图例有很多图例项，并且用户想要这些图例项能垂直对齐时，此时这个属性可帮用户实现此效果。
        // unChecked // 对分类类型的图例生效，用于取消选中的图例文本颜色。
        // background // 对分类类型的图例生效，用于设置图例的背景样式。
        // allowAllCanceled // 对分类类型的图例生效，表示是否允许所有图例项被取消选中，默认为 false，即必须保留一个被选中的图例项。
        // itemFormatter // 回调函数，用于格式化图例每项的文本显示。
        // marker // 对分类类型的图例生效，用于设置图例的 marker 样式，默认按照 geom 的类型显示。
        // textStyle // 图例的背景样式配置。参考绘图属性Text的样式
        // attachLast // 是否启用尾部跟随图例(tail-legend)，尾部跟随图例自动跟随geom的最后一个数据点，适用的图表类型为line、stackLine、area、stackArea。 默认为 false ，即不启用。
        // clickable // 对分类类型的图例生效，设置图例项是否允许点击，默认为 true，即允许点击。
        // hoverable // 对分类类型的图例生效，设置是否开启鼠标 hover 至图例的交互效果，默认为 true，即开启动画。
        // selectedMode // 针对分类类型图例，当 clickable 为 true 时该配置项生效，用于设置图例的选中交互模式，
        // onHover // 针对分类类型的图例，用于自定义鼠标 hover 图例项的交互，当 hoverable 为 false 不生效。
        // onClick // 针对分类类型的图例，用于自定义鼠标点击图例项的交互，当 clickable 为 false 不生效。
        // useHtml // 针对分类类型图例，用于开启是否使用 html 渲染图例，默认为 false，true 表示使用 html 渲染图例。
        // container // 当 useHtml 为 true 时生效，用于指定生成图例的 dom 容器，那么该值必须为 dom 容器的 id 值为分类类型的话，则支持传入索引值。
        // containerTpl // 当 useHtml 为 true 时生效，用于指定图例容器的模板
        // itemTpl // 当 useHtml 为 true 时生效，用于指定生成图例的图例项 html 模板
        // scroll // 当用户使用 html 的时候，超出高度或者宽度会自动换行。
        // slidable // 针对连续图例，用于设置连续图例是否允许滑动，默认为 true，即开启滑动操作。
        // width // 针对连续图例，用于设置图例的宽度。
        // height // 针对连续图例，用于设置图例的高度。
      />

      {/* 提示 */}
      <Tooltip
        // useHtml // 是否使用html渲染，默认为true, false 时使用canvas渲染。
        // type="mini" // tooltip 类型，mini 则启动显示单个数据值的 miniTooltip。
        // triggerOn // tooltip 的触发方式,可配置的值为：'mousemove'、'click'、'none'，默认为 mousemove。
        // enterable // 用于控制是否允许鼠标进入 tooltip，默认为 false，即不允许进入。
        showTitle // 是否展示提示信息的标题，默认为 true，即展示，通过设置为 false 来隐藏标题。
        title // 设置 tooltip 的标题展示的数据字段，设置该字段后，该标题即会展示该字段对应的数值。showTitle 为 false 时，该设置不生效。
        crosshairs={{ type: 'rect' }} // 是一个对象类型，用于设置 tooltip 的辅助线或者辅助框。
        // offset // 设置 tooltip 距离鼠标的偏移量。
        // containerTpl // tooltip 默认的容器模板
        itemTpl={`<li data-index={index}><span style="background-color:{color};width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:8px;"></span>{name}: {value}个单位</li>`} // tooltip 每项记录的模版，这个属性可以格式化 tooltip 的显示内容。
        // inPlot // 设置是否将 tooltip 限定在绘图区域内，默认为 true，即限定在绘图区域内。
        // follow // 设置 tooltip 是否跟随鼠标移动。默认为 true，即跟随。
        // shared // 是否展示多条 tooltip, 默认值:true; false表示只展示单条 tooltip。
        // position // 该属性设置之后，就会在固定位置展示 tooltip，可设置的值为：left、right、top、bottom。
      />

      {/* 坐标轴组件，控制图表中坐标轴的样式等。 */}
      {/* <Guide /> */}

      {/* 控制 BasicChart 分面。 */}
      {/* <Facet /> */}

      {/* 视图组件。 */}
      {/* <View /> */}
    </Chart>
  );
}

BasicChart.propTypes = {
  data: PropTypes.array,
  Axis: PropTypes.array,
};

BasicChart.defaultProps = {
  data: [],
  Axis: ['x', 'y'],
};

export default BasicChart;
