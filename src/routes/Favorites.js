import React, { Component } from "react";
import _ from "lodash";
import { connect } from "dva";
import {
  Space,
  Card,
  Row
} from "antd";
import "./Favorites.less";

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
        <div id="favorites">
          <Space direction="vertical" style={{ width: "100%" }}>

            <div className='banner'>
              <div className='bimg'></div>
              <h2>Favorites</h2>
              <h3>最愛清單</h3>
            </div>

            <Row justify="center">
            {
              this.testData
                ?
                  <List
                    allBooks={this.testData}
                  />
                :<div></div>
            }
            </Row>



          </Space>
        </div>
      );
    }
  }
);
