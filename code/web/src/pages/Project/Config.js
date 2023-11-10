import React, { Component } from 'react'
import { Button, Col, Divider, Form, Icon, Input, message, Modal, Row, Spin, Table, Tabs, Typography, } from 'antd'
import { connect } from 'dva'
import router from 'umi/router'
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/properties/properties'
import styles from './codemirror.less'
import { request_post } from '@/utils/request_tool'

const { confirm } = Modal

@connect(({ api, loading }) => ({
  api,
  _loading: loading.effects['api/getProjectEnvConfigList'],
}))
class Index extends Component {
  state = {
    params: {
      project_env_id: 0,
    },
    selectedRowKeys: [],
    visible: false,
    temp_data: {},
    model_title: '',
    text: '',
    temp_text: false,
    webhooking: false,
  }

  componentDidMount () {
    this.setState(
      {
        params: {
          ...this.state.params,
          project_env_id: this.props.match.params.project_env_id,
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
      type: 'api/getProjectEnvConfigList',
      payload: this.state.params,
    }).then(() => {
      const { api } = this.props
      this.setState({
        text: api.putProjectEnvConfigList.text,
      })
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

        request_post('/api/delProjectEnvConfig', { ids }).then(res => {
          if (res.code === 200) {
            that.fetch()
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
        title: 'key',
        dataIndex: 'key',
        key: 'key',
      },
      {
        title: 'value',
        dataIndex: 'value',
        key: 'value',
        width: 320,
      },
      {
        title: '备注',
        dataIndex: 'desc',
        key: 'desc',
        // width: 320,
      },
      {
        title: '项目名称/环境',
        key: 'project_env_name',
        render: (text, record) => <div>{`${record.project_name}/${record.env_code}`}</div>,
      },
      {
        title: '最后更新时间',
        dataIndex: 'update_time',
        key: 'update_time',
        width: 160,
      },
      {
        title: '操作',
        key: 'action',
        width: 120,
        render: (text, record) => (
          <span>
            <a
              onClick={() => {
                this.setState({
                  visible: true,
                  model_title: '编辑配置',
                  temp_data: {
                    id: record.id,
                    key: record.key,
                    value: record.value,
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
      <Spin
        size="large"
        tip="正在更新配置并执行相应的webhook (注：如果长时间未关闭，请刷新页面！)"
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
                配置管理
              </Typography.Title>
            </div>

            <Tabs>
              <Tabs.TabPane
                tab={
                  <span>
                    <Icon type="table"/>
                    表格
                  </span>
                }
                key="1"
              >
                <div style={{ padding: '20px 0' }}>
                  <Row>
                    <Col span={8}>
                      <Button
                        type="primary"
                        onClick={() => {
                          this.setState({
                            visible: true,
                            model_title: '新增配置',
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
                          let url = '/api/addProjectEnvConfig'
                          if (temp_data.id) {
                            url = '/api/editProjectEnvConfig'
                          }
                          temp_data.project_env_id = this.state.params.project_env_id
                          this.setState({ confirmLoading: true, webhooking: true, })
                          request_post(url, temp_data).then(res => {
                            this.setState({ confirmLoading: false })
                            if (res.code === 200) {
                              this.setState({ visible: false, webhooking: false, }, () => {
                                this.fetch()
                              })
                            }
                          })

                        }}
                        onCancel={() => {
                          this.setState({ visible: false, })
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
                          <Form.Item required label="key">
                            <Input
                              onInput={e => {
                                this.setState({
                                  temp_data: {
                                    ...this.state.temp_data,
                                    key: e.target.value,
                                  },
                                })
                              }}
                              name="key"
                              disabled={Boolean(this.state.temp_data.id) || false}
                              placeholder="请输入键名"
                              value={this.state.temp_data.key || ''}
                            />
                          </Form.Item>

                          <Form.Item label="value">
                            <Input.TextArea
                              rows={5}
                              onInput={e => {
                                this.setState({
                                  temp_data: {
                                    ...this.state.temp_data,
                                    value: e.target.value,
                                  },
                                })
                              }}
                              name="desc"
                              placeholder="请输入键值"
                              value={this.state.temp_data.value || ''}
                            />
                          </Form.Item>

                          <Form.Item label="备注">
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
                            message.warning('请选择需要删除的项目')
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
                  dataSource={api.putProjectEnvConfigList.list}
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
              </Tabs.TabPane>

              <Tabs.TabPane
                tab={
                  <span>
                    <Icon type="book"/>
                    文本
                  </span>
                }
                key="2"
              >
                <CodeMirror
                  className={styles.MyCodeMirror}
                  value={this.state.text}
                  options={{
                    mode: 'properties',
                    theme: 'material',
                    lineNumbers: true,
                  }}
                  onChange={(editor, data, value) => {
                    this.setState({
                      temp_text: value,
                    })
                  }}
                />

                <Button
                  style={{ marginTop: '20px' }}
                  type="primary"
                  onClick={() => {

                    if (this.state.temp_text === false) {
                      message.warning('配置文本暂无修改')
                      return
                    }
                    this.setState({ webhooking: true, })
                    request_post('/api/editProjectEnvConfigV2', {
                      project_env_id: this.state.params.project_env_id,
                      text: this.state.temp_text,
                    }).then(res => {
                      if (res.code === 200) {
                        this.setState({ webhooking: false, })
                        this.fetch()
                      }
                    })

                  }}
                >
                  保存
                </Button>
              </Tabs.TabPane>
            </Tabs>
          </div>
        </div>
      </Spin>
    )
  }
}

export default Index
