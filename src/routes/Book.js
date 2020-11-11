import React, { Component } from "react";
import _ from "lodash";
import { connect } from "dva";
import {
  Space,
  Card,
  Row,
  Col,
  Spin,
  Button
} from "antd";
import { SmileOutlined } from '@ant-design/icons';
import "./Book.less";


const mapStateToProps = state => {
  return {
    book: state.book.book,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    GET_Book(payload, callback, loading) {
      dispatch({ type: "book/GET_Book", payload, callback, loading });
    },
    POST_Favorite(payload, callback, loading) {
      dispatch({ type: "book/POST_Favorite", payload, callback, loading });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  class extends Component {

    state = {
      loading: false
    }

    // 假資料
    testData = {};
    isLike = false;


    // 點擊喜翻
    favorite = () => {
      const { POST_Favorite, match } = this.props;
      const { isbn } = match.params;
      // 喜翻書籍
      POST_Favorite(isbn, null, (loading) => this.setState({ loading }));
    }

    componentDidMount = () => {
      const { GET_Book, match } = this.props;
      const { isbn } = match.params;
      // 取得書籍
      GET_Book(isbn, null, (loading) => this.setState({ loading }));
    }




    render() {
      const { loading } = this.state;
      const { book } = this.props;

      if (book) {
        this.testData = book.detail;
        this.isLike = book.isLike;
      }

      return (
        <div id="book">
          <Space direction="vertical" style={{ width: "100%" }}>

            <Row justify="center">
              {
                !loading
                  ?
                  <Row>
                    <Col lg={8} md={8} sm={12} xs={24}>
                      <img alt={this.testData.title} src={this.testData.img_src} style={{ width: '200px' }} />
                    </Col>
                    <Col lg={16} md={16} sm={12} xs={24}>
                      <div className='detail'><span className='span'>書名:</span> {this.testData.title}</div>
                      <div className='detail'><span className='span'>作者:</span> {this.testData.author}</div>
                      <div className='detail'><span className='span'>isbn:</span> {this.testData.isbn}</div>
                      <div className='detail'><span className='span'>出版社:</span> {this.testData.publisher}</div>
                      <div className='detail'><span className='span'>出版日期:</span> {this.testData.publication_date}</div>

                      <div>
                        {
                          this.isLike === true
                            ?
                            <Button icon={<SmileOutlined rotate={180} />} onClick={this.favorite}>取消最愛書籍</Button>
                            :<Button danger icon={<SmileOutlined />} onClick={this.favorite}>加入最愛書籍</Button>
                        }
                      </div>
                    </Col>
                    <Col style={{ marginTop: '20px', padding: '20px' }}>
                      <div className='detail'><span className='span'>簡介:</span> {this.testData.summary}</div>
                    </Col>
                  </Row>
                  :
                  <div className="spin">
                    <Spin />
                  </div>}
            </Row>



          </Space>
        </div>
      );
    }
  }
);
