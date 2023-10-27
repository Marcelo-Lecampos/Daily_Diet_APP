import { ArrowUpRightIcon, ArrowLeftIcon } from "@components/Icons";
import {
  DashboardContainer,
  DashboardIcon,
  DashboardNumber,
  DashboardTitle,
} from "./styles";
import { useNavigation } from "@react-navigation/native";


type Meal = {
  time: string;
  meal: string;
  onDiet: boolean;
};


type DashboardData = {
  date: string;
  meals: Meal[];
};

type DashBoardHomeProps = {
  data: DashboardData[];
  icon: "LEFT" | "UP_RIGHT";
};

export const DashBoard = ({ data, icon }: DashBoardHomeProps) => {
  const navigation = useNavigation();
 

  function porcentage(data: DashboardData[]): string {
    const dataMap = data.map((item) => item.meals);

    const flatData = dataMap.flat(); 
    const filteredData = flatData.filter((meal) => meal.onDiet === true);
    const percentageValue = (filteredData.length / flatData.length) * 100;

    return `${percentageValue.toFixed(2)}%`;
  }

  const percentageValue = porcentage(data);

  const isPercentageTrue = percentageValue >= "50" ? true : false;

  function handleNavigateToStatistics() {
    navigation.navigate("statistics");
  }

  return (
    <div>
      <DashboardContainer BackgroundColor={isPercentageTrue}>
        <DashboardIcon onPress={handleNavigateToStatistics}>
          {icon === "LEFT" ? <ArrowLeftIcon /> : <ArrowUpRightIcon />}
        </DashboardIcon>

        <DashboardNumber>{percentageValue}
        </DashboardNumber>
        <DashboardTitle>das refeições dentro da dieta</DashboardTitle>
      </DashboardContainer>
    </div>
  );
};
