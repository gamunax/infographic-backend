"use strict";
const { sanitizeEntity } = require("strapi-utils");
const { find } = require("../../tag/controllers/tag");

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async findMain(ctx) {
    const entities = await strapi.query("infografic").find();
    return entities.map((entity) => {
      entity.images = entity.images.filter((item, index) => index < 2);
      return sanitizeEntity(entity, { model: strapi.models.infografic });
    });
  },

  async findOneUrl(ctx) {
    const { url } = ctx.params;
    const entity = await strapi.services.infografic.findOne({
      url,
    });
    return sanitizeEntity(entity, {
      model: strapi.models.infografic,
    });
  },

  async findOutStanding(ctx) {
    const entity = await strapi.services.infografic.find({
      outstanding: true,
    });
    return sanitizeEntity(entity, {
      model: strapi.models.infografic,
    });
  },
};
