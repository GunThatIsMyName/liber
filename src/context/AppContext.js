import React, { createContext, useContext, useReducer, useState } from 'react';
import {
  clickCloseModal,
  clickOpenModal,
  ERROR,
  GET_DATA,
  OFF_MUTED,
  ON_MUTED,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  SET_LOADING,
  SIDEBAR_CLOSE,
  SIDEBAR_OPEN,
} from './action';
import reducer, { initialState } from './reducer';
import axios from 'axios';

const API_START_POINT = 'https://api.airtable.com/v0/app1szHXcA5oPa7Pk';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [showPhoto, setShowPhoto] = useState({});

  const fetchData = async (year) => {
    dispatch({ type: SET_LOADING });
    try {
      const { data } = await axios(`${API_START_POINT}/${year}`, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_TOKEN}`,
        },
      });

      console.log(data, 'data');
      const { records } = data;

      if (!records || records.length === 0) {
        throw new Error('No data');
      }

      const newData = records
        .map((item) => {
          const newImgData = item.fields.img.map((imgItem) => {
            return {
              id: imgItem.id,
              url: imgItem.url,
              name: imgItem.filename,
            };
          });
          return {
            id: item.id,
            month: item.fields.month,
            img: newImgData,
          };
        })
        .sort((a, b) => a.month - b.month);

      dispatch({ type: GET_DATA, payload: newData });
    } catch (error) {
      dispatch({ type: ERROR });
    }
  };

  const controlGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };
  const controlListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const openModal = (id, idx, month) => {
    setShowPhoto({ id, idx, month });
    dispatch({ type: clickOpenModal, payload: { id, month } });
  };

  const closeModal = () => {
    dispatch({ type: clickCloseModal });
  };

  const handleClick = (event) => {
    const { nodeName } = event.target;
    if (nodeName === 'IMG') {
      return;
    }
    closeModal();
  };

  const handleVolume = (video) => {
    const volume = video.muted;
    console.log(volume, 'volume');
    if (volume) {
      video.muted = false;
      dispatch({ type: OFF_MUTED });
    } else {
      video.muted = true;
      dispatch({ type: ON_MUTED });
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        fetchData,
        controlGridView,
        controlListView,
        handleScrollTop,
        openModal,
        handleClick,
        showPhoto,
        handleVolume,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
