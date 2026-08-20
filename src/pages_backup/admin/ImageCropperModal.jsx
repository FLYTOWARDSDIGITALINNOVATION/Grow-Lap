import React, { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import { getCroppedImg } from '../../utils/cropImage';

const ImageCropperModal = ({ imageSrc, onCancel, onSave, onUploadOriginal }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleCropAndSave = async () => {
    try {
      const croppedImage = await getCroppedImg(
        imageSrc,
        croppedAreaPixels
      );
      onSave(croppedImage);
    } catch (e) {
      console.error(e);
      alert('Failed to crop image');
    }
  };

  return (
    <div className="custom-modal-overlay">
      <div className="crop-modal-container">
        <div className="crop-modal-header">
          <h2>Crop Image</h2>
          <button className="crop-close-btn" onClick={onCancel}>✕</button>
        </div>
        
        <div className="crop-workspace">
          <Cropper
            image={imageSrc}
            crop={crop}
            zoom={zoom}
            aspect={16 / 9} // 16:9 for blog cover
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
          />
        </div>

        <div className="crop-modal-footer">
          <button className="modal-btn-cancel" onClick={onCancel}>Cancel</button>
          <button className="modal-btn-outline" onClick={() => onUploadOriginal(imageSrc)}>Upload Original</button>
          <button className="modal-btn-confirm" onClick={handleCropAndSave}>✓ Crop & Save</button>
        </div>
      </div>
    </div>
  );
};

export default ImageCropperModal;
