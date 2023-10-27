import { FlatList } from "react-native";
import { SnackHour } from "../SnackHour/SnackHour";
import { DataTitle, SnackDayContainer } from "./styles";

type SnackDayProps = {
  day: string;
  snacks: {
    time: string;
    meal: string;
    onDiet: boolean;
  }[];
};

export const SnackDay = ({ day, snacks }: SnackDayProps) => {
  return (
    <>
      <SnackDayContainer>
        <DataTitle>{day}</DataTitle>
        <FlatList
          data={snacks}
          keyExtractor={(item) => item.time + item.meal}
          renderItem={({ item }) => (
            <SnackHour hour={item.time} name={item.meal} onDiet={item.onDiet} />
          )}
        />
      </SnackDayContainer>
    </>
  );
};
