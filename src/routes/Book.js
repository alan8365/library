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
import { HeartOutlined, SearchOutlined } from '@ant-design/icons';
import "./Book.less";


const mapStateToProps = state => {
  return {
    book: state.book.book,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    GET_Book( payload, callback, loading) {
      dispatch({ type: "book/GET_Book", payload, callback , loading});
    },
    POST_Favorite( payload, callback, loading) {
      dispatch({ type: "book/POST_Favorite", payload, callback , loading});
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  class extends Component {

    state={
      loading: false
    }

    // 假資料
    item = {
      bookId: '1',
      name: '精通 Python：運用簡單的套件進行現代運算（第二版)',
      img: 'https://img3.momoshop.com.tw/goodsimg/0007/743/816/7743816_R.jpg?t=1590486433',
      author: 'Bill Lubanovi',
      publishing_house: '歐萊禮',
      publication_date: '2020/06/02',
      intro: '簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介'
    }


    // 點擊喜翻
    favorite = () => {
      const {POST_Favorite,match} = this.props;
      const {isbn} = match.params;
      // 喜翻書籍
      POST_Favorite( isbn, null, (loading) => this.setState({ loading }));
    }

    componentDidMount = () => {
      const {GET_Book,match} = this.props;
      const {isbn} = match.params;
       // 取得書籍
       GET_Book( isbn, null, (loading) => this.setState({ loading }));
    }




    render() {
      const { book } = this.props;

      if(book){
        // this.testData = bookList;
        console.log(book)
      }

      return (
        <div id="book">
          <Space direction="vertical" style={{ width: "100%" }}>

            <Row justify="center">
              {
                this.item
                  ?
                    <Row>
                    <Col lg={8} md={8} sm={12} xs={24}>
                      <img alt={this.item.name} src={this.item.img} style={{ width: '200px' }} />
                    </Col>
                    <Col lg={16} md={16} sm={12} xs={24}>
                      <div className='detail'><span className='span'>書名:</span> {this.item.name}</div>
                      <div className='detail'><span className='span'>作者:</span> {this.item.author}</div>
                      <div className='detail'><span className='span'>isbn:</span> {this.item.isbn}</div>
                      <div className='detail'><span className='span'>出版社:</span> {this.item.publishing_house}</div>
                      <div className='detail'><span className='span'>出版日期:</span> {this.item.publication_date}</div>

                      <div>
                        <Button icon={<HeartOutlined />} onClick={this.favorite}>加入最愛書籍</Button>
                        <Button danger icon={<HeartOutlined />} onClick={this.favorite}>取消最愛書籍</Button>
                      </div>
                    </Col>
                    <Col style={{marginTop: '20px', padding:'20px'}}>
                      <div className='detail'><span className='span'>簡介:</span> {this.item.intro}</div>
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
