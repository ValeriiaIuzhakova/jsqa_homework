
import { apiProvider } from '../framework';
import { EmailBuilder } from '../framework/builder/email';
import { mailConfig } from '../framework/config';

describe('email address', () => {

    it('verify real email address', async () => {
        const builder = new EmailBuilder();
        const email = builder.buildEmail('predefined');

        const { body, status } = await apiProvider().check().get(email);

        expect(status).toBe(200);
        expect(body.format_valid).toBe(true);
        expect(body.mx_found).toBe(true);
        expect(body.smtp_check).toBe(true);
        expect(body.disposable).toBe(false);
    });

    it('verify email address without api access key', async () => {
        const builder = new EmailBuilder();
        const email = builder.buildEmail('random');

        const { body, status } = await apiProvider().check().get(email, false);

        expect(body.error.code).toBe(101);
        expect(body.error.type).toBe('missing_access_key');
    });
});

describe('verify common error codes', () => {    
    test.each`
        access_key                  | mail                  | expected
        ${' '}                      | ${mailConfig.email}   | ${101}
        ${'6add7dca'}               | ${mailConfig.email}   | ${101}
        ${mailConfig.access_key}    | ${''}                 | ${210}
    `('Validate $access_key and $mail ', async ({ access_key, mail, expected }) => {
        const builder = new EmailBuilder();
        const email = builder.buildEmail(mail);

        const { body } = await apiProvider().check().get(email, access_key);

        expect(body.error.code).toBe(expected);
        expect(body.success).toBeFalsy();
    });
});