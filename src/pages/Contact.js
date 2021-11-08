import React from 'react';
import styled from 'styled-components';
import {FaFacebookSquare, FaInstagram, FaRegBuilding} from 'react-icons/fa';
import {HiOutlineMailOpen} from 'react-icons/hi';
import {BsPhone} from 'react-icons/bs';
import {BiTimeFive} from 'react-icons/bi';

const Contact = () => {
  return (
    <Wrapper>
      <div className="connect">
        <div className="video-banner">
          <div className="section-title">
            <h2>let's get in touch</h2>
            <div className="underline"></div>
          </div>
          <div className="contact-info-box">
            <p className="contact-info">
              <HiOutlineMailOpen className="contact-icon" />
              <span className="contact-span">godqhring@naver.com</span>
            </p>
            <p className="contact-info">
              <BsPhone className="contact-icon" />
              <span className="contact-span">02-2254-2363</span>
            </p>
            <p className="contact-info">
              <FaRegBuilding className="contact-icon" />
              <span className="contact-span">서울 신당동 승부빌딩</span>
            </p>
            <p className="contact-info">
              <BiTimeFive className="contact-icon" />
              <span className="contact-span">월 - 금 : 11 AM - 5 PM</span>
            </p>
          </div>
          <div className="contact-footer">
            <h5>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.facebook.com/Liberzen/?ref=nf&hc_ref=ARSUhTBLxKht4m1rAoNEy8wIGe0d_vvtd99aVgyJ31CY6nDFRfsuJOipFv39oN8aEP0&__tn__=%3C-R"
              >
                <FaFacebookSquare className="navbar-info_icon facebook" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/liberzen/"
              >
                <FaInstagram className="navbar-info_icon insta" />
              </a>
            </h5>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  max-height: 70vh;
  margin: 5rem 0;
  color: black;
  .connect {
    display: grid;
    place-items: center;
  }
  .section-title {
    text-align: center;
    h2 {
      font-size: 1.4rem;
    }
  }
  .underline {
    width: 8rem;
    height: 0.25rem;
    margin: 2rem auto 2rem auto;
    background: black;
  }
  .contact-info {
    font-size: 1rem;
    display: flex;
    .contact-span {
      font-weight: 500;
      display: flex;
      align-items: center;
      font-size: 0.8rem;
    }
    .contact-icon {
      font-size: 1.5rem;
      margin-right: 2rem;
    }
    &:last-child {
      margin-bottom: 3rem;
    }
  }
  span {
    font-weight: bold;
    letter-spacing: 0.4rem;
    margin: 0;
    font-size: 1.3rem;
  }
  h5 {
    margin: 1rem;
    font-weight: 400;
    font-size: 1.8rem;
    text-transform: none;
    line-height: 1.25;
  }
  a {
    margin: 5px;
    font-size: 2.3rem;
    color: black;
    &:hover .facebook,
    &:hover .insta {
      transform: scale(0.96);
      opacity: 0.7;
    }
  }
  .contact-footer {
    display: none;
    text-align: center;
  }

  @media (min-width: 992px) {
    margin: 10rem 0;
    .contact-footer {
      display: block;
    }
    .section-title {
      h2 {
        font-size: 2rem;
      }
    }
    .contact-info {
      font-size: 1rem;
      .contact-span {
        font-size: 1.2rem;
      }
      .contact-icon {
        font-size: 2rem;
        margin-right: 1.5rem;
      }
    }
  }
`;
export default Contact;
