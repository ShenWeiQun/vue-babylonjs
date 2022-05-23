'use strict';

module.exports = require('begin-project/lint');
module.exports.rules['no-underscore-dangle'] = 0;
module.exports.rules['security/detect-object-injection'] = 0;
module.exports.rules['import/no-extraneous-dependencies'] = 0;
module.exports.rules['global-require'] = 0;
module.exports.rules['linebreak-style'] = 0;
module.exports.rules['max-len'] = 0;
module.exports.parserOptions = { sourceType: 'module' };
module.exports.rules.strict = 0;
module.exports.rules['no-unused-expressions'] = 0; // 不强制要求表达式有返回值
