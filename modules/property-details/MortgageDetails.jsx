import React from "react";
import PropTypes from "prop-types";

import RowContainer from "../../components/row-container";

import {
  AccountLabel,
  AccountList,
  AccountListItem,
  AccountSection,
  InfoText,
} from "./style";

import { getMortgage } from "../accountHelpers";
import { getFormattedNumber } from "../../formatUtils";

const MortgageDetails = ({ account }) => {
  let mortgage = getMortgage(account);

  if (!mortgage) return null;

  return (
    mortgage && (
      <AccountSection>
        <AccountLabel>Mortgage</AccountLabel>
        <RowContainer
          // This is a dummy action
          onClick={() => alert("You have navigated to the mortgage page")}
        >
          <AccountList>
            <AccountListItem>
              <InfoText>{getFormattedNumber(mortgage.currentBalance)}</InfoText>
            </AccountListItem>
            <AccountListItem>
              <InfoText>{mortgage.name}</InfoText>
            </AccountListItem>
          </AccountList>
        </RowContainer>
      </AccountSection>
    )
  );
};

MortgageDetails.propTypes = {
  account: PropTypes.object,
};

export default MortgageDetails;
