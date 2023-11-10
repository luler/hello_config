import React, { Component } from 'react'
import { Button, Col, Divider, Form, Icon, Input, message, Modal, Row, Table, Typography, } from 'antd'
import { connect } from 'dva'
import router from 'umi/router'
import { request_post } from '@/utils/request_tool'

const { confirm } = Modal

@connect(({ api, loading }) => ({
  api,
  _loading: loading.effects['api/getProjectEnvList'],
}))
class Index extends Component {
  state = {
    params: {
      project_id: 0,
    },
    selectedRowKeys: [],
    visible: false,
    temp_data: {},
    model_title: '',
  }

  componentDidMount () {
    this.setState(
      {
        params: {
          ...this.state.params,
          project_id: this.props.match.params.project_id,
        },
      },
      () => {
        this.fetch()
      }
    )
    message.config({
      top: 100,
      duration: 2,
      maxCount: 3,
    })
  }

  fetch () {
    const { dispatch } = this.props
    dispatch({
      type: 'api/getProjectEnvList',
      payload: this.state.params,
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

        request_post('/api/delProjectEnv', { ids }).then(res => {
          if (res.code === 200) {
            that.fetch()
          }
        })

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
        title: '环境码',
        dataIndex: 'code',
        key: 'code',
      },
      {
        title: '环境简介',
        dataIndex: 'desc',
        key: 'desc',
      },
      {
        title: '所属项目名称',
        dataIndex: 'project_name',
        key: 'project_name',
        width: 160,
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
        width: 320,
        render: (text, record) => (
          <span>
            <a
              onClick={() => {
                router.push(`/project/env/${record.id}/config`)
              }}
            >
              配置管理
            </a>
            <Divider type="vertical"/>
            <a
              onClick={() => {
                router.push(`/project/env/${record.id}/webhook`)
              }}
            >
              webhook
            </a>
            <Divider type="vertical"/>
            <a
              onClick={() => {
                const { dispatch } = this.props
                dispatch({
                  type: 'api/copyProjectEnv',
                  payload: { project_env_id: record.id },
                }).then(() => {
                  this.fetch()
                })
              }}
            >
              备份
            </a>
            <Divider type="vertical"/>
            <a
              onClick={() => {
                this.setState({
                  visible: true,
                  model_title: '编辑环境',
                  temp_data: {
                    id: record.id,
                    code: record.code,
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

    const { selectedRowKeys } = this.state

    return (
      <div>
        <div style={{ padding: '20px' }}>
          <a
            onClick={() => {
              router.goBack()
            }}
          >
            <Icon theme="twoTone" type="left-circle"/>&nbsp;
            返回
          </a>
        </div>

        <div style={{ backgroundColor: 'white', padding: '20px 20px' }}>
          {/* 标题 */}
          <div>
            <Typography.Title level={3} style={{ textAlign: 'center' }}>
              环境管理
            </Typography.Title>
          </div>

          <div style={{ padding: '20px 0' }}>
            <Row>
              <Col span={8}>
                <Button
                  type="primary"
                  onClick={() => {
                    this.setState({
                      visible: true,
                      model_title: '新增环境',
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

                    let { temp_data } = this.state
                    temp_data.project_id = this.state.params.project_id
                    let url = '/api/addProjectEnv'
                    if (temp_data.id) {
                      url = '/api/editProjectEnv'
                    }
                    this.setState({ confirmLoading: true, })
                    request_post(url, temp_data).then(res => {
                      this.setState({ confirmLoading: false, })
                      if (res.code === 200) {
                        this.setState({ visible: false, }, () => {
                          this.fetch()
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
                    <Form.Item required label="环境码">
                      <Input
                        onInput={e => {
                          this.setState({
                            temp_data: {
                              ...this.state.temp_data,
                              code: e.target.value,
                            },
                          })
                        }}
                        name="code"
                        placeholder="请输入环境码"
                        value={this.state.temp_data.code || ''}
                      />
                    </Form.Item>

                    <Form.Item required label="环境简介">
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
                        placeholder="请输入环境简介"
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
                      message.warning('请选择需要删除的项')
                    } else {
                      this.showConfirm(selectedRowKeys)
                    }
                    e.stopPropagation()
                  }}
                >
                  删除选中
                </Button>
              </Col>
            </Row>
          </div>
          <Table
            // style={{tableLayout: 'fixed'}}
            dataSource={api.putProjectEnvList}
            rowKey={record => record.id}
            pagination={false}
            columns={columns}
            loading={_loading}
            // bordered
            // onChange={this.handleTableChange}
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
