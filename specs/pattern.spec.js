import faker from 'faker';
import { apiProvider } from '../framework';

const PersonBuilder = function PersonBuilder() {
  this.addBirthdate = function addLogin() {
    this.birth_date = '2020-12-07T17;09;14.344Z';
    return this;
  };
  this.addLogin = function addLogin() {
    this.login = faker.internet.email();
    return this;
  };
  this.addPassword = function addPassword() {
    this.password = faker.vehicle.vin();
    return this;
  };
  this.addNick = function addNick() {
    this.nick = 'string23';
    return this;
  };
  this.generate = function generate() {
    const fields = Object.getOwnPropertyNames(this);
    const data = {};
    fields.forEach((fieldName) => {
      if ((this[fieldName]) && typeof this[fieldName] !== 'function') {
        data[fieldName] = this[fieldName];
      }
    });
    console.log(fields);
    return data;
  };
};

test('Provider demo', async () => {
  const data = {
    login: faker.internet.email(),
    password: faker.vehicle.vin(),
    birth_date: '2020-12-07T17:09:14.344Z',
    nick: 'string23',
  };
  const demo = new PersonBuilder();
  console.log(demo);
  const demoLogin = demo
    .addLogin()
    .addBirthdate()
    .addNick()
    .addPassword()
    .generate();
  console.log(demoLogin);
  const r = await apiProvider().registration().post(data);
  expect(r.status).toBe(200);
});
