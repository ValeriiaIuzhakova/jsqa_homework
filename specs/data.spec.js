import Ajv from 'ajv';
import faker from 'faker';
import Joi from '@hapi/joi';
import supertest from 'supertest';
import { test } from '@jest/globals';

import { BuildUser } from '../framework/builder/user';
import schemaJson from '../framework/model/swagger.json';

const ajv = new Ajv();

test.skip('Пользователь может зарегистрироваться в системе', async () => {
  const data = {
    login: 'string12',
    password: 'string333',
    birth_date: '2020-12-07T17:09:14.344Z',
    nick: 'string33',
  };
  const r = await supertest('https://91i.ru')
    .post('/api/v1/register')
    .send(data);
  expect(r.status)
    .toBe(200);
});

test.skip('Пользователь может зарегистрироваться в системе v2', async () => {
  const data = {
    login: faker.internet.email(),
    password: 'hbodp9q04uLJj10',
    birth_date: '1979-07-29T17:09:14.344Z',
    nick: 'rawgit',
  };
  const r = await supertest('https://91i.ru')
    .post('/api/v1/register')
    .send(data);
  expect(r.status)
    .toBe(200);
});

test.skip('Пользователь может зарегистрироваться в системе v3', async () => {
  const data = new BuildUser().get('new');

  const r = await supertest('https://91i.ru')
    .post('/api/v1/register')
    .send(data);
  expect(r.status)
    .toBe(200);
});

// Можно вынести в BeforeEach

// Билдер + Валидация json схемы + AJV
test.skip('Пользователь может зарегистрироваться в системе v4', async () => {
  const data = new BuildUser().get('new');

  const r = await supertest('https://91i.ru')
    .post('/api/v1/register')
    .send(data);
  const schemaValidate = ajv.validate(r.body, schemaJson);
  expect(r.status)
    .toBe(200);
  // expect
});

// Билдер + Валидация json схемы JOI
test('Пользователь может зарегистрироваться в системе v5', async () => {
  const data = new BuildUser().get('new');
  const schema = Joi.object().keys({
    otus: Joi.number().integer(),
  });

  const { body, status } = await supertest('https://91i.ru')
    .post('/api/v1/register')
    .send(data);

  const { error } = schema.validate(body);
  console.log('joi');
  console.log(error);
  expect(status)
    .toBe(200);
});
