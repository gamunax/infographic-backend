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

  async updateOrder() {
    const entity = await strapi.services.infografic.find();
    const entities = sanitizeEntity(entity, {
      model: strapi.models.infografic,
    });
    return entities.map((entity) => {
      const order = entity.tags[0].order;
      return strapi.services.infografic.update(
        { id: entity.id },
        {
          order,
        }
      );
    });
  },

  async findOutStanding(ctx) {
    const { outstanding, page } = ctx.params;
    const pageStart = page * 10;
    const entitySort = await strapi.services.infografic.find({
      outstanding,
      //_sort: "order:asc"
    });

    // sanitizeEntity(entitySort, {model: strapi.models.infografic});

    // const entity = await strapi.services.infografic.find({
    //   _start: pageStart, _limit: 10, _sort: "order:asc"
    // });

    return sanitizeEntity(entitySort, {
      model: strapi.models.infografic,
    });
  },

  async findByTag(ctx) {
    const { idTag } = ctx.params;
    const entities = await strapi.query("infografic").find({
      "tags.id": idTag,
    });
    return sanitizeEntity(entities, { model: strapi.models.infografic });
  },
};
