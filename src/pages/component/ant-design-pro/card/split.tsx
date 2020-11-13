import React from 'react';
import ProCard from '@ant-design/pro-card';

export default () => (
  <ProCard title="左右分栏带标题" extra="2020年02月04日" split="vertical" headerBordered bordered>
    <ProCard title="左侧详情" colSpan="30%">
      左侧内容
    </ProCard>
    <ProCard title="右侧详情">
      <div style={{ height: '70vh' }}>右侧内容</div>
    </ProCard>
  </ProCard>
);
