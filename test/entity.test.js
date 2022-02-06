import assert    from "assert";
import getEntity from "./../Helpers";

let result = {
    "code": "F132",
    "message": "Data found",
    "type": "success",
    "data": {
        "entityId": 1,
        "name": "Tuya",
        "identificationNumber": "123456789",
        "expirationDate": "2030-10-27",
        "contactName": "Ana Maria Palacio",
        "contactMail": "apalacioh@tuya.com.co",
        "ipAddress": "",
        "logo": ""
    },
    "traceId": "233879"
}

describe('Test', () => {
    it('Testing Entity', () => {
        assert.equal(result, getEntity(1));
    });
});