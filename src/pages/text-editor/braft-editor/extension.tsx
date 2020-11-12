import React from 'react';

// 编写扩展模块

// 着重号
const textEmphasis = {
  textEmphasis: 'circle',
  textEmphasisPosition: 'under',
  WebkitTextEmphasis: 'circle',
  WebkitTextEmphasisPosition: 'under',
};
export const underDotExt = {
  // 指定扩展类型
  type: 'inline-style',
  // 指定扩展对哪些编辑器生效，不指定includeEditors则对所有编辑器生效
  // includeEditors: ['braft-editor'],
  // 指定扩展名，推荐使用全大写
  name: 'UNDERDOT',
  control: {
    text: '着重号',
  },
  // 指定该扩展样式的css规则，请注意，IE/EDGE浏览器暂时不支持textEmphasis
  style: textEmphasis,
  // 指定html转换为editorState时，何种规则的内容将会附加上该扩展样式
  // 如果编辑器在createEditorState时使用的时RAW数据，
  // 并且开启了stripPastedStyles，则可以不指定importer，
  // 因为不存在html转editorState的场景
  importer: (nodeName: string, node: any) => {
    // console.log(nodeName, node);
    return (
      nodeName === 'span' &&
      [].find.call(node.style, (styleName: string) => styleName.indexOf('text-emphasis') !== -1)
    );
  },
  // 指定该样式在输出的html中如何呈现，
  // 对于inline-style类型的扩展可以不指定exporter，
  // 输出样式即为该扩展的style
  exporter: () => {
    return <span style={textEmphasis} />;
  },
};

// 按键效果
export const keyboardExt = {
  type: 'entity',
  // includeEditors: ['braft-editor'],
  name: 'KEYBOARD',
  control: {
    text: '按键',
  },
  // 指定entity的mutability属性，可选值为MUTABLE和IMMUTABLE，
  // 表明该entity是否可编辑，默认为MUTABLE
  mutability: 'IMMUTABLE',
  // 指定通过上面新增的按钮创建entity时的默认附加数据
  data: {
    foo: 'bar',
  },
  // 指定entity在编辑器中的渲染组件
  component: (props: any) => {
    // 通过entityKey获取entity实例，关于entity实例请参考
    // https://github.com/facebook/draft-js/blob/master/src/model/entity/DraftEntityInstance.js
    const entity = props.contentState.getEntity(props.entityKey);
    // 通过entity.getData()获取该entity的附加数据
    const { foo } = entity.getData();
    return (
      <span data-foo={foo} className="keyboard">
        {props.children}
      </span>
    );
  },
  // html -> editorState
  // source: create|paste|undefined
  importer: (nodeName: string, node: any, source: any) => {
    // console.log(nodeName, node, source);
    if (nodeName.toLowerCase() === 'span' && node.classList?.contains('keyboard')) {
      // 此处可以返回true或者一个包含mutability和data属性的对象
      return {
        mutability: 'IMMUTABLE',
        data: {
          foo: node.dataset.foo,
        },
      };
    }
    return false;
  },
  // editorState -> html
  exporter: (entityObject: any, originalText: any) => {
    const { foo } = entityObject.data;
    return (
      <span data-foo={foo} className="keyboard">
        {originalText}
      </span>
    );
  },
};
