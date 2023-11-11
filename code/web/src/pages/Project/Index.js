import React, { Component } from 'react'
import { Breadcrumb, Button, Divider, Form, Input, message, Modal, Table } from 'antd'
import { connect } from 'dva'
import router from 'umi/router'
import { request_post } from '@/utils/request_tool'
import { Link } from 'umi'

const { confirm } = Modal

@connect(({ api, loading }) => ({
  api,
  _loading: loading.effects['api/getProjectList'],
}))
class Index extends Component {
  state = {
    params: {
      page: 1,
      page_rows: 10,
      search: '',
    },
    selectedRowKeys: [],
    visible: false,
    temp_data: {},
    model_title: '',
  }

  componentDidMount () {
    this.fetch(this.state.params)
    message.config({
      top: 100,
      duration: 2,
      maxCount: 3,
    })
  }

  handleTableChange = pagination => {
    this.setState(
      {
        params: {
          ...this.state.params,
          page: pagination.current,
          page_rows: pagination.pageSize,
        },
      },
      () => {
        this.fetch(this.state.params)
      }
    )
  }

  fetch (params) {
    const { dispatch } = this.props
    dispatch({
      type: 'api/getProjectList',
      payload: params,
    })
  }

  showConfirm = ids => {
    const that = this
    confirm({
      title: '你确定要删除选中项吗?',
      content: '注意：点击确认，将删除无法恢复',
      okText: '确定',
      cancelText: '取消',
      onOk () {
        request_post('/api/delProject', { ids }).then(res => {
          if (res.code === 200) {
            that.fetch(that.state.params)
          }
        })
      },
      onCancel () {
        //
      },
    })
  }

  onSelectChange = selectedRowKeys => {
    this.setState({ selectedRowKeys })
  }

  render () {
    const columns = [
      {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: '项目名称',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: '项目代码',
        dataIndex: 'code',
        key: 'code',
      },
      {
        title: '项目简介',
        dataIndex: 'desc',
        key: 'desc',
      },

      {
        title: '创建人',
        key: 'creator',
        render: (text, record) => (
          <div>
            {record.creator_appid}/{record.creator_name}
          </div>
        ),
      },
      {
        title: '创建时间',
        dataIndex: 'create_time',
        key: 'create_time',
        width: 160,
      },
      {
        title: '操作',
        key: 'action',
        width: 200,
        render: (text, record) => (
          <span>
            <a
              onClick={() => {
                router.push({
                  pathname: `/project/${record.id}/env`,
                  state: {
                    ...this.props.location.state,
                    project_id: record.id,
                    title: record.title,
                  }
                })
              }}
            >
              设置环境({record.project_env_count})
            </a>
            <Divider type="vertical"/>
            <a
              onClick={() => {
                this.setState({
                  visible: true,
                  model_title: '编辑项目',
                  temp_data: {
                    id: record.id,
                    title: record.title,
                    desc: record.desc,
                  },
                })
              }}
            >
              编辑
            </a>
            <Divider type="vertical"/>
            <a
              style={{ color: 'red' }}
              onClick={() => {
                this.showConfirm([record.id])
              }}
            >
              删除
            </a>
          </span>
        ),
      },
    ]

    const { _loading, api } = this.props

    const pagination = {
      current: api.putProjectList.page,
      total: api.putProjectList.total,
      pageSize: this.state.params.page_rows,
      showTotal: (total, range) => `总共 ${total} 条数据`,
    }

    const { selectedRowKeys } = this.state

    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item><Link to="/">首页</Link></Breadcrumb.Item>
          <Breadcrumb.Item><Link to="/project/index">项目列表</Link></Breadcrumb.Item>
        </Breadcrumb>

        <div style={{ backgroundColor: 'white', padding: '10px 20px', marginTop: 20 }}>
          <div style={{ padding: '20px 0' }}>
            <Button
              type="primary"
              onClick={() => {
                this.setState({
                  visible: true,
                  model_title: '新增项目',
                  temp_data: {},
                })
              }}
            >
              新增
            </Button>
            <Modal
              title={this.state.model_title}
              visible={this.state.visible}
              confirmLoading={this.state.confirmLoading || false}
              okText="保存"
              onOk={() => {
                let url = '/api/addProject'
                if (this.state.temp_data.id) {
                  url = '/api/editProject'
                }
                this.setState({ confirmLoading: true, })
                request_post(url, this.state.temp_data).then(res => {
                  this.setState({ confirmLoading: false, })
                  if (res.code === 200) {
                    this.setState({
                      visible: false,
                      params: { ...this.state.params, page: 1, },
                    }, () => {
                      this.fetch(this.state.params)
                    })
                  }
                })

              }}
              onCancel={() => {
                this.setState({
                  visible: false,
                  confirmLoading: false,
                })
              }}
            >
              <Form
                labelCol={{
                  xs: { span: 24 },
                  sm: { span: 4 },
                }}
                wrapperCol={{
                  xs: { span: 24 },
                  sm: { span: 20 },
                }}
              >
                <Form.Item required label="项目名称">
                  <Input
                    onInput={e => {
                      this.setState({
                        temp_data: {
                          ...this.state.temp_data,
                          title: e.target.value,
                        },
                      })
                    }}
                    name="title"
                    placeholder="请输入项目名称"
                    value={this.state.temp_data.title || ''}
                  />
                </Form.Item>

                <Form.Item required label="项目简介">
                  <Input.TextArea
                    rows={5}
                    onInput={e => {
                      this.setState({
                        temp_data: {
                          ...this.state.temp_data,
                          desc: e.target.value,
                        },
                      })
                    }}
                    name="desc"
                    placeholder="请输入项目简介"
                    value={this.state.temp_data.desc || ''}
                  />
                </Form.Item>
              </Form>
            </Modal>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button
              type="danger"
              onClick={e => {
                if (selectedRowKeys.length === 0) {
                  message.warning('请选择需要删除的项目')
                } else {
                  this.showConfirm(selectedRowKeys)
                }
                e.stopPropagation()
              }}
            >
              删除选中
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button
              type="default"
              onClick={() => {
                window.location.href = '/backend/doc/接口文档.doc'
              }}
            >
              接口文档
            </Button>
            <Input.Search
              allowClear
              style={{ width: 400, float: 'right' }}
              placeholder="请输入搜索关键字"
              onSearch={value => {
                this.setState(
                  {
                    params: {
                      ...this.state.params,
                      page: 1,
                      search: value,
                    },
                  },
                  () => {
                    this.fetch(this.state.params)
                  }
                )
              }}
            />
          </div>
          <Table
            // style={{tableLayout: 'fixed'}}
            dataSource={api.putProjectList.list}
            rowKey={record => record.id}
            pagination={pagination}
            columns={columns}
            loading={_loading}
            // bordered
            onChange={this.handleTableChange}
            rowSelection={{
              selectedRowKeys,
              onChange: this.onSelectChange,
            }}
          />
        </div>
      </div>
    )
  }
}

export default Index
