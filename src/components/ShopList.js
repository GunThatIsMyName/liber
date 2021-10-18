import React, {useEffect} from 'react';
import {Loader} from '.';
import {useGlobalContext} from '../context/AppContext';
import Error from '../pages/Error';
import GridView from './GridView';
import ListView from './ListView';

const ShopList = ({eachYear}) => {
  const { grid_view, fetchData, loading,error} = useGlobalContext();

  useEffect(() => {
    if (eachYear) {
      fetchData(eachYear);
    }
    // eslint-disable-next-line
  }, [eachYear]);

  if (loading) {
    return <Loader />;
  }
  if(error){
    console.log(error,"???")
    return<Error />
  }

  if (grid_view === false) {
    return <GridView />;
  }
  return <ListView />;
};

export default ShopList;
