'use strict';

/**
 *  random-test controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::random-test.random-test');
