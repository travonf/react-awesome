import React from 'react';

/**
 * 渲染Mark Element很简单
 * 只需要判断leaf中是否存在对应的标记
 * 存在则包裹相应的HTML Tag即可
 */
const Leaf: React.FC<any> = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  return <span {...attributes}>{children}</span>;
};

export default Leaf;
