import React from "react";
import styled from "styled-components";
import { Text } from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";

export default function TodoListItem({ id, textValue, checked, onRemove }) {
  return (
    <Container>
      <CircleBtn>
        <FontAwesome5 name="circle" size={35} color="#131313" />
      </CircleBtn>
      <ListItemText>{textValue}</ListItemText>
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

const CircleBtn = styled.TouchableOpacity`
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
`;
