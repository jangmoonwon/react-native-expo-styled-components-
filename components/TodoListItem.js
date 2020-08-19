import React from "react";
import styled, { css } from "styled-components";
import { Text, TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";

export default function TodoListItem({
  id,
  textValue,
  checked,
  onRemove,
  onToggle,
}) {
  return (
    <Container>
      <TouchableOpacity onPressOut={onToggle(id)}>
        {checked ? (
          <CircleBtn>
            <AntDesign name="checkcircle" size={35} color="#bbb" />
          </CircleBtn>
        ) : (
          <CircleBtn>
            <FontAwesome5 name="circle" size={35} color="#131313" />
          </CircleBtn>
        )}
      </TouchableOpacity>
      <ListItemText isChecked={checked}>
        {textValue}
      </ListItemText>
      <DeleteBtn>
        <Text onPress={onRemove(id)}>
          <AntDesign name="minuscircleo" size={35} color="#ff7272" />
        </Text>
      </DeleteBtn>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-color: #bbb;
  border-bottom-width: 1px;
`;

const CircleBtn = styled.View`
  margin: 0 20px 0 20px;
`;

const DeleteBtn = styled.TouchableOpacity`
  margin: 10px;
`;

const ListItemText = styled.Text`
  flex: 5;
  font-size: 23px;
  font-weight: 500;
  margin: 20px;
  color: ${({isChecked}) => (isChecked ? '#bbb' : '#29323c')};
  text-decoration: ${({isChecked}) => (isChecked ? 'line-through' : 'none')};
  text-decoration-color: red;
`;

const UnStrikeText = styled.Text`
  flex: 5;
  font-weight: 500;
  font-size: 20px;
`;

const StrikeText = styled.Text`
  flex: 5;
  font-weight: 500;
  font-size: 20px;
  text-decoration: line-through;
  color: red;
`;