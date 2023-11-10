import React, { Component } from 'react';
import { Table, Form, Input, Button, Modal, Row, Col, Select, Switch } from 'antd';
import { connect } from 'dva';
import styles from './Index.less';

const { confirm } = Modal;

@connect(({ api, loading }) => ({
  api,
  _loading: loading.effects['api/getUserList'],
}))
class User extends Component {
  state = {
    params: {
      page: 1,
      page_rows: 10,
      search: '',
    },
    visible: false,
    create_data: {},
    edit_visible: false,
    edit_data: {},
  };

  componentDidMount() {
    this.fetch(this.state.params);
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
        this.fetch(this.state.params);
      }
    );
  };

  onSearchChange = e => {
    this.setState({
      params: {
        ...this.state.params,
        search: e.target.value,
      },
    });
  };

  onSearch = () => {
    this.setState(
      {
        params: {
          ...this.state.params,
          page: 1,
        },
      },
      () => {
        this.fetch(this.state.params);
      }
    );
  };

  fetch(params) {
    const { dispatch } = this.props;
    dispatch({
      type: 'api/getUserList',
      payload: params,
    });
  }

  showCreateModel = () => {
    this.setState({
      visible: true,
      create_data: {
        title: '',
        appid: '',
        appsecret: '',
        is_admin: '',
      },
    });
  };

  showEditModel = (id, title, appid, is_admin) => {
    this.setState(
      {
        edit_visible: true,
        edit_data: {
          id: id,
          title: title,
          appid: appid,
          is_admin: is_admin,
        },
      },
      () => {
        //
      }
    );
  };

  onFormFieldChange = e => {
    if (e == 1 || e == 0) {
      this.setState({
        create_data: {
          ...this.state.create_data,
          is_admin: e,
        },
      });
    } else {
      switch (e.target.name) {
        case 'title':
          this.setState({
            create_data: {
              ...this.state.create_data,
              title: e.target.value,
            },
          });
          break;
        case 'appid':
          this.setState({
            create_data: {
              ...this.state.create_data,
              appid: e.target.value,
            },
          });
          break;
        case 'appsecret':
          this.setState({
            create_data: {
              ...this.state.create_data,
              appsecret: e.target.value,
            },
          });
          break;
      }
    }
  };

  onEditFormFieldChange = e => {
    if (e == 1 || e == 0) {
      this.setState({
        edit_data: {
          ...this.state.edit_data,
          is_admin: e,
        },
      });
    } else {
      switch (e.target.name) {
        case 'title':
          this.setState({
            edit_data: {
              ...this.state.edit_data,
              title: e.target.value,
            },
          });
          break;
        case 'appid':
          this.setState({
            edit_data: {
              ...this.state.edit_data,
              appid: e.target.value,
            },
          });
          break;
        case 'appsecret':
          this.setState({
            edit_data: {
              ...this.state.edit_data,
              appsecret: e.target.value,
            },
          });
          break;
      }
    }
  };

  handleOk = () => {
    const { dispatch } = this.props;
    this.setState(
      {
        confirmLoading: true,
      },
      () => {
        dispatch({
          type: 'api/addUser',
          payload: this.state.create_data,
        }).then(() => {
          this.setState(
            {
              visible: false,
              confirmLoading: false,
              params: {
                ...this.state.params,
                page: 1,
              },
            },
            () => {
              this.fetch(this.state.params);
            }
          );
        });
      }
    );
  };

  handleEditOk = () => {
    const { dispatch } = this.props;
    this.setState(
      {
        confirmLoading: true,
      },
      () => {
        dispatch({
          type: 'api/editUser',
          payload: this.state.edit_data,
        }).then(() => {
          this.setState(
            {
              edit_visible: false,
              confirmLoading: false,
              params: {
                ...this.state.params,
                page: 1,
              },
            },
            () => {
              this.fetch(this.state.params);
            }
          );
        });
      }
    );
  };

  onSwithChange = (is_use, id) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'api/editUser',
      payload: {
        id: id,
        is_use: is_use,
      },
    }).then(() => {
      this.setState(
        {
          params: {
            ...this.state.params,
            page: 1,
          },
        },
        () => {
          this.fetch(this.state.params);
        }
      );
    });
  };

  render() {
    const columns = [
      {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: '用户名称',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: 'appid',
        dataIndex: 'appid',
        key: 'appid',
      },
      {
        title: '用户类型',
        dataIndex: 'is_admin',
        key: 'is_admin',
        render: (text, record) => <div>{record.is_admin === 1 ? '超级管理员' : '普通用户'}</div>,
      },
      {
        title: '状态',
        dataIndex: 'is_use',
        key: 'is_use',
        render: (text, record) => (
          <div>
            <Switch
              checkedChildren="启用"
              unCheckedChildren="禁用"
              onChange={checked => {
                this.onSwithChange(checked ? 1 : 0, record.id);
              }}
              defaultChecked={record.is_use === 1 ? true : false}
            />
          </div>
        ),
      },
      {
        title: '创建人',
        key: 'creator_appid',
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
      },
      {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <span>
            <a
              onClick={() => {
                this.showEditModel(record.id, record.title, record.appid, record.is_admin);
              }}
            >
              编辑
            </a>
          </span>
        ),
      },
    ];

    const { _loading, api } = this.props;

    const pagination = {
      current: api.getUserList.page,
      total: api.getUserList.total,
      pageSize: this.state.params.page_rows,
      showTotal: (total, range) => `总共 ${total} 条数据`,
    };

    return (
      <div style={{ backgroundColor: 'white', padding: '20px' }}>
        <Modal
          title="编辑用户"
          visible={this.state.edit_visible}
          onOk={this.handleEditOk}
          confirmLoading={this.state.confirmLoading || false}
          okText="保存"
          onCancel={() => {
            this.setState({
              edit_visible: false,
              confirmLoading: false,
            });
          }}
        >
          <Form>
            <Form.Item required label="用户名称">
              <Input
                onInput={this.onEditFormFieldChange}
                name="title"
                value={this.state.edit_data.title}
                placeholder="请输入用户名称"
              />
            </Form.Item>

            <Form.Item required label="appid">
              <Input
                onInput={this.onEditFormFieldChange}
                name="appid"
                value={this.state.edit_data.appid}
                placeholder="请输入appid"
                disabled={true}
              />
            </Form.Item>

            <Form.Item label="appsecret">
              <Input
                onInput={this.onEditFormFieldChange}
                name="appsecret"
                value={this.state.edit_data.appsecret}
                placeholder="请输入appsecret"
              />
            </Form.Item>

            <Form.Item required label="用户类型">
              <Select
                value={this.state.edit_data.is_admin + ''}
                onChange={this.onEditFormFieldChange}
              >
                <Select.Option value="0">普通用户</Select.Option>
                <Select.Option value="1">超级管理员</Select.Option>
              </Select>
            </Form.Item>
          </Form>
        </Modal>

        <div style={{ padding: '20px 0' }}>
          <Button icon="plus" type="primary" onClick={this.showCreateModel}>
            新增
          </Button>
          <Modal
            title="新增用户"
            visible={this.state.visible}
            onOk={this.handleOk}
            confirmLoading={this.state.confirmLoading || false}
            okText="保存"
            onCancel={() => {
              this.setState({
                visible: false,
                confirmLoading: false,
              });
            }}
          >
            <Form>
              <Form.Item required label="用户名称">
                <Input
                  onInput={this.onFormFieldChange}
                  name="title"
                  placeholder="请输入用户名称"
                  value={this.state.create_data.title}
                />
              </Form.Item>

              <Form.Item required label="appid">
                <Input
                  onInput={this.onFormFieldChange}
                  name="appid"
                  placeholder="请输入appid"
                  value={this.state.create_data.appid}
                />
              </Form.Item>

              <Form.Item required label="appsecret">
                <Input
                  onInput={this.onFormFieldChange}
                  name="appsecret"
                  placeholder="请输入appsecret"
                  value={this.state.create_data.appsecret}
                />
              </Form.Item>

              <Form.Item required label="用户类型">
                <Select onChange={this.onFormFieldChange}>
                  <Select.Option value="0">普通用户</Select.Option>
                  <Select.Option value="1">超级管理员</Select.Option>
                </Select>
              </Form.Item>
            </Form>
          </Modal>

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
                  this.fetch(this.state.params);
                }
              );
            }}
          />
        </div>
        <Table
          // style={{tableLayout: 'fixed'}}
          dataSource={api.getUserList.list}
          rowKey={record => record.id}
          pagination={pagination}
          columns={columns}
          loading={_loading}
          // bordered
          onChange={this.handleTableChange}
        />
      </div>
    );
  }
}

export default User;
