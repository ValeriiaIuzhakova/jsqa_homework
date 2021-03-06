import supertest from 'supertest';
import { urls } from '../config';

// import { decorateService } from '../../lib/decorate';

const Registration = function Registration() {
  this.post = async function post(params) {
    return await supertest(urls.demo).post('/api/v1/register').send(params);
  };
};

// decorateService(Registration);

export { Registration };
