import React from 'react';
import { Layout, Icon } from 'antd';
import styled from 'styled-components';
import LayOut from './LayOut';

const { Header, Content } = Layout;


const Wrapper = styled.div`
  height: 100%;
`;
export default class HomeContent extends React.Component {
  render() {
    return (
      <Wrapper>
        <LayOut>
          <Header style={{ background: '#fff', padding: 0, height: '60px' }}>
            <Icon
              className="trigger"
            />
            <span style={{ fontSize: '20px', marginLeft: '20px' }}>HOME</span>
          </Header>
          <Content style={{ padding: 24, background: '#eee', minHeight: 280, overflowY: 'auto' }}>
            Home Content
          </Content>
        </LayOut>
      </Wrapper>
    );
  }
}
