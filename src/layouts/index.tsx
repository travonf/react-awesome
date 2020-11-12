import React from 'react';
import { uniq } from 'ramda';
import { Typography, Space, Tag } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { IBestAFSRoute } from '@umijs/plugin-layout';
import flatRoutes from '@/utils/flatRoutes';
import targetBlank from '@/utils/targetBlank';
import {
  MailOutlined,
  HomeOutlined,
  CodeOutlined,
  GithubOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import styles from './index.less';

type isCurrentRouteFn = (pathname: string) => (route: any) => boolean;
const isCurrentRoute: isCurrentRouteFn = path => route => route.path === path;

interface IRoute extends IBestAFSRoute {
  name: string;
  version?: string;
  description?: string;
  keywords?: string[];
  author?:
    | string
    | {
        name: string;
        email: string;
        url?: string;
      };
  authors?: string[];
  contributors?:
    | string[]
    | {
        name: string;
        email: string;
        url?: string;
      }[];
  license?: 'MIT' | 'Apache-2.0' | 'BSD-3-Clause' | 'GPL-3.0' | string;
  homepage?: string;
  repository?: string | { type: string; url: string };
  bugs?: { url: string };
  scripts?: { [key: string]: string };
  dependencies: { [key: string]: string };
  devDependencies?: { [key: string]: string };
  peerDependencies?: { [key: string]: string };
  optionalDependencies?: { [key: string]: string };
}

const Library: React.FC<any> = props => {
  const { location, routes } = props;
  const { pathname } = location;
  const route: IRoute = flatRoutes(routes).find(isCurrentRoute(pathname));

  return (
    <PageContainer
      tags={<Tags data={route?.keywords || []} />}
      content={<Content data={route} />}
      extra={[
        <Tag key="v" color="orange">
          {route?.version}
        </Tag>,
        <Tag key="l" color="magenta">
          {route?.license}
        </Tag>,
      ]}
    >
      {props.children}
    </PageContainer>
  );
};

export default Library;

const Tags: React.FC<{ data: string[] }> = ({ data = [] }) => {
  return (
    <div className={styles.tags}>
      {uniq(data).map(item => (
        <a key={item} {...targetBlank} href={`https://github.com/topics/${item}`}>
          <Tag color="blue" style={{ cursor: 'pointer' }}>
            {item}
          </Tag>
        </a>
      ))}
    </div>
  );
};

const authorEl = ({ name, email, url }: any) => (
  <span key={name} className={styles.author}>
    {email ? (
      <a href={`mailto:${email}`}>
        <MailOutlined className={styles.icon} />
        {name}
      </a>
    ) : (
      name
    )}
  </span>
);

const Content: React.FC<{ data: IRoute }> = ({ data = {} as IRoute }) => {
  const {
    description,
    author,
    authors,
    homepage,
    repository = {} as IRoute['repository'],
    bugs = {} as IRoute['bugs'],
  } = data;

  // if (!description) {
  //   return null;
  // }

  const authorList = [];
  if (author) {
    authorList.push(analysisAuthor(author));
  }
  if (authors) {
    authors.forEach(author => {
      authorList.push(analysisAuthor(author));
    });
  }

  const repo = typeof repository === 'object' ? repository : { type: 'any', url: repository };

  return (
    <>
      <Typography.Paragraph className={styles.paragraph}>
        {description} - {authorList.map(authorEl)}
      </Typography.Paragraph>
      <Space size="middle" className={styles.space}>
        <a {...targetBlank} href={homepage}>
          <HomeOutlined className={styles.icon} />
          Homepage
        </a>
        <a {...targetBlank} href={repo?.url}>
          {repo?.type === 'git' || repo?.url?.indexOf('github.com') !== -1 ? (
            <GithubOutlined className={styles.icon} />
          ) : (
            <CodeOutlined className={styles.icon} />
          )}
          Repository
        </a>
        <a {...targetBlank} href={bugs?.url}>
          <ExclamationCircleOutlined className={styles.icon} />
          Issue
        </a>
      </Space>
    </>
  );
};

function analysisAuthor(author: IRoute['author']) {
  if (typeof author === 'object') {
    return author;
  }
  if (typeof author === 'string') {
    const defaultResult = [author, author, ''];
    const [all, name, email] = author.match(/(.*) ?<(.*)>/) || defaultResult;
    return { name, email };
  }
  return { name: '', email: '' };
}
