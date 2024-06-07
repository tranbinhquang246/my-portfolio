'use client';
import { useCallback, useMemo, useState } from 'react';
import Image, { ImageProps } from 'next/image';

export type ImageRoundProps = {
  src: string;
  alt: string;
  className?: string;
};

const ImageRound = ({
  src,
  alt,
  className,
  ...props
}: ImageRoundProps & Omit<ImageProps, 'alt'>) => {
  const [hasErrorImage, setHasErrorImage] = useState<boolean>(false);

  const onImageError = useCallback(() => {
    setHasErrorImage(true);
  }, []);

  const renderImage = useMemo(() => {
    if (hasErrorImage || !src) {
      return '/images/no-image.png';
    }
    return src;
  }, [src, hasErrorImage]);

  return (
    <Image
      src={renderImage}
      width={0}
      height={0}
      sizes="100vw"
      className={`object-cover object-center ${className}`}
      alt={alt}
      onError={onImageError}
      {...props}
    />
  );
};

export default ImageRound;
