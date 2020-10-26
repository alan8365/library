import React, { Component } from "react";
import { connect } from "dva";
import { Layout, Row, Col } from "antd";
import "./Layout.less";

const { Content, Footer } = Layout;
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

    // 表單送出
    onFinish = values => {
      console.log('Success:', values);
    };

    // 表單送出失敗
    onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };


    render() {
      const { children, location } = this.props;

      return (
        <Layout id="layout" className="bg" style={{backgroundImage: 'url(https://images.wallpapersden.com/image/download/minimal-ship-artwork-purple-background_63194_2048x1152.jpg)',backgroundPosition: 'center'}}>
            <div className="myRow" >
                <Row justify='center' >
        
                    <Content className='content2'>
                        {children}
                    </Content>

                </Row>
            </div>

          <Footer style={{ textAlign: "center", opacity:'0', color: '#fff' }}>
            Copyright © 2020 Created by xiao xuan lai
          </Footer>
        </Layout>
      );
    }
  }
);
