import { Registration, MailCheck } from './services/index';

const apiProvider = () => ({
  registration: () => new Registration(),
  check: () => new MailCheck(),
});

export { apiProvider };
