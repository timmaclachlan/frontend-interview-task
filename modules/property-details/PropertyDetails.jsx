import React from "react";

const PropertyDetails = ({ account }) => {
  return;
  <AccountSection>
    <AccountLabel>Property details</AccountLabel>
    <RowContainer>
      <AccountList>
        <AccountListItem>
          <InfoText>{account.name}</InfoText>
        </AccountListItem>
        <AccountListItem>
          <InfoText>{account.bankName}</InfoText>
        </AccountListItem>
        <AccountListItem>
          <InfoText>{account.postcode}</InfoText>
        </AccountListItem>
      </AccountList>
    </RowContainer>
  </AccountSection>;
};

export default PropertyDetails;
