import React, { Component } from "react";
import _ from "lodash";
import { connect } from "dva";
import {
  Space,
  Modal,
  Spin,
  Button,
  Table
} from "antd";
import "./Dashboard.less";


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
      loading: false,
      isEditModalVisible: false,
      isDeleteModalVisible: false,
      isbn: '',
      bookData: null
    }

    // 假資料 欄
    columns = [
      {
        title: '書名',
        dataIndex: 'title',
      },
      {
        title: '作者',
        dataIndex: 'author',
        sorter: {
          compare: (a, b) => a.author - b.author,
        },
      },
      {
        title: '出版日期',
        dataIndex: 'publication_date',
        sorter: {
          compare: (a, b) => a.publication_date - b.publication_date,
        },
      },
      {
        title: 'isbn',
        dataIndex: 'isbn',
        sorter: {
          compare: (a, b) => a.isbn - b.isbn,
        },
      },
      {
        title: '操作',
        dataIndex: 'isbn',
        render: (dataIndex) => <div id={dataIndex}>
          <Button className='btns' type="primary" onClick={() =>this.showEditModal(dataIndex)}>編輯 </Button>
          <Button className='btns' type="primary" danger onClick={() =>this.showDeleteModal(dataIndex)}>刪除 </Button>
          </div>,
      },
    ];



    // 篩選條件
    onChange = (pagination, filters, sorter, extra) => {
      console.log('params', pagination, filters, sorter, extra);
    }

    // 顯示編輯modal
    showEditModal = (isbn) => {
      const { bookList } = this.props;
      let testData;
      if(bookList){
        testData = bookList.data.map((e)=>{
          if(e.isbn = isbn){
            return e;
          }
        });
      }

      this.setState({
        isbn: isbn,
        isEditModalVisible: true,
        bookData: testData[0]
      });
    }

    // 顯示刪除modal
    showDeleteModal = (isbn) => {
      this.setState({
        isbn: isbn,
        isDeleteModalVisible: true
      });
    }

    // 關閉modal
    handleCancel = () =>{
      this.setState({
        isEditModalVisible: false,
        isDeleteModalVisible: false
      });
    }

    // 確定編輯
    handleEditOk = ()=>{

    }

    // 確定刪除
    handleDeleteOk = ()=>{

    }

    componentDidMount = () => {
      const {GET_List} = this.props;

       // 取得書籍
       GET_List( 1, null, (loading) => this.setState({ loading }));

    }



    render() {
      const { loading, isEditModalVisible, isDeleteModalVisible, bookData } = this.state;
      const { bookList } = this.props;
      let testData, cp, lp;
      if(bookList){
        testData = bookList.data;
        cp= bookList.current_page;
        lp = bookList.last_page;
      }

      return (
        <div id="dashboard">
          <Space direction="vertical" style={{ width: "100%" }}>
            {
              !loading?
                <div className='contant'>
                  <Table columns={this.columns} dataSource={testData} onChange={this.onChange} />
                </div>:<div className="spin">
                        <Spin />
                      </div>
            }

          </Space>

          <Modal title="編輯書籍"  visible={isEditModalVisible} onOk={this.handleEditOk} onCancel={this.handleCancel}
            footer={[
              <Button key="back" className='ant-btn' onClick={this.handleCancel}>
                  取消
              </Button>,
              <Button key="submit" className='ant-btn' type="primary" onClick={this.handleEditOk}>
                  編輯
              </Button>
            ]}
          >
            <p> {bookData ? bookData.title : null} </p>
          </Modal>

          <Modal title="刪除書籍"  okText="確定刪除" cancelText="取消" visible={isDeleteModalVisible} onOk={this.handleDeleteOk} onCancel={this.handleCancel}>
            <p>確定要刪除該書籍嗎?</p>
          </Modal>

        </div>
      );
    }
  }
);
