import supertest from 'supertest';
import { urls } from '../config';

const InfoVikunja = function InfoVikunja() {
  this.get = async function getInfoVikunja(params) {
    const r = await supertest(urls.vikunja).get('/api/v1/info').send(params);
    return r;
  };
};

export { InfoVikunja };
