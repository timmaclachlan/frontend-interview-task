import React from "react";

import {
  AccountLabel,
  AccountListItem,
  AccountSection,
  InfoText,
  InfoValueChange,
} from "./style";

const ValuationChanges = ({ account }) => {
  return (
    <AccountSection>
      <AccountLabel>Valuation Changes</AccountLabel>

      <AccountListItem>
        <InfoText>
          Purchased for {getFormatPrice(account.originalPurchasePrice)} in{" "}
          {getFormattedDate(account.originalPurchasePriceDate)}{" "}
        </InfoText>
      </AccountListItem>
      <AccountListItem>
        <InfoText>
          Since Purchase
          <InfoValueChange>
            {getFormatPrice(valuationSincePurchase)} ({sincePurchasePercent}%)
          </InfoValueChange>
        </InfoText>
      </AccountListItem>
      <AccountListItem>
        <InfoText>
          Annual Appreciation
          <InfoValueChange>{annualAppreciation}%</InfoValueChange>
        </InfoText>
      </AccountListItem>
    </AccountSection>
  );
};

export default ValuationChanges;
