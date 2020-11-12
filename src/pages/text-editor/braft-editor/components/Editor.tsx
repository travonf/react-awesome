import React from 'react';
import PropTypes from 'prop-types';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';

// console.debug(BraftEditor.defaultProps);

class Editor extends React.PureComponent<any, any> {
  handleChange = e => {
    const { onChange } = this.props;
    if (onChange) onChange(e);
  };

  render() {
    const { value, ...restProps } = this.props;
    // console.debug('watch value', typeof value, value);
    return (
      <BraftEditor
        value={BraftEditor.createEditorState(value)}
        {...restProps}
        // onChange={this.handleChange}
      />
    );
  }
}

Editor.propTypes = {
  // value EditorState 编辑器的内容
  // defaultValue EditorState 编辑器的初始化内容，仅首次传入生效
  placeholder: PropTypes.string, // 指定Placeholder文本
  readOnly: PropTypes.bool, // 指定编辑器是否只读
  language: PropTypes.string, // 编辑器的语言
  controls: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])), // 编辑器的工具栏控件列表
  excludeControls: PropTypes.arrayOf(PropTypes.string), // 不在工具栏显示的控件列表
  extendControls: PropTypes.arrayOf(PropTypes.object), // 自定义的控件列表
  componentBelowControlBar: PropTypes.elementType, // 在工具栏和编辑区域之间显示的组件
  media: PropTypes.object, // 编辑器的多媒体功能配置，包括上传功能
  imageResizable: PropTypes.bool, // 是否允许拖动调整图片尺寸，默认为true
  imageControls: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])), // 编辑器内的图片工具栏控件
  colors: PropTypes.arrayOf(PropTypes.string), // 编辑器可用颜色列表
  fontSizes: PropTypes.arrayOf(PropTypes.number), // 编辑器可用的字号列表
  fontFamilies: PropTypes.arrayOf(PropTypes.object), // 编辑器可用的字体列表
  lineHeights: PropTypes.arrayOf(PropTypes.number), // 编辑器可用的行高列表
  textAligns: PropTypes.arrayOf(PropTypes.string), // 编辑器可用的文本对齐方式
  letterSpacings: PropTypes.arrayOf(PropTypes.number), // 编辑器可用的字间距列表
  emojis: PropTypes.arrayOf(PropTypes.string), // 编辑器可用的Emoji列表
  textBackgroundColor: PropTypes.bool, // 是否允许设置文字背景颜色
  stripPastedStyles: PropTypes.bool, // 是否以纯文本模式粘贴内容，默认为false
  className: PropTypes.string, // 编辑器的样式名
  style: PropTypes.object, // 编辑器的内联样式
  controlBarClassName: PropTypes.string, // 编辑器工具栏的样式名
  controlBarStyle: PropTypes.object, // 编辑器工具栏的内联样式
  contentClassName: PropTypes.string, // 编辑器编辑区域容器的样式名
  contentStyle: PropTypes.object, // 编辑器编辑区域容器的内联样式
  draftProps: PropTypes.object, // 直接传给DraftJS的Editor组件的属性
  // onChange Function(editorState)编辑器状态(内容、选区等)发生变化时的回调函数
  onFocus: PropTypes.func, // 编辑器获得焦点时触发的函数
  onBlur: PropTypes.func, // 编辑器失去焦点时触发的函数
  onTab: PropTypes.func, // 在编辑器内按下Tab键时触发的函数
  onDelete: PropTypes.func, // 在编辑器内按下删除键时触发的函数
  onSave: PropTypes.func, // 在编辑器内按下Command/Ctrl + s时触发的函数
  hooks: PropTypes.object, // 编辑器的行为钩子属性
};

Editor.defaultProps = {
  placeholder: null,
  readOnly: false,
  language: 'zh',
  controls: [
    'undo', // 撤销操作
    'redo', // 重做操作
    'separator', // 分割线，连续的多个separator将只显示为1个

    'font-size', // 文字字号选择器
    // 'font-family', // 文字字体选择器
    // 'line-height', // 文字行高选择器
    // 'letter-spacing', // 文字字间距选择器
    'separator',

    'text-color', // 文字颜色选择器，包含文字背景颜色设置
    'bold', // 设置文字加粗
    // 'italic', // 设置文字斜体
    // 'underline', // 设置文字下划线
    'strike-through', // 设置文字删除线
    'separator',

    // 'superscript', // 设置文字为上标
    // 'subscript', // 设置文字为下标
    // 'emoji', // Emoji表情选择器
    // 'separator',

    // 'text-indent', // 段落缩进工具，最多可缩进6级
    'text-align', // 文字对齐方式工具，可通过textAligns属性来指定可以使用哪些对齐方式
    'separator',

    // 'headings', // 段落类型（标题1-6、常规）
    'list-ul', // 无序列表
    'list-ol', // 有序列表
    // 'blockquote', // 引用段落
    'code', // 代码块
    'separator',

    'media', // 多媒体插入工具
    'link', // 链接插入工具
    // 'table',
    // 'split',
    // 'hr', // 水平线工具
    'separator',

    // 'remove-styles', // 清除文字样式
    // 'clear', // 内容清除工具
    // 'separator',

    'fullscreen', // 全屏工具
  ],
  excludeControls: [],
  extendControls: [],
  // extendAtomics: [],
  componentBelowControlBar: null,
  media: {
    pasteImage: true,
    imagePasteLimit: 5,
    image: true,
    video: true,
    audio: true,
    uploadFn: null,
    validateFn: null,
    onBeforeDeselect: null,
    onDeselect: null,
    onBeforeSelect: null,
    onSelect: null,
    onBeforeRemove: null,
    onRemove: null,
    onCancel: null,
    onFileSelect: null,
    onBeforeInsert: null,
    onInsert: null,
    onChange: null,
    accepts: {
      image: 'image/png,image/jpeg,image/gif,image/webp,image/apng,image/svg',
      video: 'video/mp4',
      audio: 'audio/mp3',
    },
    externals: { audio: true, video: true, image: true, embed: true },
  },
  imageControls: [
    'float-left',
    'float-right',
    'align-left',
    'align-center',
    'align-right',
    'link',
    'size',
    'remove',
  ],
  imageResizable: true,
  colors: [
    '#000000',
    '#333333',
    '#666666',
    '#999999',
    '#cccccc',
    '#ffffff',
    '#61a951',
    '#16a085',
    '#07a9fe',
    '#003ba5',
    '#8e44ad',
    '#f32784',
    '#c0392b',
    '#d35400',
    '#f39c12',
    '#fdda00',
  ],
  // colorPicker: null,
  // colorPickerTheme: 'dark',
  // colorPickerAutoHide: true,
  // codeTabIndents: 2,
  // headings: [
  //   'header-one',
  //   'header-two',
  //   'header-three',
  //   'header-four',
  //   'header-five',
  //   'header-six',
  //   'unstyled',
  // ],
  textAligns: ['left', 'center', 'right', 'justify'],
  textBackgroundColor: true,
  // allowInsertLinkText: false,
  // defaultLinkTarget: '',
  letterSpacings: [0, 1, 2, 3, 4, 5, 6],
  lineHeights: [1, 1.2, 1.5, 1.75, 2, 2.5, 3, 4],
  fontSizes: [12, 14, 16, 18, 20, 24, 28, 30, 32, 36, 40, 48, 56, 64, 72, 96, 120, 144],
  fontFamilies: [
    { name: 'Araial', family: 'Arial, Helvetica, sans-serif' },
    { name: 'Georgia', family: 'Georgia, serif' },
    { name: 'Impact', family: 'Impact, serif' },
    { name: 'Monospace', family: '"Courier New", Courier, monospace' },
    {
      name: 'Tahoma',
      family: 'tahoma, arial, "Hiragino Sans GB", 宋体, sans-serif',
    },
  ],
  // converts: {},
  emojis: [
    '🤣',
    '🙌',
    '💚',
    '💛',
    '👏',
    '😉',
    '💯',
    '💕',
    '💞',
    '💘',
    '💙',
    '💝',
    '🖤',
    '💜',
    '❤️',
    '😍',
    '😻',
    '💓',
    '💗',
    '😋',
    '😇',
    '😂',
    '😹',
    '😘',
    '💖',
    '😁',
    '😀',
    '🤞',
    '😲',
    '😄',
    '😊',
    '👍',
    '😌',
    '😃',
    '😅',
    '✌️',
    '🤗',
    '💋',
    '😗',
    '😽',
    '😚',
    '🤠',
    '😙',
    '😺',
    '👄',
    '😸',
    '😏',
    '😼',
    '👌',
    '😎',
    '😆',
    '😛',
    '🙏',
    '🤝',
    '🙂',
    '🤑',
    '😝',
    '😐',
    '😑',
    '🤤',
    '😤',
    '🙃',
    '🤡',
    '😶',
    '😪',
    '😴',
    '😵',
    '😓',
    '👊',
    '😦',
    '😷',
    '🤐',
    '😜',
    '🤓',
    '👻',
    '😥',
    '🙄',
    '🤔',
    '🤒',
    '🙁',
    '😔',
    '😯',
    '☹️',
    '☠️',
    '😰',
    '😩',
    '😖',
    '😕',
    '😒',
    '😣',
    '😢',
    '😮',
    '😿',
    '🤧',
    '😫',
    '🤥',
    '😞',
    '😬',
    '👎',
    '💀',
    '😳',
    '😨',
    '🤕',
    '🤢',
    '😱',
    '😭',
    '😠',
    '😈',
    '😧',
    '💔',
    '😟',
    '🙀',
    '💩',
    '👿',
    '😡',
    '😾',
    '🖕',
  ],
  stripPastedStyles: false,
  // triggerChangeOnMount: true,
  className: '',
  style: { border: '1px solid #D9D9D9', borderRadius: '4px' },
  controlBarClassName: '',
  controlBarStyle: {},
  contentClassName: '',
  contentStyle: { height: 300, boxShadow: 'inset 0 0 10px 1px rgba(0,0,0,.1)' },
  draftProps: {},
  hooks: {},
  // onChange: null,
  onFocus: null,
  onBlur: null,
  onTab: null,
  onDelete: null,
  onSave: null,
  // fixPlaceholder: false,
};

export default Editor;
