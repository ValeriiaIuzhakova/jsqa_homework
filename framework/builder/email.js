import faker from 'faker';
import { mailConfig } from '../config';

const EmailBuilder = function () {
  this.buildEmail = function buildEmail(type) {
    switch (type) {
      case 'predefined':
        return mailConfig.email;
      case 'random':
        return faker.internet.email();
      default:
        return type;
    }
  };
};

export { EmailBuilder };
