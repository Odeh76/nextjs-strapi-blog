'use strict';

/**
 * random-test service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::random-test.random-test');
