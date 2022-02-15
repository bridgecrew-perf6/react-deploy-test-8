import { useState } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 36px;
  color: #acf;
`;

const Home = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount((c) => c + 1);
  };

  const decrease = () => {
    setCount((c) => c - 1);
  };

  return (
    <div>
      <Title>Hello World</Title>
      <h1>{count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
};

export default Home;
