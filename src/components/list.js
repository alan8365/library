import React, { Component } from "react";
import _ from 'lodash';
import { Row, Col, Card, Button } from "antd";
import { SearchOutlined, HeartOutlined } from '@ant-design/icons';
import "./list.less";
const { Meta } = Card;

export default class List extends Component {


    componentDidMount = () => {
    }

    componentDidUpdate = () => {
    }

    render() {
        const {allBooks} = this.props;

        // 取得所有專案並塞資料
        let data;
        if(allBooks){
          data = allBooks.map((item,index) =>{
            return(
              <Col key={index} lg={12} md={24} sm={24} xs={24} >
                  <div className='block'>
                      <Row>
                        <Col lg={10} md={8} sm={12} xs={12}>
                          <img alt={item.name} src={item.img} style={{width: '200px'}} />
                        </Col>
                        <Col lg={14} md={16} sm={12} xs={12}>
                          <div className='detail'><span className='span'>書名:</span> {item.name}</div>
                          <div className='detail'><span className='span'>作者:</span> {item.author}</div>
                          <div className='detail'><span className='span'>isbn:</span> {item.isbn}</div>
                          <div className='detail'><span className='span'>出版社:</span> {item.publishing_house}</div>
                          <div className='detail'><span className='span'>出版日期:</span> {item.date_of_publication}</div>
                          <div className='detail'><span className='span'>簡介:</span> {item.intro}</div>
                          <div>
                            <a href={`/#/book/${item.bookId}`} style={{margin: '10px'}}><Button icon={<SearchOutlined />}>查看詳細</Button></a>
                            <Button icon={<HeartOutlined />}>加入最愛書籍</Button>
                            <Button danger icon={<HeartOutlined />}>取消最愛書籍</Button>
                          </div>
                        </Col>
                      </Row>
                  </div>
              </Col>
            )
          })
        };

        return (
        <div className='list'>
          <Row gutter={24}>
            {data}
          </Row>
        </div>
        );
    }
}
