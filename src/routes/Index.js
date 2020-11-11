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
    testData = [];

    componentDidMount = () => {
      const {GET_List} = this.props;
      const {perPage} = this.state;
       // 取得書籍
       GET_List( perPage, null, (loading) => this.setState({ loading }));

    }




    render() {
      const { bookList } = this.props;

      if(bookList){
        this.testData = bookList.data;
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
