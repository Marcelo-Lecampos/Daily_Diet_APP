
import { SnackButton } from "../SnackButton/SnackButton";
import { SnackDay } from "../SnackDay";
import { MainContainer } from "./styles";

type MainListProps = {
  data: {
    date: string;
    meals: {
      time: string;
      meal: string;
      onDiet: boolean;
    }[];
  }[];
}

export const MainList = ({data}:MainListProps) => {
  return (
    <>
      <MainContainer>
        <SnackButton />
        {data.map((item) =>      
        <SnackDay
            key={item.date}
            day={item.date}
            snacks={item.meals}
          />)}
      </MainContainer>
    </>
  );
};
