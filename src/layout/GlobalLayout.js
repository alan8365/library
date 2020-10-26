import React, { Component } from "react";
import { connect } from "dva";
import { Layout, Input, Menu, Dropdown, Avatar, Form , Row, Col } from "antd";
import { HeartOutlined, UserOutlined, LogoutOutlined, SearchOutlined } from '@ant-design/icons';
import "./GlobalLayout.less";

const { Header, Content, Footer, Sider } = Layout;
const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    goToRoute(payload) {
      dispatch({ type: "global/goToRoute", payload });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  class extends Component {

    // 搜尋表單送出
    onFinish = values => {
      console.log('Success:', values);
    };

    // 搜尋表單送出失敗
    onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };

    // 下拉式選單
    menu = (
      <Menu >
        <Menu.Item key="1" icon={<HeartOutlined />}>
        <a href='/#/favorites'>最愛書籍</a>
        </Menu.Item>
        <Menu.Item key="2" icon={<LogoutOutlined />}>
          <a href='/#/login'>登出</a>
        </Menu.Item>
      </Menu>
    );

    render() {
      const { children, location } = this.props;

      return (
        <Layout className="layout">

          <Header className='header'>
            <div className="logo"><a href='/#/index' style={{color: 'rgb(244 177 184)'}}>圖書資訊系統</a></div>
            <Row gutter={{ lg: 24, md: 12, sm: 6, xs: 3 }} justify="space-between">

              <Col lg={22} md={22} sm={20} xs={20} style={{marginTop:15}}>
                <Form
                  name="search"
                  initialValues={{ remember: true }}
                  onFinish={this.onFinish}
                  onFinishFailed={this.onFinishFailed}
                >
                  <Form.Item
                    name="keyword"
                  >
                    <Input size="small" placeholder="搜尋書籍" prefix={<SearchOutlined />} />
                  </Form.Item>
                </Form>
              </Col>


              <Col lg={2} md={2} sm={4} xs={4}>
                <Dropdown placement="bottomCenter" arrow overlay={this.menu}>
                  <Avatar style={{ backgroundColor: '#CA8EFF' }} icon={<UserOutlined />} />
                </Dropdown>
              </Col>

            </Row>
          </Header>

          <Layout>

            <Layout style={{ paddingTop: '40px' }}>
              <Content className="content">{children}</Content>
            </Layout>

          </Layout>

          <Footer style={{ textAlign: "center" }}>
            Copyright © 2020 Created by xiao xuan lai
          </Footer>
        </Layout>
      );
    }
  }
);
