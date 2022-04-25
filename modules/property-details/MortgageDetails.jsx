import React from "react";

import {
  AccountLabel,
  AccountList,
  AccountListItem,
  AccountSection,
  InfoText,
} from "./style";

const MortgageDetails = () => {
  return;
  {
    mortgage && (
      <AccountSection>
        <AccountLabel>Mortgage</AccountLabel>
        <RowContainer
          // This is a dummy action
          onClick={() => alert("You have navigated to the mortgage page")}
        >
          <AccountList>
            <AccountListItem>
              <InfoText>
                {new Intl.NumberFormat("en-GB", {
                  style: "currency",
                  currency: "GBP",
                }).format(
                  Math.abs(account.associatedMortgages[0].currentBalance)
                )}
              </InfoText>
            </AccountListItem>
            <AccountListItem>
              <InfoText>{account.associatedMortgages[0].name}</InfoText>
            </AccountListItem>
          </AccountList>
        </RowContainer>
      </AccountSection>
    );
  }
};

export default MortgageDetails;
