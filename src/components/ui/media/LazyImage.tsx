import React from "react";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const LazyImage: React.FC<LazyImageProps> = (props) => (
  <img loading="lazy" {...props} />
);

export default LazyImage;