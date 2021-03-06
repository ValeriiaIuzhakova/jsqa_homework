import supertest from 'supertest';
import { test } from '@jest/globals';
import { urls } from '../framework/config/index';

test('Пользователь может авторизоваться в системе', async () => {
  const params = {
    username: 'demo',
    password: 'demo',
  };
  const r = await supertest(urls.vikunja)
    .post('/api/v1/login')
    .send(params);
  expect(r.status)
    .toBe(200);
});

test('Гость может получить информацию в системе', async () => {
  const r = await supertest('https://try.vikunja.io')
    .get('/api/v1/info');
  expect(r.status)
    .toBe(200);
});

test('Пользователь может получить информацию в системе', async () => {
  const params = {
    username: 'demo',
    password: 'demo',
  };
  let r = await supertest('https://try.vikunja.io')
    .post('/api/v1/login')
    .send(params);
  const { token } = r.body;

  r = await supertest('https://try.vikunja.io')
    .get('/api/v1/info')
    .set('Authorization', `Bearer ${token}`);

  expect(r.status)
    .toBe(200);
});

test('Пользователь может получить информацию в системе v2', async () => {
  const params = {
    username: 'demo',
    password: 'demo',
  };
  // Создаем переменную body с содержимым {'token': 'ququ'}
  let { body, status } = await supertest('https://try.vikunja.io')
    .post('/api/v1/login')
    .send(params);
  // Создаем переменную token с содержимым - значение токена
  const { token } = body;

  // А вот так переиспользуются переменные
  ({
    body,
    status,
  } = await supertest('https://try.vikunja.io')
    .get('/api/v1/info')
    .set('Authorization', `Bearer ${token}`));

  expect(status)
    .toBe(200);
});

test('Пользователь может создать новую команду', async () => {
  const params = {
    username: 'demo',
    password: 'demo',
  };
  let r = await supertest('https://try.vikunja.io')
    .post('/api/v1/login')
    .send(params);
  const { token } = r.body;

  const teams = {
    name: 'demoTeam1',
  };
  r = await supertest('https://try.vikunja.io')
    .put('/api/v1/teams')
    .set('Authorization', `Bearer ${token}`)
    .send(teams);
  expect(r.status)
    .toBe(201);
});
