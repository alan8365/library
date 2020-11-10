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

import List from "../components/list";

const mapStateToProps = state => {
  return {
    query: _.get(state, "data.query", undefined),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    POST_BasicStatistics(payload) {
      dispatch({ type: "data/POST_BasicStatistics", payload });
    },
    SET_Query(payload) {
      dispatch({ type: "data/SET_Query", payload });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  class extends Component {

    // 假資料
    testData = [
      {
        bookId: '1',
        name: '精通 Python：運用簡單的套件進行現代運算（第二版)',
        img: 'https://img3.momoshop.com.tw/goodsimg/0007/743/816/7743816_R.jpg?t=1590486433',
        author: 'Bill Lubanovi',
        publishing_house: '歐萊禮',
        date_of_publication: '2020/06/02',
        intro: '簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介'
      },
      {
        bookId: 2,
        name: '精通 Python：運用簡單的套件進行現代運算（第二版)',
        img: 'https://img3.momoshop.com.tw/goodsimg/0007/743/816/7743816_R.jpg?t=1590486433',
        author: 'Bill Lubanovi',
        publishing_house: '歐萊禮',
        date_of_publication: '2020/06/02',
        intro: '簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介'
      },
      {
        bookId: 3,
        name: '精通 Python：運用簡單的套件進行現代運算（第二版)',
        img: 'https://img3.momoshop.com.tw/goodsimg/0007/743/816/7743816_R.jpg?t=1590486433',
        author: 'Bill Lubanovi',
        publishing_house: '歐萊禮',
        date_of_publication: '2020/06/02',
        intro: '簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介'
      },
      {
        bookId: 4,
        name: '精通 Python：運用簡單的套件進行現代運算（第二版)',
        img: 'https://img3.momoshop.com.tw/goodsimg/0007/743/816/7743816_R.jpg?t=1590486433',
        author: 'Bill Lubanovi',
        publishing_house: '歐萊禮',
        date_of_publication: '2020/06/02',
        intro: '簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介'
      }

    ]

    componentDidMount = () => {

    }




    render() {
      const { query } = this.props;



      return (
        <div id="book">
          <Space direction="vertical" style={{ width: "100%" }}>

            <Row justify="center">
              {
                this.testData
                  ?
                  this.testData.map(item=>{
                    <Row>
                    <Col lg={10} md={8} sm={12} xs={24}>
                      <img alt={item.name} src={item.img} style={{ width: '200px' }} />
                    </Col>
                    <Col lg={14} md={16} sm={12} xs={24}>
                      <div className='detail'><span className='span'>書名:</span> {item.name}</div>
                      <div className='detail'><span className='span'>作者:</span> {item.author}</div>
                      <div className='detail'><span className='span'>isbn:</span> {item.isbn}</div>
                      <div className='detail'><span className='span'>出版社:</span> {item.publishing_house}</div>
                      <div className='detail'><span className='span'>出版日期:</span> {item.date_of_publication}</div>

                      <div>
                        <a href={`/#/book/${item.bookId}`} style={{ margin: '10px' }}><Button icon={<SearchOutlined />}>查看詳細</Button></a>
                        <Button icon={<HeartOutlined />}>加入最愛書籍</Button>
                        <Button danger icon={<HeartOutlined />}>取消最愛書籍</Button>
                      </div>
                    </Col>
                    <Col>
                      <div className='detail'><span className='span'>簡介:</span> {item.intro}</div>
                    </Col>
                  </Row>
                  }) :
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
