import React from "react";

import {
  AccountLabel,
  AccountListItem,
  AccountSection,
  InfoText,
  InfoValueChange,
} from "./style";

import { getFormattedNumber, getFormattedDate } from "../../formatUtils";
import { getValuationIncreaseDetails } from "../accountHelpers";

const ValuationChanges = ({ account }) => {
  const valuationDetails = getValuationIncreaseDetails(account);

  return (
    <AccountSection>
      <AccountLabel>Valuation Change</AccountLabel>

      <AccountListItem>
        <InfoText>
          Purchased for {getFormattedNumber(account.originalPurchasePrice)} in{" "}
          {getFormattedDate(account.originalPurchasePriceDate)}{" "}
        </InfoText>
      </AccountListItem>
      <AccountListItem>
        <InfoText>
          Since Purchase
          <InfoValueChange>
            {getFormattedNumber(valuationDetails.valuationChange)} (
            {valuationDetails.valuationChangePercent}
            %)
          </InfoValueChange>
        </InfoText>
      </AccountListItem>
      <AccountListItem>
        <InfoText>
          Annual Appreciation
          <InfoValueChange>
            {valuationDetails.meanAnnualAppreciation}%
          </InfoValueChange>
        </InfoText>
      </AccountListItem>
    </AccountSection>
  );
};

export default ValuationChanges;
