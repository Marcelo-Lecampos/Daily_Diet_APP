import styled from 'styled-components/native';

export const InputContainer = styled.View`
  margin: 10px;

`;

export const InputLabel = styled.Text`
  font-size: ${props => props.theme.FONT_SIZE.S}px;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const InputField = styled.TextInput`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  font-size: ${props => props.theme.FONT_SIZE.SM}px;
`;