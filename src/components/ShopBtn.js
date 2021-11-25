import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import styled from 'styled-components';

const category = () => {
  let max = new Date().getFullYear();
  let min = 2013;
  let years = [];
  for (let i = max; i >= min; i--) {
    const data = {id: i, name: i};
    years.push(data);
  }
  return years;
};

const ShopBtn = ({location: {pathname}}) => {
  const year = pathname.substr(6);
  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-control">
            <h5>Collections</h5>
            <div className="content-btn-box">
              {category().length > 1 &&
                category().map((item) => {
                  const {name, id} = item;
                  return (
                    <Link key={id} to={`/shop/${id}`}>
                      <button
                        className={`year-btn ${
                          name === Number(year) ? 'active' : null
                        }`}
                        name="category"
                        key={id}
                      >
                        {name}
                      </button>
                    </Link>
                  );
                })}
            </div>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin: 1rem 0;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  .year-btn {
    display: block;
    margin: 0.7em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    text-align: center;
    background: transparent;
    border: none;
    letter-spacing: var(--spacing);
    padding: 5px;
    border-radius: 3px;
    color: black;
    cursor: pointer;
    transition: all 300ms linear;
    &:hover {
      transform: scale(1.09);
      font-weight: bold;
    }
  }
  .content-btn-box {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
  .active {
    background-color: black;
    color: white;
    font-weight: bold;
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(—clr-red-dark);
    color: var(—clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(—radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
    .content-btn-box {
      display: block;
    }
  }
`;

export default withRouter(ShopBtn);
