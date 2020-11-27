import React from 'react';
import CheckListItemElement from './check-list-item';

/**
 * 渲染Block Element很简单
 * 只需要根据element.type区分渲染的组件即可
 */
const Element: React.FC<any> = props => {
  const { attributes, children, element } = props;

  switch (element.type) {
    case 'check-list-item':
      return <CheckListItemElement {...props} />;

    case 'link':
      return (
        <a {...attributes} href={element.url}>
          {children}
        </a>
      );

    case 'table':
      return (
        <table>
          <tbody {...attributes}>{children}</tbody>
        </table>
      );

    case 'table-row':
      return <tr {...attributes}>{children}</tr>;

    case 'table-cell':
      return <td {...attributes}>{children}</td>;

    default:
      return <p {...attributes}>{children}</p>;
  }
};

export default Element;
