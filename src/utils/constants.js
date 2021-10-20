import React from 'react';
import {GiRolledCloth, GiClothespin} from 'react-icons/gi';
import {FaStore} from 'react-icons/fa';
import pattern from '../assets/pattern.jpeg';
import design from '../assets/design.jpeg';
import store from '../assets/store.jpeg';
import {clothes1, clothes2, clothes3, store1, store2, store3} from '../assets';

export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'collections',
    url: '/shop/2020',
  },
  {
    id: 4,
    text: 'contact',
    url: '/contact',
  },
];
export const services = [
  {
    id: 1,
    icon: <GiRolledCloth />,
    title: 'Pattern',
    text: 'Any Patterns ',
    src: pattern,
  },
  {
    id: 2,
    icon: <GiClothespin />,
    title: 'Design',
    text: 'Any Designs',
    src: design,
  },
  {
    id: 3,
    icon: <FaStore />,
    title: 'Store',
    text: 'Any Stores',
    src: store,
  },
];
export const clothes = [
  {
    id: 'li_3308',
    title: 'cloth8',
    src: clothes3,
    year: 2020,
    number: 1,
    text: 'Founded company 2001 . 08',
  },
  {
    id: 'li_3307',
    title: 'cloth7',
    src: clothes2,
    year: 2019,
    number: 2,
    text: 'Liberzen 행사',
  },
  {
    id: 'li_3306',
    title: 'cloth6',
    src: clothes1,
    year: 2018,
    number: 3,
    text: 'Liberzen 행사',
  },
];
export const stores = [
  {
    id: 'st_1',
    title: 'store1',
    src: store1,
    text: 'store place',
    place: '벨포스트 Store',
    phone: '02-2254-2626',
  },
  {
    id: 'st_2',
    title: 'store2',
    src: store2,
    text: 'store place',
    place: 'APM Store',
    phone: '02-2250-1711',
  },
  {
    id: 'st_3',
    title: 'store3',
    src: store3,
    text: 'store place',
    place: '유어스 Store',
    phone: '02-6270-1017',
  },
];
