import React, { useState, useEffect } from "react";
import { Typography, Select, MenuItem } from "@material-ui/core";
import { PDFViewer } from "@react-pdf/renderer";

import { SectionPDF } from "../pdf/SectionPDF";
import { makeSelection } from "../pdf/extract";
import { useSelectionListQuery } from "../api";

export const PdfPage = () => {
  const [shop, setShop] = useState("ozon.ru");
  const [selectionData, setSelectionData] = useState<any>(null);
  const { data } = useSelectionListQuery();

  useEffect(() => {
    if (shop && data && data.selection) {
      makeSelection(shop, data.selection.list).then(setSelectionData);
    }
  }, [shop, data]);

  const handleChange = (event: any) => {
    setShop(event.target.value);
    setSelectionData(null);
  };

  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        PDF
      </Typography>
      <Select fullWidth value={shop} onChange={handleChange}>
        <MenuItem value="ozon.ru">ozon.ru</MenuItem>
        <MenuItem value="wildberries.ru">wildberries.ru</MenuItem>
        <MenuItem value="4fresh.ru">4fresh.ru</MenuItem>
        <MenuItem value="beru.ru">beru.ru</MenuItem>
        <MenuItem value="iherb.com">iherb.com</MenuItem>
        <MenuItem value="utkonos.ru">utkonos.ru</MenuItem>
        <MenuItem value="perekrestok.ru">perekrestok.ru</MenuItem>
        <MenuItem value="auchan.ru">auchan.ru</MenuItem>
        <MenuItem value="globus.ru">globus.ru</MenuItem>
      </Select>
      {selectionData && (
        <PDFViewer width="100%" height="600px">
          <SectionPDF {...selectionData} />
        </PDFViewer>
      )}
    </React.Fragment>
  );
};
