"use strict";
const { sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async find(ctx) {
    const entities = await strapi.query('tag').find();

    return entities.map((entity) => {
      const image = entity.image;
      const entityMap = {
        id: entity.id,
        name: entity.name,
        order: entity.order,
        image: {
          id: image.id,
          url: image.url
        }
      };
      return sanitizeEntity(entityMap, { model: strapi.models.tag })
    });
  },
};
