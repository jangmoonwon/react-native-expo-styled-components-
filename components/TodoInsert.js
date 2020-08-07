import React, { useState } from "react";
import { TouchableOpacity, KeyboardAvoidingView } from "react-native";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";

export default function TodoInsert({ onAddTodo }) {
  const [newTodoItem, setNewTodoItem] = useState("");

  const todoInputHandler = (newTodo) => {
    setNewTodoItem(newTodo);
  };

  const addTodoHandler = () => {
    onAddTodo(newTodoItem);
    setNewTodoItem('');
  };

  return (
    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={120}>
      <Container>
        <InputContainer>
          <StyledTextInput
            placeholder="Enter new todo"
            autoCorrect={false}
            onChangeText={todoInputHandler}
            value={newTodoItem}
            onSubmitEditing={addTodoHandler}
            returnKeyType="done"
          />
          <TouchableOpacity>
            <AntDesign name="upcircleo" size={28} color="#ff7272" onPress={addTodoHandler}/>
          </TouchableOpacity>
        </InputContainer>
      </Container>
    </KeyboardAvoidingView>
  );
}

const Container = styled.View`
  margin: 0 40px 30px 40px;
`;

const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  border-bottom-width: 2.3px;
  border-bottom-color: #bbb;
  height: 50px;
  padding-left: 10px;
`;

const StyledTextInput = styled.TextInput`
  flex: 1;
  font-size: 25px;
`;
