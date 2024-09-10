import React from 'react';
import './banner.scss';

export default function Banner({ bannerImg, bannerClass, imgClass, title, altText }) {
  return (
    <div className={bannerClass}>
      <img
        src={bannerImg}
        alt={altText}
        className={imgClass}
      />
      {title && <h1 className="banner__home__title">{title}</h1>}
    </div>
  );
}
