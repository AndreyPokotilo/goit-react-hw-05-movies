import { useState } from 'react';
import { Wrapper, Form, Input, Button, Icon } from './SearchBox.styled';

export function SearchBox({ onSubmit }) {
  const [query, setQuery] = useState('');

  function handlChange(e) {
    setQuery(e.target.value.toLowerCase());
  }

  function handlSubmit(evt) {
    evt.preventDefault();

    if (query.trim() === '') {
      alert('Введите корректное имя');
      return;
    }

    onSubmit(query);
    setQuery('');
  }

  return (
    <Wrapper>
        <Form onSubmit={handlSubmit}>
          <Input type="text" value={query} onChange={handlChange}></Input>
          <Button type="submit">
            <Icon />
          </Button>
        </Form>
    </Wrapper>
  );
}
