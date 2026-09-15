import React, { useState, useRef } from 'react';
import ReactCrop, { centerCrop, makeAspectCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { getCroppedImg } from '../../utils/cropImage';

const ImageCropperModal = ({ imageSrc, onCancel, onSave, onUploadOriginal }) => {
  const [crop, setCrop] = useState({
    unit: '%',
    width: 90,
    height: 90,
    x: 5,
    y: 5
  });
  const [completedCrop, setCompletedCrop] = useState(null);
  const imgRef = useRef(null);

  const onImageLoad = (e) => {
    const { width, height } = e.currentTarget;
    const initialCrop = {
      unit: '%',
      width: 90,
      height: 90,
      x: 5,
      y: 5
    };
    setCrop(initialCrop);
    setCompletedCrop({
      unit: 'px',
      x: width * 0.05,
      y: height * 0.05,
      width: width * 0.9,
      height: height * 0.9
    });
  };

  const handleCropAndSave = async () => {
    const img = imgRef.current;
    if (!img) {
      onUploadOriginal(imageSrc);
      return;
    }

    const targetCrop = completedCrop || {
      x: img.width * 0.05,
      y: img.height * 0.05,
      width: img.width * 0.9,
      height: img.height * 0.9
    };

    if (!targetCrop.width || !targetCrop.height) {
      onUploadOriginal(imageSrc);
      return;
    }

    // Calculate actual pixels based on the natural image size vs displayed size
    const scaleX = img.naturalWidth / img.width;
    const scaleY = img.naturalHeight / img.height;

    const actualPixelCrop = {
      x: (targetCrop.x || 0) * scaleX,
      y: (targetCrop.y || 0) * scaleY,
      width: targetCrop.width * scaleX,
      height: targetCrop.height * scaleY
    };

    try {
      const croppedImage = await getCroppedImg(
        imageSrc,
        actualPixelCrop
      );
      onSave(croppedImage || imageSrc);
    } catch (e) {
      console.error('Cropping error:', e);
      // Fallback to uploading original image smoothly
      onUploadOriginal(imageSrc);
    }
  };

  return (
    <div className="custom-modal-overlay">
      <div className="crop-modal-container" style={{ maxWidth: '850px', width: '90%' }}>
        <div className="crop-modal-header">
          <h2>Crop Image (Free Form)</h2>
          <button className="crop-close-btn" onClick={onCancel}>✕</button>
        </div>
        
        <div className="crop-workspace" style={{ padding: '20px', maxHeight: '65vh', overflow: 'auto', display: 'flex', justifyContent: 'center' }}>
          <ReactCrop 
            crop={crop} 
            onChange={(c) => setCrop(c)} 
            onComplete={(pixelCrop) => setCompletedCrop(pixelCrop)}
          >
            <img 
              ref={imgRef} 
              src={imageSrc} 
              alt="Crop Workspace" 
              onLoad={onImageLoad}
              style={{ maxWidth: '100%', maxHeight: '55vh', objectFit: 'contain' }} 
            />
          </ReactCrop>
        </div>
        
        <div className="crop-modal-footer" style={{ marginTop: '20px' }}>
          <button className="modal-btn-cancel" onClick={onCancel}>Cancel</button>
          <button className="modal-btn-outline" onClick={() => onUploadOriginal(imageSrc)}>Upload Original</button>
          <button className="modal-btn-confirm" onClick={handleCropAndSave}>✓ Crop & Save</button>
        </div>
      </div>
    </div>
  );
};

export default ImageCropperModal;
