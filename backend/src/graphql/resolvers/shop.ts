import { ShopMutationResolvers, ShopQueryResolvers } from "../types";

const ShopMutation: ShopMutationResolvers = {
  delete: async (root, { input: { id } }, { models: { Shop } }) => {
    await Shop.findByIdAndDelete(id);

    return true;
  },
  upsert: async (root, { input: { id, ...rest } }, { models: { Shop } }) => {
    const shop = id
      ? await Shop.findByIdAndUpdate(id, rest, { upsert: true })
      : await Shop.create(rest);

    return shop ? shop.toObject() : null;
  }
};

const ShopQuery: ShopQueryResolvers = {
  list: async (root, args, { models: { Shop } }) => {
    const list = await Shop.find({}).sort({ sort: 1 });

    return list.map(shop => shop.toObject());
  },
  item: async (root, { id }, { models: { Shop } }) => {
    const shop = await Shop.findById(id);

    return shop ? shop.toObject() : null;
  }
};

export default {
  ShopMutation,
  ShopQuery
};
