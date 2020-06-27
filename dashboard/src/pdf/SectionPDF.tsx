import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  Font,
  Image,
  Link
} from "@react-pdf/renderer";

Font.register({
  family: "NotoSans",
  fonts: [
    { src: "/fonts/NotoSans-Regular.ttf" },
    { src: "/fonts/NotoSans-Bold.ttf", fontWeight: "700" }
  ]
});

Font.register({
  family: "Roboto",
  fonts: [{ src: "/fonts/Roboto-Bold.ttf" }]
});

const makeUrl = (url: string) =>
  url
    ? `https://abwynsuxfo.cloudimg.io/v7/${url.replace(
        /https?:\/\//,
        ""
      )}?trim=5`
    : "/images/empty.jpg";

const SelectionTitle: React.FC<{ title: string }> = ({ title }) => (
  <View>
    <Text
      style={{
        fontSize: 12,
        fontWeight: "bold",
        marginBottom: 20
      }}
    >
      {title}
    </Text>
  </View>
);

const SelectionRow: React.FC<{ products: Array<any>; first: boolean }> = ({
  products,
  first
}) => (
  <View
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between"
    }}
  >
    {products.map((product, index) => (
      <View
        key={index}
        style={{
          width: 260,
          height: 120,
          marginBottom: 30,
          flexDirection: "row",
          display: "flex"
        }}
      >
        <View
          style={{
            width: 100,
            paddingRight: 10
          }}
        >
          <Image
            style={{
              objectFit: "contain",
              objectPosition: "center top"
            }}
            src={makeUrl(product.image)}
          />
        </View>
        <View
          style={{
            width: first && index === 1 ? 120 : 160
          }}
        >
          <Text
            style={{
              fontSize: 10
            }}
          >
            {product.title}
          </Text>
          <Link src={product.url}>
            <Text
              style={{
                fontSize: 12,
                marginTop: 10,
                fontFamily: "Roboto"
              }}
            >
              {product.price || "Узнать цену"}
            </Text>
          </Link>
        </View>
      </View>
    ))}
  </View>
);

const SelectionCategory: React.FC<{ category: any }> = ({ category }) => (
  <View style={{ marginBottom: 20 }}>
    <Image
      style={{
        width: 350,
        height: 70,
        objectFit: "contain",
        objectPosition: "0 0"
      }}
      src={`/images/${category.slug}.png`}
    />
  </View>
);

type RowType = { type: string; data: any };

export const SectionPDF: React.FC<{
  shop: string;
  date: string;
  pages: Array<Array<RowType>>;
}> = ({ pages, shop, date }) => {
  return (
    <Document>
      {pages.map((page, index) => (
        <Page
          size="A4"
          style={{
            backgroundColor: "#FFFFFF",
            paddingTop: 30,
            paddingRight: 30,
            paddingLeft: 30,
            paddingBottom: 30,
            fontFamily: "NotoSans"
          }}
          key={index}
        >
          <Image
            style={{
              width: 60,
              height: 60,
              position: "absolute",
              top: 10,
              right: 10
            }}
            src="/images/flower.png"
          />
          <Image
            style={{
              width: 100,
              position: "absolute",
              left: 30,
              bottom: 10
            }}
            src="/images/dots.png"
          />
          <View
            style={{
              position: "absolute",
              bottom: 10,
              right: 30
            }}
          >
            <Text
              style={{
                color: "#666",
                fontSize: 10
              }}
            >
              {shop}
            </Text>
            <Text
              style={{
                color: "#666",
                fontSize: 10
              }}
            >
              {date}
            </Text>
          </View>

          {page.map(({ type, data }, indexRow) => {
            if (type === "title") {
              return <SelectionTitle key={indexRow} title={data} />;
            }

            if (type === "row") {
              return (
                <SelectionRow
                  key={indexRow}
                  first={indexRow === 0}
                  products={data}
                />
              );
            }

            if (type === "category") {
              return <SelectionCategory key={indexRow} category={data} />;
            }

            return null;
          })}
        </Page>
      ))}
    </Document>
  );
};
