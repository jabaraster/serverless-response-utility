'use strict';

module.exports = (event, callback, statusCode, body, headers) => {
    const hd = headers ? headers : {}
    hd['Content-Type'] = 'application/json'

    callback(null, {
        statusCode: statusCode,
        headers: hd,
        body: typeof body === 'string' ? body : JSON.stringify(body),
    });
};
