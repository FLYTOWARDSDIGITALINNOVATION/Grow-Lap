export const createImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', (error) => reject(error));
    image.setAttribute('crossOrigin', 'anonymous'); // needed to avoid CORS issues
    image.src = url;
  });

export async function getCroppedImg(
  imageSrc,
  pixelCrop,
  maxWidth = 1000
) {
  const image = await createImage(imageSrc);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    return null;
  }

  // Set width to maxWidth, or the actual crop width if it's smaller
  let finalWidth = pixelCrop.width;
  let finalHeight = pixelCrop.height;

  if (finalWidth > maxWidth) {
    const ratio = maxWidth / finalWidth;
    finalWidth = maxWidth;
    finalHeight = finalHeight * ratio;
  }

  // set canvas size to match the bounding box
  canvas.width = finalWidth;
  canvas.height = finalHeight;

  // draw the image cropped and scaled
  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    finalWidth,
    finalHeight
  );

  // Return Base64 string directly
  // Using JPEG and 0.8 quality for good compression while maintaining visuals
  return canvas.toDataURL('image/jpeg', 0.8);
}
