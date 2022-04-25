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
  const [account, setAccount] = React.useState({});

  useEffect(() => {
    window
      .fetch("/api/account")
      .then((res) => res.json())
      .then((data) => {
        setAccount(data);
      });
  }, []);

  return (
    <Inset>
      {account &&
        <EstimatedValue account={account} />
      }


      <Button
        // This is a dummy action
        onClick={() => alert("You have navigated to the edit account page")}
      >
        Edit account
      </Button>
    </Inset>
  );
};

export default Detail;
