import React, { useState, useRef } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { getCroppedImg } from '../../utils/cropImage';

const ImageCropperModal = ({ imageSrc, onCancel, onSave, onUploadOriginal }) => {
  const [crop, setCrop] = useState();
  const [completedCrop, setCompletedCrop] = useState(null);
  const imgRef = useRef(null);

  const handleCropAndSave = async () => {
    if (!completedCrop || !completedCrop.width || !completedCrop.height) {
      // If no crop region was drawn, just upload the original
      onUploadOriginal(imageSrc);
      return;
    }
    
    const img = imgRef.current;
    if (!img) return;

    // Calculate actual pixels based on the natural image size vs displayed size
    const scaleX = img.naturalWidth / img.width;
    const scaleY = img.naturalHeight / img.height;

    const actualPixelCrop = {
      x: completedCrop.x * scaleX,
      y: completedCrop.y * scaleY,
      width: completedCrop.width * scaleX,
      height: completedCrop.height * scaleY,
    };

    try {
      const croppedImage = await getCroppedImg(
        imageSrc,
        actualPixelCrop
      );
      onSave(croppedImage);
    } catch (e) {
      console.error(e);
      alert('Failed to crop image');
    }
  };

  return (
    <div className="custom-modal-overlay">
      <div className="crop-modal-container" style={{ maxWidth: '800px' }}>
        <div className="crop-modal-header">
          <h2>Crop Image (Free Form)</h2>
          <button className="crop-close-btn" onClick={onCancel}>✕</button>
        </div>
        
        <div className="crop-workspace" style={{ padding: '20px', maxHeight: '60vh', overflow: 'auto', display: 'flex', justifyContent: 'center' }}>
          <ReactCrop 
            crop={crop} 
            onChange={c => setCrop(c)} 
            onComplete={c => setCompletedCrop(c)}
          >
            <img ref={imgRef} src={imageSrc} alt="Crop" style={{ maxWidth: '100%', maxHeight: '55vh', objectFit: 'contain' }} />
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
