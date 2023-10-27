import { DashBoard } from "@components/DashBoard/DashBoard";
import React from "react";
import { mock } from "@screens/Home/mock/snackMock";


export const Statistics = () => {
  return (
    <>
        <DashBoard data={mock} icon="LEFT" />
    </>
  );
};
