import React from 'react';
import styled from 'styled-components';

const Company = () => {
  return (
    <Wrapper className="section">
      <div className="section-center">
        <h3 className="liberzen">Liberzen</h3>
        <h3>Liberal Citizen</h3>
        <h3 className="center">Founded 2001.08.</h3>
        <h3>Liberzen could change you.</h3>
        <h3>Honestly, Freely, Truthfully.</h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: #202124;
  min-height: 85vh;
  margin: auto;
  color: #fff;
  display: grid;
  padding: 0 1rem;
  align-items: center;
  h3 {
    font-size: 1rem;
    margin-bottom: 1.4rem;
  }
  .center {
    margin-bottom: 4rem;
  }
  .liberzen {
    text-transform: uppercase;
    letter-spacing: 0.6rem;
  }
  @media (min-width: 576px) {
    padding-left: 5rem;
    h3 {
      font-size: 1.3rem;
    }
  }
`;

export default Company;
