import {
  getAccessToken,
  getUserList,
  addUser,
  editUser,
  detail,
  getProjectList,
  addProject,
  delProject,
  editProject,
  getProjectEnvList,
  addProjectEnv,
  editProjectEnv,
  delProjectEnv,
  getProjectEnvConfigList,
  addProjectEnvConfig,
  editProjectEnvConfig,
  delProjectEnvConfig,
  editProjectEnvConfigV2,
  copyProjectEnv,
  getProjectEnvWebhookList,
  addProjectEnvWebhook,
  editProjectEnvWebhook,
  delProjectEnvWebhook,
  executeProjectEnvWebhook,
} from '../services/api';
import { setAccessToken, setAuthority, setUserInfo } from '../utils/authority';
import { reloadAuthorized } from '@/utils/Authorized';
import { message } from 'antd';
import { getPageQuery } from '@/utils/utils';

export default {
  namespace: 'api',
  state: {
    mediaDetail: {},
    putProjectList: {
      list: [],
      total: 0,
      page: 1,
    },
    putProjectEnvList: [],
    putProjectEnvWebhookList: [],
    putProjectEnvConfigList: [],
    getUserList: {
      list: [],
      total: 0,
      page: 1,
    },
  },

  effects: {
    *getAccessToken({ payload }, { call, put }) {
      const response = yield call(getAccessToken, payload);
      if (response.code === 200) {
        setUserInfo({ appid: payload.appid }, response.info.expires_in);
        yield put({
          type: 'login',
          payload: response.info,
        });

        reloadAuthorized();

        const { redirect } = getPageQuery();
        window.location.href = redirect || '/';
      }
    },

    *getProjectList({ payload }, { call, put }) {
      const response = yield call(getProjectList, payload);
      yield put({
        type: 'putProjectList',
        payload: response.info,
      });
    },

    *getProjectEnvList({ payload }, { call, put }) {
      const response = yield call(getProjectEnvList, payload);
      yield put({
        type: 'putProjectEnvList',
        payload: response.info,
      });
    },

    *getProjectEnvConfigList({ payload }, { call, put }) {
      const response = yield call(getProjectEnvConfigList, payload);
      yield put({
        type: 'putProjectEnvConfigList',
        payload: response.info,
      });
    },

    *getProjectEnvWebhookList({ payload }, { call, put }) {
      const response = yield call(getProjectEnvWebhookList, payload);
      yield put({
        type: 'putProjectEnvWebhookList',
        payload: response.info,
      });
    },

    *detail({ payload }, { call, put }) {
      const response = yield call(detail, payload);
      yield put({
        type: 'putDetail',
        payload: response.info,
      });
    },

    *getUserList({ payload }, { call, put }) {
      const response = yield call(getUserList, payload);
      yield put({
        type: 'putUserList',
        payload: response.info,
      });
    },

    *addUser({ payload }, { call, put }) {
      const response = yield call(addUser, payload);
      if (response.code === 200) {
        message.success(response.message);
      } else {
        message.error(response.message);
      }
      return;
    },

    *addProject({ payload }, { call, put }) {
      const response = yield call(addProject, payload);
      if (response.code === 200) {
        message.success(response.message);
      } else {
        message.error(response.message);
      }
      return;
    },

    *addProjectEnvWebhook({ payload }, { call, put }) {
      const response = yield call(addProjectEnvWebhook, payload);
      if (response.code === 200) {
        message.success(response.message);
      } else {
        message.error(response.message);
      }
      return;
    },

    *editProjectEnvWebhook({ payload }, { call, put }) {
      const response = yield call(editProjectEnvWebhook, payload);
      if (response.code === 200) {
        message.success(response.message);
      } else {
        message.error(response.message);
      }
      return;
    },

    *editProject({ payload }, { call, put }) {
      const response = yield call(editProject, payload);
      if (response.code === 200) {
        message.success(response.message);
      } else {
        message.error(response.message);
      }
      return;
    },

    *addProjectEnv({ payload }, { call, put }) {
      const response = yield call(addProjectEnv, payload);
      if (response.code === 200) {
        message.success(response.message);
      } else {
        message.error(response.message);
      }
      return;
    },

    *editProjectEnv({ payload }, { call, put }) {
      const response = yield call(editProjectEnv, payload);
      if (response.code === 200) {
        message.success(response.message);
      } else {
        message.error(response.message);
      }
      return;
    },

    *addProjectEnvConfig({ payload }, { call, put }) {
      const response = yield call(addProjectEnvConfig, payload);
      if (response.code === 200) {
        message.success(response.message);
      } else {
        message.error(response.message);
      }
      return;
    },

    *editProjectEnvConfig({ payload }, { call, put }) {
      const response = yield call(editProjectEnvConfig, payload);
      if (response.code === 200) {
        message.success(response.message);
      } else {
        message.error(response.message);
      }
      return;
    },

    *editProjectEnvConfigV2({ payload }, { call, put }) {
      const response = yield call(editProjectEnvConfigV2, payload);
      if (response.code === 200) {
        message.success(response.message);
      } else {
        message.error(response.message);
      }
      return;
    },

    *copyProjectEnv({ payload }, { call, put }) {
      const response = yield call(copyProjectEnv, payload);
      if (response.code === 200) {
        message.success(response.message);
      } else {
        message.error(response.message);
      }
      return;
    },

    *executeProjectEnvWebhook({ payload }, { call, put }) {
      const response = yield call(executeProjectEnvWebhook, payload);
      if (response.code === 200) {
        message.success(response.message);
      } else {
        message.error(response.message);
      }
      return;
    },

    *editUser({ payload }, { call, put }) {
      const response = yield call(editUser, payload);
      if (response.code === 200) {
        message.success(response.message);
      } else {
        message.error(response.message);
      }
      return;
    },

    *delProject({ payload }, { call, put }) {
      const response = yield call(delProject, payload);
      if (response.code === 200) {
        message.success(response.message);
      } else {
        message.error(response.message);
      }
      return;
    },

    *delProjectEnvWebhook({ payload }, { call, put }) {
      const response = yield call(delProjectEnvWebhook, payload);
      if (response.code === 200) {
        message.success(response.message);
      } else {
        message.error(response.message);
      }
      return;
    },

    *delProjectEnv({ payload }, { call, put }) {
      const response = yield call(delProjectEnv, payload);
      if (response.code === 200) {
        message.success(response.message);
      } else {
        message.error(response.message);
      }
      return;
    },

    *delProjectEnvConfig({ payload }, { call, put }) {
      const response = yield call(delProjectEnvConfig, payload);
      if (response.code === 200) {
        message.success(response.message);
      } else {
        message.error(response.message);
      }
      return;
    },
  },

  reducers: {
    login(state, { payload }) {
      if (payload.is_admin == 1) {
        setAuthority('super_admin');
      } else {
        setAuthority('admin');
      }
      setAccessToken(payload.access_token);
      return {
        ...state,
      };
    },

    putProjectList(state, { payload }) {
      return {
        ...state,
        putProjectList: payload,
      };
    },

    putProjectEnvList(state, { payload }) {
      return {
        ...state,
        putProjectEnvList: payload,
      };
    },

    putProjectEnvConfigList(state, { payload }) {
      return {
        ...state,
        putProjectEnvConfigList: payload,
      };
    },

    putProjectEnvWebhookList(state, { payload }) {
      return {
        ...state,
        putProjectEnvWebhookList: payload,
      };
    },

    putDetail(state, { payload }) {
      return {
        ...state,
        mediaDetail: payload,
      };
    },

    putUserList(state, { payload }) {
      return {
        ...state,
        getUserList: payload,
      };
    },
  },
};
