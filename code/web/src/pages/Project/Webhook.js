import React, { Component } from 'react'
import { Button, Col, Divider, Form, Icon, Input, message, Modal, Row, Spin, Table, Typography, } from 'antd'
import { connect } from 'dva'
import router from 'umi/router'
import { request_post } from '@/utils/request_tool'

const { confirm } = Modal

@connect(({ api, loading }) => ({
  api, _loading: loading.effects['api/getProjectEnvWebhookList'],
}))
class Index extends Component {
  state = {
    params: {
      project_env_id: 0,
    }, selectedRowKeys: [], visible: false, temp_data: {}, model_title: '', webhooking: false,
  }

  componentDidMount () {
    this.setState({
      params: {
        ...this.state.params, project_env_id: this.props.match.params.project_env_id,
      },
    }, () => {
      this.fetch()
    })
    message.config({
      top: 100, duration: 2, maxCount: 3,
    })
  }

  fetch () {
    const { dispatch } = this.props
    dispatch({
      type: 'api/getProjectEnvWebhookList', payload: this.state.params,
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
        request_post('/api/delProjectEnvWebhook', { ids }).then(res => {
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
    const columns = [{
      title: 'Id', dataIndex: 'id', key: 'id', width: 64,
    }, {
      title: '回调地址', dataIndex: 'web_url', key: 'web_url', width: 300,
    }, {
      title: '最近执行时间', dataIndex: 'last_execute_time', key: 'last_execute_time', width: 240,
    }, {
      title: '最近执行返回', dataIndex: 'last_return', key: 'last_return', width: 320,
    }, {
      title: '备注', dataIndex: 'desc', key: 'desc', width: 240,
    }, {
      title: '项目名称/环境码',
      key: 'project_en_name',
      width: 160,
      render: (text, record) => <div>{`${record.project_name}/${record.env_code}`}</div>,
    }, {
      title: '操作', key: 'action', width: 160, render: (text, record) => (<span>
            <a
              onClick={() => {
                const { dispatch } = this.props
                this.setState({
                  webhooking: true,
                })
                dispatch({
                  type: 'api/executeProjectEnvWebhook', payload: { id: record.id },
                }).then(() => {
                  this.setState({
                    webhooking: false,
                  })
                  this.fetch()
                })
              }}
            >
              执行
            </a>
            <Divider type="vertical"/>
            <a
              onClick={() => {
                this.setState({
                  visible: true, model_title: '编辑回调地址', temp_data: {
                    id: record.id, web_url: record.web_url, desc: record.desc,
                  },
                })
              }}
            >
              编辑
            </a>
            <Divider type="vertical"/>
            <a
              onClick={() => {
                this.showConfirm([record.id])
              }}
            >
              删除
            </a>
          </span>),
    },]

    const { _loading, api } = this.props

    const { selectedRowKeys } = this.state

    return (<Spin
      tip="正在执行webhook (注：如果长时间未关闭，请刷新页面！)"
      size="large"
      spinning={this.state.webhooking}
    >
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
              环境Webhook管理
            </Typography.Title>
          </div>

          <div style={{ padding: '20px 0' }}>
            <Row>
              <Col span={8}>
                <Button
                  type="primary"
                  onClick={() => {
                    this.setState({
                      visible: true, model_title: '新增回调地址', temp_data: {},
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
                    let url = '/api/addProjectEnvWebhook'
                    if (temp_data.id) {
                      url = '/api/editProjectEnvWebhook'
                    }
                    temp_data.project_env_id = this.state.params.project_env_id
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
                      visible: false, confirmLoading: false,
                    })
                  }}
                >
                  <Form
                    labelCol={{
                      xs: { span: 24 }, sm: { span: 4 },
                    }}
                    wrapperCol={{
                      xs: { span: 24 }, sm: { span: 20 },
                    }}
                  >
                    <Form.Item required label="回调地址">
                      <Input
                        onInput={e => {
                          this.setState({
                            temp_data: {
                              ...this.state.temp_data, web_url: e.target.value,
                            },
                          })
                        }}
                        name="web_url"
                        placeholder="请输入回调地址"
                        value={this.state.temp_data.web_url || ''}
                      />
                    </Form.Item>

                    <Form.Item label="备注">
                      <Input.TextArea
                        rows={5}
                        onInput={e => {
                          this.setState({
                            temp_data: {
                              ...this.state.temp_data, desc: e.target.value,
                            },
                          })
                        }}
                        name="desc"
                        placeholder="请输入备注"
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
            dataSource={api.putProjectEnvWebhookList}
            rowKey={record => record.id}
            pagination={false}
            columns={columns}
            loading={_loading}
            // bordered
            // onChange={this.handleTableChange}
            rowSelection={{
              selectedRowKeys, onChange: this.onSelectChange,
            }}
          />
        </div>
      </div>
    </Spin>)
  }
}

export default Index
