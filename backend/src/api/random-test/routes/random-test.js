'use strict';

/**
 * random-test router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::random-test.random-test');
