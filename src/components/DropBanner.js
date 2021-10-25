import React, {useEffect, useState} from 'react';
import {
  chormeSVG,
  edge,
  edgeSVG,
  explorerSVG,
  google,
} from '../utils/constants';

const DropBanner = () => {
  const [isIe, setIsIe] = useState(false);
  const isIE = () => {
    if (
      navigator.userAgent.indexOf('MSIE') !== -1 ||
      !!document.documentMode === true
    ) {
      setIsIe(true);
    }
  };

  useEffect(() => {
    isIE();
  }, []);

  return (
    <>
      {isIe ? (
        <div className="drop-banner">
          <img src={explorerSVG} alt="explorer" />
          <p>
            지금 귀하가 사용하고 계신 Internet Explorer 브라우저는 지원이 곧
            종료 됩니다.
          </p>
          <p>
            더 나은 서비스를 Microsoft Edge 혹은 Google Chrome 브라우저에서 이용
            가능합니다.
          </p>
          <div className="homepage">
            <a href={google} target="_blank" rel="noopener noreferrer">
              <img src={chormeSVG} alt="chomre" />
              Chrome
            </a>
            <a href={edge} target="_blank" rel="noopener noreferrer">
              <img src={edgeSVG} alt="chomre" />
              Edge
            </a>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default DropBanner;
