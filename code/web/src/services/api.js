import { stringify } from 'qs';
import request from '@/utils/request';

export async function queryNotices(params = {}) {
  return request(`/api/notices?${stringify(params)}`);
}

export async function getAccessToken(params = {}) {
  return request(`/api/getAccessToken`, {
    method: 'POST',
    data: params,
  });
}

export async function getProjectList(params = {}) {
  return request(`/api/getProjectList?${stringify(params)}`);
}

export async function getProjectEnvList(params = {}) {
  return request(`/api/getProjectEnvList?${stringify(params)}`);
}

export async function getProjectEnvConfigList(params = {}) {
  return request(`/api/getProjectEnvConfigList?${stringify(params)}`);
}

export async function getProjectEnvWebhookList(params = {}) {
  return request(`/api/getProjectEnvWebhookList?${stringify(params)}`);
}

export async function detail(params = {}) {
  return request(`/api/detail?${stringify(params)}`);
}

export async function getUserList(params = {}) {
  return request(`/api/getUserList?${stringify(params)}`);
}

export async function delProject(params = {}) {
  return request(`/api/delProject`, {
    method: 'POST',
    data: params,
  });
}

export async function delProjectEnvWebhook(params = {}) {
  return request(`/api/delProjectEnvWebhook`, {
    method: 'POST',
    data: params,
  });
}

export async function delProjectEnv(params = {}) {
  return request(`/api/delProjectEnv`, {
    method: 'POST',
    data: params,
  });
}

export async function delProjectEnvConfig(params = {}) {
  return request(`/api/delProjectEnvConfig`, {
    method: 'POST',
    data: params,
  });
}

export async function addUser(params = {}) {
  return request(`/api/addUser`, {
    method: 'POST',
    data: params,
  });
}

export async function addProject(params = {}) {
  return request(`/api/addProject`, {
    method: 'POST',
    data: params,
  });
}

export async function addProjectEnvWebhook(params = {}) {
  return request(`/api/addProjectEnvWebhook`, {
    method: 'POST',
    data: params,
  });
}

export async function editProjectEnvWebhook(params = {}) {
  return request(`/api/editProjectEnvWebhook`, {
    method: 'POST',
    data: params,
  });
}

export async function editProject(params = {}) {
  return request(`/api/editProject`, {
    method: 'POST',
    data: params,
  });
}

export async function addProjectEnv(params = {}) {
  return request(`/api/addProjectEnv`, {
    method: 'POST',
    data: params,
  });
}

export async function addProjectEnvConfig(params = {}) {
  return request(`/api/addProjectEnvConfig`, {
    method: 'POST',
    data: params,
  });
}

export async function editProjectEnv(params = {}) {
  return request(`/api/editProjectEnv`, {
    method: 'POST',
    data: params,
  });
}

export async function editProjectEnvConfig(params = {}) {
  return request(`/api/editProjectEnvConfig`, {
    method: 'POST',
    data: params,
  });
}

export async function editProjectEnvConfigV2(params = {}) {
  return request(`/api/editProjectEnvConfigV2`, {
    method: 'POST',
    data: params,
  });
}

export async function copyProjectEnv(params = {}) {
  return request(`/api/copyProjectEnv`, {
    method: 'POST',
    data: params,
  });
}

export async function executeProjectEnvWebhook(params = {}) {
  return request(`/api/executeProjectEnvWebhook`, {
    method: 'POST',
    data: params,
  });
}

export async function editUser(params = {}) {
  return request(`/api/editUser`, {
    method: 'POST',
    data: params,
  });
}
