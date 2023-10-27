
import {
  IconBall,
  Snack,
  Hour,
  SnackCardContainer,
  SnackSpan,
  SnackText,
} from "./styles";

type SnackCardProps = {
  hour: string;
  name: string;
  onDiet: boolean;
};


export const SnackHour = ({ hour, name, onDiet }: SnackCardProps) => {
  return (
    <SnackCardContainer>
      <Snack>
        <Hour> {hour} </Hour>
        <SnackSpan> | </SnackSpan>
        <SnackText> {name} </SnackText>
      </Snack>
      <IconBall onDiet={onDiet} />
    </SnackCardContainer>
  );
};
