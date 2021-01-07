import React, { Component } from "react";
import _ from "lodash";
import { connect } from "dva";
import {
  Space,
  Pagination,
  Row
} from "antd";
import "./Search.less";

import List from "../components/list";


const mapStateToProps = state => {
  return {
    bookList: state.book.bookList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    goToRoute(payload) {
      dispatch({ type: "global/goToRoute", payload });
    },
    GET_Search( payload, callback, loading) {
      dispatch({ type: "book/GET_Search", payload, callback , loading});
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  class extends Component {
    state = {
      loading: false,
      keyword: ''
    }


    componentDidMount = () => {
      const {GET_Search} = this.props;
      const query = new URLSearchParams(this.props.location.search);
      let keyword = query.get('keyword');
      let page = query.get('page');
      let payload ={
        page: page,
        keyword: keyword
      }
      this.setState({
        keyword: keyword
      })

       // 取得書籍
       GET_Search( payload, null, (loading) => this.setState({ loading }));

    }

    // 換頁觸發
    onChange = page => {
      const {GET_Search} = this.props;
      const { keyword } = this.state;
      const { goToRoute } = this.props;
      goToRoute(`/search?keyword=${keyword}&page=${page}`);
    };


    render() {
      const { bookList } = this.props;
      let testData, cp, lp;
      if(bookList){
        testData = bookList.data;
        cp= bookList.current_page;
        lp = bookList.last_page;
      }

      return (
        <div id="index">
          <Space direction="vertical" style={{ width: "100%" }}>

            <div className='banner'>
              <div className='bimg'></div>
              <h2>Search</h2>
              <h3>搜尋解果</h3>
            </div>

            <Row justify="center">
              <h4>以下是您的搜尋結果</h4>
            {
              testData
                ?
                  <List
                    allBooks={testData}
                  />
                :<div></div>
            }
            </Row>
            <Row>
              <div className='pagination'>
                <Pagination defaultCurrent={cp} total={lp} onChange={this.onChange} />
              </div>
            </Row>



          </Space>
        </div>
      );
    }
  }
);
