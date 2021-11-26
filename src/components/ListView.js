import React from 'react';
import {useGlobalContext} from '../context/AppContext';
import Viewer from './Viewer';

const ListView = ({eachYear}) => {
  const {clothes, openModal} = useGlobalContext();
  if (eachYear === '2021') {
    return (
      <Viewer
        clothes={clothes}
        openModal={openModal}
        name={'point-container'}
      />
    );
  }
  return <Viewer clothes={clothes} openModal={openModal} />;
};

export default ListView;
