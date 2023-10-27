import { DashBoard } from "@components/DashBoard/DashBoard";
import { HeaderHome } from "./components/HeaderHome/HeaderHome";
import { MainList } from "./components/MainList";
import { mock } from "@screens/Home/mock/snackMock";

export const Home = () => {
  return (
    <>
      <HeaderHome />
      <DashBoard data={mock} icon="UP_RIGHT" />
      <MainList data={mock}/>
    </>
  );
};
