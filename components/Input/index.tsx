import React from 'react';

import { InputWrapper } from './styles';

const Input = ({ handleChangeInput }: any) => {
  return (
    <div>
      <InputWrapper
        type="search"
        placeholder="Tìm kiếm câu hỏi..."
        onChange={handleChangeInput}
      />
    </div>
  );
};

export default Input;
