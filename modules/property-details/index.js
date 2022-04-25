/* eslint-disable max-statements */
import React, { useEffect } from "react";

import { Button } from "../../components/button";
import {
  Inset,
} from "./style";

import EstimatedValue from "./EstimatedValue";
import ValuationChanges from "./valuationChanges";
import PropertyDetails from "./PropertyDetails";
import MortgageDetails from "./MortgageDetails";

const Detail = ({ }) => {
  const [data, setData] = React.useState({});

  useEffect(() => {
    window
      .fetch("/api/account")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  if (data.account) {
    return (
      <Inset>
        <EstimatedValue account={data.account} />
        <ValuationChanges account={data.account} />
        <MortgageDetails account={data.account} />
        <PropertyDetails account={data.account} />

        <Button
          // This is a dummy action
          onClick={() => alert("You have navigated to the edit account page")}
        >
          Edit account
        </Button>
      </Inset >
    );
  }
  return null;
};

export default Detail;
