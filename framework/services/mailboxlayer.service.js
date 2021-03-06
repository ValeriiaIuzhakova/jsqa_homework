import supertest from 'supertest';
import { mailConfig, urls } from '../config';

const MailCheck = function () {
    this.get = function (email, access_key = null) {
        if (access_key === null) {
            access_key = mailConfig.access_key;
        }

        let url =  `/api/check?email=${email}`;

        if (access_key) {
            url += `&access_key=${access_key}`;
        }

        return supertest(urls.mailboxlayer).get(url);
    };
};

export { MailCheck };
