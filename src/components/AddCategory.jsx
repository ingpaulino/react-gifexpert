import { useState, useEffect } from 'react';

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  }

  function onlySpaces(valor){
    return valor.split('').every(char => char === ' ');
  }

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue !== '' && !(onlySpaces(inputValue))){
      onNewCategory(inputValue.trim());
      setInputValue('');
    }
  }

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar gifs (presione ENTER)"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}
