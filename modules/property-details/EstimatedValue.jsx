import React from "react";

import { add, format } from "date-fns";

import {
  AccountLabel,
  AccountListItem,
  AccountSection,
  AccountHeadline,
  AccountList,
  InfoText,
} from "./style";

import { getFormattedNumber } from "../../formatUtils";

const EstimatedValue = ({ account }) => {
  const lastUpdate = new Date(account.lastUpdate);
  return (
    <AccountSection>
      <AccountLabel>Estimated Value</AccountLabel>

      <AccountHeadline>
        {account && getFormattedNumber(account.recentValuation?.amount)}
      </AccountHeadline>
      <AccountList>
        <AccountListItem>
          <InfoText>
            {`Last updated ${format(lastUpdate, "do MMM yyyy")}`}
          </InfoText>
        </AccountListItem>
        <AccountListItem>
          <InfoText>{`Next update ${format(
            add(lastUpdate, { days: account.updateAfterDays }),
            "do MMM yyyy"
          )}`}</InfoText>
        </AccountListItem>
      </AccountList>
    </AccountSection>
  );
};

export default EstimatedValue;
