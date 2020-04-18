import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Image
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

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    fontFamily: "NotoSans"
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 15
  },
  productTitle: {
    fontSize: 10
  },
  productPrice: {
    fontSize: 12,
    marginTop: 10,
    fontFamily: "Roboto"
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  productItem: {
    width: 260,
    height: 120,
    marginBottom: 30,
    flexDirection: "row",
    display: "flex"
  },
  productImage: {
    width: 100,
    paddingRight: 10
  },
  productInfo: {
    width: 160
  },
  image: {
    objectFit: "contain",
    objectPosition: "center top"
  }
});

const makeUrl = (url: string) =>
  `https://abwynsuxfo.cloudimg.io/v7/${url.replace(/https?:\/\//, "")}?trim=5`;

const SelectionTitle: React.FC<{ title: string }> = ({ title }) => (
  <View>
    <Text style={styles.sectionTitle}>{title}</Text>
  </View>
);

const SelectionRow: React.FC<{ products: Array<any> }> = ({ products }) => (
  <View style={styles.row}>
    {products.map(product => (
      <View key={product.title} style={styles.productItem}>
        <View style={styles.productImage}>
          <Image style={styles.image} src={makeUrl(product.image)} />
        </View>
        <View style={styles.productInfo}>
          <Text style={styles.productTitle}>{product.title}</Text>
          <Text style={styles.productPrice}>{product.price}</Text>
        </View>
      </View>
    ))}
  </View>
);

type RowType = { type: string; data: any };

export const SectionPDF: React.FC<{
  data: Array<Array<RowType>>;
}> = ({ data }) => {
  console.log(data);

  return (
    <Document>
      {data.map((page, index) => (
        <Page size="A4" style={styles.page} key={index}>
          {page.map(({ type, data }, indexRow) => {
            if (type === "title") {
              return <SelectionTitle key={indexRow} title={data.title} />;
            }

            if (type === "row") {
              return <SelectionRow key={indexRow} products={data} />;
            }
          })}
        </Page>
      ))}
    </Document>
  );
};
