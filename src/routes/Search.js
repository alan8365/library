import React, { Component } from "react";
import _ from "lodash";
import { connect } from "dva";
import {
  Space,
  Card,
  Row
} from "antd";
import "./Search.less";

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
    testData = [];

    componentDidMount = () => {

    }




    render() {
      const { query } = this.props;



      return (
        <div id="search">
          <Space direction="vertical" style={{ width: "100%" }}>

            <div className='banner'>
              <div className='bimg'></div>
              <h2>Search</h2>
              <h3>搜尋書籍</h3>

            </div>

            <Row justify="center">
              <h4>以下是搜尋xxx的結果:</h4>
              {
                this.testData
                  ?
                  <List
                    allBooks={this.testData}
                  />
                  : <div></div>
              }
            </Row>



          </Space>
        </div>
      );
    }
  }
);
