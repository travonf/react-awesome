import React from 'react';
import { injectIntl, IntlProvider, FormattedRelativeTime } from 'react-intl';

const PostDate = injectIntl(({ date, intl }) => (
  <span title={intl.formatDate(date)}>
    <FormattedRelativeTime value={100} />
  </span>
));

const App = ({ post }) => (
  <div>
    <h1>{post.title}</h1>
    <p>
      <PostDate date={post.date} />
    </p>
    <div>{post.body}</div>
  </div>
);

const ReactIntl = () => {
  return (
    <div>
      <IntlProvider locale={navigator.language}>
        <App
          post={{
            title: 'Hello, World!',
            date: new Date(),
            body: 'Amazing content.',
          }}
        />
      </IntlProvider>
    </div>
  );
};

export default ReactIntl;
