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




    // 點擊喜翻
    favorite = () => {
      const { POST_Favorite, match, GET_Book } = this.props;
      const { isbn } = match.params;
      // 喜翻書籍
      POST_Favorite(isbn, null, (loading) => this.setState({ loading }));
      // 取得書籍
      GET_Book(isbn, null, (loading) => this.setState({ loading }));
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
      let data;
      if (book) {
        data =
          <Row>
            <Col lg={8} md={8} sm={12} xs={24}>
              <img alt={book.detail.title} src={book.detail.img_src} style={{ width: '200px' }} />
            </Col>
            <Col lg={16} md={16} sm={12} xs={24}>
              <div className='detail'><span className='span'>書名:</span> {book.detail.title}</div>
              <div className='detail'><span className='span'>作者:</span> {book.detail.author}</div>
              <div className='detail'><span className='span'>isbn:</span> {book.detail.isbn}</div>
              <div className='detail'><span className='span'>出版社:</span> {book.detail.publisher}</div>
              <div className='detail'><span className='span'>出版日期:</span> {book.detail.publication_date}</div>

              <div>
                <Button className={book.isLike ?'isLike':'isUnLike'} icon={book.isLike ? <SmileOutlined rotate={180} /> : <SmileOutlined />} onClick={this.favorite}>{book.isLike ? '取消最愛書籍' : '加入最愛書籍'}</Button>
              </div>
            </Col>
            <Col style={{ marginTop: '20px', padding: '20px' }}>
              <div className='detail'><span className='span'>簡介:</span> {book.detail.summary}</div>
            </Col>
          </Row>

      }

      return (
        <div id="book">
          <Space direction="vertical" style={{ width: "100%" }}>

            <Row justify="center">

              {data}

            </Row>



          </Space>
        </div>
      );
    }
  }
);
