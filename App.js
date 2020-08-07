import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import styled from "styled-components";
import TodoList from "./components/TodoList";
import TodoInsert from "./components/TodoInsert";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([
      ...todos,
      { id: Math.random().toString(), textValue: text, checked: false },
    ]);
  };

  return (
    <Container>
      <StatusBar style="auto" />
      <HeaderTitle>TodoList</HeaderTitle>
      <CardContainer>
        <TodoList todos={todos}/>
        <TodoInsert onAddTodo={addTodo}/>
      </CardContainer>
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #faf4f4;
`;

const HeaderTitle = styled.Text`
  text-align: center;
  font-size: 40px;
  font-weight: 300;
  color: #ff7272;
  margin: 10px 0 30px 0;
  background-color: #faf4f4;
`;

const CardContainer = styled.View`
  flex: 1;
  background-color: #fff;
  border-radius: 10px;
  margin: 0 10px 0 10px;
`;
