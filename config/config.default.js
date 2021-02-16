'use strict';

module.exports = appInfo => {
    const config = exports = {};

    config.keys = "xxxxxxx";

    config.view = {
        mapping: {
            '.html':'ejs',
        },
    };

    config.security = {
        csrf: {
          enable: false,
        }
    }

    return config;
};
