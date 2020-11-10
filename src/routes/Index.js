import React, { Component } from "react";
import _ from "lodash";
import { connect } from "dva";
import {
  Space,
  Card,
  Row
} from "antd";
import "./Index.less";

import List from "../components/list";

const mapStateToProps = state => {
  return {
    bookList: state.book.bookList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    GET_List( payload, callback, loading) {
      dispatch({ type: "book/GET_List", payload, callback , loading});
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  class extends Component {
    state = {
      perPage: 1,
      loading: false
    }

    // 假資料
    testData = [
      {
        bookId: '1',
        name: '精通 Python：運用簡單的套件進行現代運算（第二版)',
        isbn: 'dsfsdf',
        img: 'https://img3.momoshop.com.tw/goodsimg/0007/743/816/7743816_R.jpg?t=1590486433',
        author: 'Bill Lubanovi',
        publishing_house: '歐萊禮',
        publication_date: '2020/06/02',
        intro: '簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介'
      },
      {
        bookId: 2,
        name: '精通 Python：運用簡單的套件進行現代運算（第二版)',
        isbn: 'dsfsdf',
        img: 'https://img3.momoshop.com.tw/goodsimg/0007/743/816/7743816_R.jpg?t=1590486433',
        author: 'Bill Lubanovi',
        publishing_house: '歐萊禮',
        publication_date: '2020/06/02',
        intro: '簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介'
      },
      {
        bookId: 3,
        name: '精通 Python：運用簡單的套件進行現代運算（第二版)',
        isbn: 'dsfsdf',
        img: 'https://img3.momoshop.com.tw/goodsimg/0007/743/816/7743816_R.jpg?t=1590486433',
        author: 'Bill Lubanovi',
        publishing_house: '歐萊禮',
        publication_date: '2020/06/02',
        intro: '簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介'
      },
      {
        bookId: 4,
        name: '精通 Python：運用簡單的套件進行現代運算（第二版)',
        isbn: 'dsfsdf',
        img: 'https://img3.momoshop.com.tw/goodsimg/0007/743/816/7743816_R.jpg?t=1590486433',
        author: 'Bill Lubanovi',
        publishing_house: '歐萊禮',
        publication_date: '2020/06/02',
        intro: '簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介'
      }

    ]

    componentDidMount = () => {
      const {GET_List} = this.props;
      const {perPage} = this.state;
       // 取得書籍
       GET_List( perPage, null, (loading) => this.setState({ loading }));

    }




    render() {
      const { bookList } = this.props;

      if(bookList){
        // this.testData = bookList;
        console.log(bookList)
      }

      return (
        <div id="index">
          <Space direction="vertical" style={{ width: "100%" }}>

            <div className='banner'>
              <div className='bimg'></div>
              <h2>Library</h2>
              <h3>學習永無止境</h3>
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
