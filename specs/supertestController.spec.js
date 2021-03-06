import { test } from '@jest/globals';
import { InfoVikunja } from '../framework/services/info.service';
import { LoginVikunja } from '../framework/services/login.service';

test('Аноним может получить информацию о системе', async () => {
  const r = await new InfoVikunja().get('');
  expect(r.status)
    .toBe(200);
});

test('Пользователь может авторизоваться в системе', async () => {
  const params = {
    username: 'demo',
    password: 'demo',
  };

  const r = await new LoginVikunja().post(params);
  expect(r.status)
    .toBe(200);
});

test('Пользователь может получить информацию о системе', async () => {
  const params = {
    username: 'demo',
    password: 'demo',
  };
  let r = await new LoginVikunja().post(params);
  r = await new InfoVikunja().get(r.body.token);
  expect(r.status)
    .toBe(200);
});
