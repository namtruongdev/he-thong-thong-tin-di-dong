import React, { useState } from 'react';
import styled from 'styled-components';

import Input from '@components/Input';
import Results from '@components/Results';
import data from '@data/data.json';

type Answer = {
  question: string;
  answer: string;
}[];

const Main = styled.main`
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  font-size: 21px;
  font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;
const IndexPage = () => {
  const [answer, setAnswer] = useState<Answer | null>(null);
  const handleChangeInput = (e: any) => {
    const query = e.target.value.toLowerCase();
    if (query === '') {
      setAnswer(null);
    } else {
      const newData = data.filter(
        (value) => value.question.toLowerCase().search(query) !== -1
      );
      setAnswer(newData);
    }
  };

  return (
    <Main>
      <Input handleChangeInput={handleChangeInput} data={data} />
      <Results answer={answer} />
    </Main>
  );
};

export default IndexPage;
