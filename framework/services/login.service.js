import supertest from 'supertest';
import { urls } from '../config';

const LoginVikunja = function LoginVikunja() {
  this.post = async function loginVikunja(params) {
    const r = await supertest(urls.vikunja).post('/api/v1/login').send(params);
    return r;
  };
};
export { LoginVikunja };
