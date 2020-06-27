import { formatDate, formatPrice, formatUrl } from "@ingreteka/market-widget";
import chunk from "lodash/chunk";

type OfferType = {
  price?: number;
  host: string;
  url: string;
  priceCurrency?: string;
  image?: string;
};

type ProductType = {
  title: string;
  lastUpdate: string;
  image?: string;
  offers: Array<OfferType>;
};

const getImage = (offers: Array<OfferType>) => {
  const sortedOffers = offers
    .map(offer => ({
      ...offer,
      position: [
        "utkonos.ru",
        "auchan.ru",
        "perekrestok.ru",
        "ozon.ru",
        "wildberries.ru"
      ].findIndex(shop => offer.host.indexOf(shop) !== -1)
    }))
    .sort((a, b) => {
      return b.position - a.position;
    });

  const offer = sortedOffers.find(offer => !!offer.image);

  return offer ? offer.image : null;
};

const parseProduct = (product: ProductType, shop: string) => {
  const { title, offers, image } = product;

  if (!offers) {
    return null;
  }

  const offer = offers.find(offer => offer.host.indexOf(shop) !== -1);

  if (!offer) {
    return null;
  }

  return {
    title,
    price: formatPrice(offer.price, offer.priceCurrency),
    date: formatDate(product.lastUpdate),
    url: formatUrl(offer.url),
    image: image || getImage(offers)
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
  const elements: Array<{
    type: string;
    data: any;
    height: number;
    maxHeight: number;
  }> = [];

  const list = data
    .filter(item => item.isPublished)
    .sort((a, b) => a.categories[0].sort - b.categories[0].sort)
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

  const usedCategories: Array<string> = [];

  listWithPrice
    .filter(({ products }) => products.length > 0)
    .forEach(({ products, category, title }) => {
      if (usedCategories.indexOf(category.id) === -1) {
        usedCategories.push(category.id);
        elements.push({
          type: "category",
          data: category,
          height: 90,
          maxHeight: 280
        });
      }
      elements.push({ type: "title", data: title, height: 36, maxHeight: 190 });
      chunk(products, 2).forEach(row => {
        elements.push({ type: "row", data: row, height: 150, maxHeight: 150 });
      });
    });

  const pages: Array<Array<any>> = [];
  const maxPageHeight = 750;
  let pageIndex = 0;
  let pageHeight = 0;

  elements.forEach(element => {
    if (maxPageHeight - pageHeight < element.maxHeight) {
      pageIndex++;
      pageHeight = 0;
    }

    pageHeight += element.height;

    if (!pages[pageIndex]) {
      pages[pageIndex] = [];
    }
    pages[pageIndex].push(element);
  });

  return {
    pages: pages,
    date: formatDate(new Date().toISOString()),
    shop
  };
};
