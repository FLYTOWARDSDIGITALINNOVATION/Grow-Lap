export const createImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', (error) => reject(error));
    // Only set crossOrigin for remote http/https URLs, NOT for base64 data URLs
    if (url && (url.startsWith('http://') || url.startsWith('https://'))) {
      image.setAttribute('crossOrigin', 'anonymous');
    }
    image.src = url;
  });

export async function getCroppedImg(
  imageSrc,
  pixelCrop,
  maxWidth = 1200
) {
  const image = await createImage(imageSrc);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    return imageSrc;
  }

  // Ensure crop dimensions are positive
  const cropX = Math.max(0, pixelCrop.x || 0);
  const cropY = Math.max(0, pixelCrop.y || 0);
  const cropW = Math.max(1, pixelCrop.width || image.naturalWidth);
  const cropH = Math.max(1, pixelCrop.height || image.naturalHeight);

  // Set width to maxWidth, or the actual crop width if it's smaller
  let finalWidth = cropW;
  let finalHeight = cropH;

  if (finalWidth > maxWidth) {
    const ratio = maxWidth / finalWidth;
    finalWidth = maxWidth;
    finalHeight = finalHeight * ratio;
  }

  canvas.width = Math.floor(finalWidth);
  canvas.height = Math.floor(finalHeight);

  ctx.drawImage(
    image,
    cropX,
    cropY,
    cropW,
    cropH,
    0,
    0,
    canvas.width,
    canvas.height
  );

  return canvas.toDataURL('image/jpeg', 0.85);
}
