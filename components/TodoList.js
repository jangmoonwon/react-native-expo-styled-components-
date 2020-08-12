import React from "react";
import styled from "styled-components";
import TodoListItem from "./TodoListItem";

export default function TodoList({todos, onRemove}) {
  return (
    <Container>
      {todos.map(todo => (
        <TodoListItem key={todo.id} {...todo} onRemove={onRemove}/>
      ))}
    </Container>
  );
}

const Container = styled.ScrollView`
align-content: center;
`;