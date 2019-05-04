import { BrandMutationResolvers, BrandQueryResolvers } from "../types";

const BrandMutation: BrandMutationResolvers = {
  delete: async (root, { input: { id } }, { models: { Brand } }) => {
    await Brand.findByIdAndDelete(id);

    return true;
  },
  upsert: async (root, { input: { id, ...rest } }, { models: { Brand } }) => {
    const brand = id
      ? await Brand.findByIdAndUpdate(id, rest, { upsert: true })
      : await Brand.create(rest);

    return brand ? brand.toObject() : null;
  }
};

const BrandQuery: BrandQueryResolvers = {
  list: async (root, args, { models: { Brand } }) => {
    const list = await Brand.find({}).sort({ sort: 1 });

    return list.map(brand => brand.toObject());
  },
  item: async (root, { id }, { models: { Brand } }) => {
    const brand = await Brand.findById(id);

    return brand ? brand.toObject() : null;
  }
};

export default {
  BrandMutation,
  BrandQuery
};
