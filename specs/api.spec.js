import fetch from 'node-fetch';
import { test } from '@jest/globals';

test.skip('get without auth', async () => {
  const response = await fetch('http://apichallenges.herokuapp.com/challenges');
  expect(response.status)
    .toBe(200);
});

test.skip('get without auth short', async () => {
  const { status } = await fetch('http://apichallenges.herokuapp.com/challenges');
  expect(status)
    .toBe(200);
});

test.skip('Post with bearer', async () => {
  const body = {
    username: 'demo',
    password: 'demo',
  };
  const { status } = await fetch('https://try.vikunja.io/api/v1/login',
    {
      method: 'POST',
      body: JSON.stringify(body),
      headers:
        {
          'Content-Type': 'application/json',
        },
    });
  expect(status)
    .toBe(200);
});

test.skip('Post with query', async () => {
  const params = {
    email: 'mnml.sniper@gmail.com',
    password: 'q12345',
  };
  const { status } = await fetch('https://airportgap.dev-tester.com/tokens',
    {
      method: 'POST',
      body: JSON.stringify(params),
      headers:
        {
          'Content-Type': 'application/json',
        },
    });
  expect(status)
    .toBe(200);
});

test.skip('Post with query version 2', async () => {
  const params = new URLSearchParams();
  params.append('email', 'mnml.sniper@gmail.com');
  params.append('password', 'q12345');

  const { status } = await fetch('https://airportgap.dev-tester.com/tokens',
    {
      method: 'POST',
      body: JSON.stringify(params),
      headers:
        {
          'Content-Type': 'application/json',
        },
    });
  expect(status)
    .toBe(200);
});

test('Get', async () => {
  const data = {
    login: 'demo111',
    password: 'demo111',
    birth_date: '2020-11-16T18:26:57.586Z',
    nick: 'demo111demo111',
  };
  const r = await fetch('https://91i.ru/api/v1/register',
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers:
        {
          'Content-Type': 'application/json',
        },
    });
  console.log(r);
  expect(r.status)
    .toBe(200);
});
