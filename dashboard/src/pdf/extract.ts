import { formatDate, formatPrice, formatUrl } from "@ingreteka/market-widget";
import chunk from "lodash/chunk";

type ProductType = {
  title: string;
  lastUpdate: string;
  offers: Array<{
    price?: number;
    host: string;
    url: string;
    priceCurrency?: string;
    image?: string;
  }>;
};

const parseProduct = (product: ProductType, shop: string) => {
  const { title, offers } = product;

  if (!offers) {
    return null;
  }

  const offer = offers.find(offer => offer.host === shop);

  if (!offer) {
    return null;
  }

  const offerImage = offers.find(offer => !!offer.image);

  return {
    title,
    price: formatPrice(offer.price, offer.priceCurrency),
    date: formatDate(product.lastUpdate),
    url: formatUrl(offer.url),
    image: offer.image || (offerImage ? offerImage.image : null)
  };
};

const extractIds = (text: string) => {
  return (text.match(/https:\/\/price.yaxeon.ru\/[a-z0-9]+/g) || []).map(url =>
    url.replace("https://price.yaxeon.ru/", "")
  );
};

export const getProduct = (id: string): Promise<ProductType | null> =>
  fetch(`https://market.yaxeon.ru/products/${id}`).then(res => {
    if (res.status !== 200) {
      return null;
    } else {
      return res.json();
    }
  });

export const makeSelection = async (shop: string, data: Array<any>) => {
  const elements: Array<{ type: string; data: any }> = [];

  const list = data
    .filter(item => item.isPublished)
    .sort((a, b) => a.categories[0].title.localeCompare(b.categories[0].title))
    .map(item => ({
      title: item.title,
      category: item.categories[0],
      products: extractIds(item.text)
    }))
    .filter(({ products }) => products.length > 0);

  let listWithPrice = await Promise.all(
    list.map(({ products, ...rest }) => {
      return Promise.all(products.map(getProduct)).then(products => ({
        products: products
          .map(item => (item ? parseProduct(item, shop) : null))
          .filter(Boolean),
        ...rest
      }));
    })
  );

  listWithPrice
    .filter(({ products }) => products.length > 0)
    .forEach(({ products, ...rest }) => {
      elements.push({ type: "title", data: rest });
      chunk(products, 2).forEach(row => {
        elements.push({ type: "row", data: row });
      });
    });

  return chunk(elements, 5);
};
