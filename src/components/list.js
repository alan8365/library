import React, { Component } from "react";
import _ from 'lodash';
import { Row, Col, Card } from "antd";
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
              <Col key={index} lg={6} md={6} sm={8} xs={12} >
                <a href={`./book/${item.bookId}`}></a>
                <Card
                  hoverable
                  style={{ width: 220, marginBottom: '1em' }}
                  cover={<img alt={item.name} src={item.img} />}>
                  <Meta title={item.name} description={item.publishing_house} />
                </Card>
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
