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

import { getFormatPrice } from "../../formatUtils";

const EstimatedValue = ({ account }) => {
  return (
    <AccountSection>
      <AccountLabel>Estimated Value</AccountLabel>

      <AccountHeadline>
        {account && getFormatPrice(account.recentValuation?.amount)}
      </AccountHeadline>
      <AccountList>
        <AccountListItem>
          <InfoText>
            {`Last updated ${format(
              new Date(account.lastUpdate),
              "do MMM yyyy"
            )}`}
          </InfoText>
        </AccountListItem>
        <AccountListItem>
          <InfoText>
            {`Next update ${format(
              add(lastUpdate, { days: account.updateAfterDays }),
              "do MMM yyyy"
            )}`}
          </InfoText>
        </AccountListItem>
      </AccountList>
    </AccountSection>
  );
};

export default EstimatedValue;
