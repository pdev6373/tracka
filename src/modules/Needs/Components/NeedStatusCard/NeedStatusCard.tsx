import React from 'react';
import StatusCard, { StatusTypeEnum } from "../../../../components/StatusCard";
import {  NeedStatusEnum } from "../../../../types";


function NeedStatusCard({ status }: { status: NeedStatusEnum }) {
    switch (status) {
      case NeedStatusEnum.Pending:
        return <StatusCard type={StatusTypeEnum.Red}>Pending</StatusCard>;
      default:
        return null;
    }
  }

  export default NeedStatusCard;
  