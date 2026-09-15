import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt, FaNewspaper, FaPencilAlt, FaList, FaBold, FaItalic, FaListUl, FaListOl, FaQuoteRight, FaCode, FaLink, FaImage, FaUpload, FaTrash, FaEdit } from 'react-icons/fa';
import './AdminDashboard.css';
import { addBlog, getBlogs, getBlogsAsync, deleteBlog, updateBlog } from '../../utils/blogStorage';
import ImageCropperModal from './ImageCropperModal';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('create');
  
  // Blog Form State
  const [editId, setEditId] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState('');
  
  // Crop State
  const [cropImageSrc, setCropImageSrc] = useState(null);
  
  const editorRef = useRef(null);
  const fileInputRef = useRef(null);
  const inlineImageInputRef = useRef(null);
  
  // Manage Posts State
  const [blogsList, setBlogsList] = useState([]);

  // Custom Modal State
  const [modal, setModal] = useState({
    isOpen: false,
    type: 'alert', // 'alert', 'confirm', 'prompt'
    message: '',
    onConfirm: null
  });
  const [modalInput, setModalInput] = useState('');

  const closeCustomModal = () => {
    setModal({ ...modal, isOpen: false });
  };

  useEffect(() => {
    // Check Authentication
    const token = localStorage.getItem('fly_admin_token');
    if (!token) {
      navigate('/admin');
    }
    
    // Load blogs for manage view from MongoDB / Storage
    const fetchBlogs = async () => {
      const data = await getBlogsAsync();
      setBlogsList(data);
    };
    fetchBlogs();
  }, [navigate]);

  // Sync editor content safely to prevent cursor jumping
  useEffect(() => {
    if (editorRef.current && content !== editorRef.current.innerHTML) {
      editorRef.current.innerHTML = content;
    }
  }, [content]);

  const handleLogout = () => {
    setModal({
      isOpen: true,
      type: 'confirm',
      message: 'Are you sure you want to logout?',
      onConfirm: () => {
        localStorage.removeItem('fly_admin_token');
        navigate('/admin');
        closeCustomModal();
      }
    });
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleInlineImageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      Array.from(e.target.files).forEach(file => {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
          document.execCommand('insertImage', false, reader.result);
        });
        reader.readAsDataURL(file);
      });
      // reset the input
      if (inlineImageInputRef.current) inlineImageInputRef.current.value = '';
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setCropImageSrc(reader.result?.toString() || '');
      });
      reader.readAsDataURL(file);
    }
  };

  const handleCropSave = (croppedData) => {
    setCoverImage(croppedData);
    setCropImageSrc(null);
    if(fileInputRef.current) fileInputRef.current.value = '';
  };

  const [isPublishing, setIsPublishing] = useState(false);

  const handlePublish = async () => {
    if (!title.trim() || !content.trim()) {
      setModal({
        isOpen: true,
        type: 'alert',
        message: 'Please enter a title and content.',
        onConfirm: closeCustomModal
      });
      return;
    }
    
    setIsPublishing(true);
    let updatedBlogs = [];
    try {
      if (editId) {
        // Update existing in MongoDB
        updatedBlogs = await updateBlog(editId, {
          title: title,
          content: content,
          excerpt: content.substring(0, 150).replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').trim() + '...', // Strip HTML tags & entities for excerpt
          image: coverImage || 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&q=80&w=800'
        });
        
        setModal({
          isOpen: true,
          type: 'alert',
          message: 'Blog updated successfully in MongoDB database!',
          onConfirm: closeCustomModal
        });
      } else {
        // Create new blog object in MongoDB
        const currentDate = new Date();
        const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        
        const newBlog = {
          image: coverImage || 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&q=80&w=800',
          date: currentDate.getDate().toString(),
          month: months[currentDate.getMonth()],
          title: title,
          category: 'Digital Marketing',
          author: 'Admin',
          comments: '0',
          excerpt: content.substring(0, 150).replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').trim() + '...',
          content: content
        };

        updatedBlogs = await addBlog(newBlog);
        
        setModal({
          isOpen: true,
          type: 'alert',
          message: 'Blog published successfully to MongoDB database!',
          onConfirm: closeCustomModal
        });
      }
      
      // Reset form
      handleCancelEdit();
      
      // Update list
      setBlogsList(updatedBlogs || getBlogs());
      setActiveTab('manage');
    } catch (err) {
      setModal({
        isOpen: true,
        type: 'alert',
        message: 'Database error: ' + (err.message || 'Could not save to MongoDB'),
        onConfirm: closeCustomModal
      });
    } finally {
      setIsPublishing(false);
    }
  };

  const handleCancelEdit = () => {
    setTitle('');
    setContent('');
    setCoverImage('');
    setEditId(null);
  };

  const handleEdit = (blog) => {
    setEditId(blog.id);
    setTitle(blog.title);
    setContent(blog.content || blog.excerpt);
    setCoverImage(blog.image);
    setActiveTab('create');
  };

  const handleDelete = (id) => {
    setModal({
      isOpen: true,
      type: 'confirm',
      message: 'Are you sure you want to delete this blog?',
      onConfirm: async () => {
        const updated = await deleteBlog(id);
        setBlogsList(updated || getBlogs());
        closeCustomModal();
      }
    });
  };

  return (
    <div className="admin-dashboard-wrapper">
      <div className="admin-main-content">
        {/* Topbar / Header */}
        <div className="admin-topbar">
          <div className="admin-greeting">
            <h1>Welcome back, <span className="text-accent">Admin!</span></h1>
          </div>
          <button onClick={handleLogout} className="admin-logout-btn">
            <FaSignOutAlt /> Logout
          </button>
        </div>

        {/* Studio Header */}
        <div className="studio-header">
          <span className="studio-badge">ADMIN PANEL</span>
          <h1 className="studio-title">
            Grow Lap <span className="text-accent">Blog Studio</span>
          </h1>
          <p className="studio-subtitle">Design, publish, and manage your strategic articles in real-time.</p>
        </div>

        {/* Tabs */}
        <div className="studio-tabs">
          <button 
            className={`studio-tab-btn ${activeTab === 'create' ? 'active' : ''}`}
            onClick={() => setActiveTab('create')}
          >
            <FaPencilAlt /> Create Post
          </button>
          <button 
            className={`studio-tab-btn ${activeTab === 'manage' ? 'active' : ''}`}
            onClick={() => setActiveTab('manage')}
          >
            <FaList /> Manage Posts
          </button>
        </div>

        {/* Editor Area */}
        {activeTab === 'create' ? (
          <div className="studio-editor-container">
            {/* Toolbar */}
            <div className="studio-toolbar">
              <div className="toolbar-left">
                <span className="toolbar-dropdown">Style <i>▼</i></span>
                <div className="toolbar-divider"></div>
                <button className="toolbar-icon" onClick={() => document.execCommand('bold', false, null)} title="Bold"><FaBold /></button>
                <button className="toolbar-icon" onClick={() => document.execCommand('italic', false, null)} title="Italic"><FaItalic /></button>
                
                <div className="toolbar-divider"></div>
                <button className="toolbar-icon" onClick={() => document.execCommand('insertUnorderedList', false, null)} title="Bullet List"><FaListUl /></button>
                <button className="toolbar-icon" onClick={() => document.execCommand('insertOrderedList', false, null)} title="Numbered List"><FaListOl /></button>
                
                <div className="toolbar-divider"></div>
                <button className="toolbar-icon" onClick={() => document.execCommand('formatBlock', false, 'BLOCKQUOTE')} title="Quote"><FaQuoteRight /></button>
                <button className="toolbar-icon" onClick={() => {
                  const sel = document.getSelection().toString();
                  if (sel) document.execCommand('insertHTML', false, `<code>${sel}</code>`);
                }} title="Inline Code"><FaCode /></button>
                
                <button className="toolbar-icon" onClick={() => document.execCommand('insertHorizontalRule', false, null)} title="Divider Line">—</button>
                
                <button className="toolbar-icon" onClick={() => {
                  const url = prompt('Enter the URL to link to:');
                  if(url) document.execCommand('createLink', false, url);
                }} title="Link"><FaLink /></button>
                <button className="toolbar-icon" onClick={() => document.execCommand('formatBlock', false, 'PRE')} title="Code Block">{"</>"}</button>
                <button className="toolbar-icon" onClick={() => {
                  inlineImageInputRef.current?.click();
                }} title="Insert Image"><FaImage /></button>
              </div>
              <div className="toolbar-right">
                {editId ? (
                  <button className="toolbar-btn-draft" onClick={handleCancelEdit}>Cancel</button>
                ) : (
                  <button className="toolbar-btn-draft">Save draft</button>
                )}
                <button className="toolbar-btn-publish" onClick={handlePublish} disabled={isPublishing}>
                  {isPublishing ? (editId ? 'Updating...' : 'Publishing...') : (editId ? 'Update' : 'Publish')}
                </button>
              </div>
            </div>

            {/* Editor Workspace */}
            <div className="studio-workspace">
              {/* Hidden File Input for Cover */}
              <input 
                type="file" 
                accept="image/*" 
                ref={fileInputRef} 
                style={{ display: 'none' }} 
                onChange={handleFileChange} 
              />
              
              {/* Hidden File Input for Inline Editor Images (Multiple) */}
              <input 
                type="file" 
                multiple
                accept="image/*" 
                ref={inlineImageInputRef} 
                style={{ display: 'none' }} 
                onChange={handleInlineImageChange} 
              />
              
              {/* Cover Image Upload Area */}
              <div className="studio-cover-upload" style={coverImage ? { backgroundImage: `url(${coverImage})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' } : {}}>
                {!coverImage && (
                  <div className="upload-placeholder">
                    <div className="upload-icon-large"><FaImage /></div>
                    <p>Add a cover image or video to your article.</p>
                    <button className="upload-btn" onClick={handleUploadClick}>
                      <FaUpload /> Upload from computer
                    </button>
                  </div>
                )}
                {coverImage && (
                  <button className="change-cover-btn" onClick={handleUploadClick}>Change Cover</button>
                )}
              </div>

              {/* Title Input */}
              <input 
                type="text" 
                className="studio-title-input" 
                placeholder="Title" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              {/* Rich Text Content Area */}
              <div 
                className="studio-content-textarea" 
                contentEditable="true"
                data-placeholder="Write here. You can also include @mentions."
                onInput={(e) => setContent(e.currentTarget.innerHTML)}
                onBlur={(e) => setContent(e.currentTarget.innerHTML)}
                suppressContentEditableWarning={true}
                ref={editorRef}
              ></div>
            </div>
          </div>
        ) : (
          <div className="studio-manage-container">
            <h2>Manage Published Posts</h2>
            <div className="manage-list">
              {blogsList.length === 0 ? (
                <p className="no-blogs-msg">No blogs published yet.</p>
              ) : (
                blogsList.map(blog => (
                  <div key={blog.id} className="manage-item">
                    <img src={blog.image} alt={blog.title} className="manage-item-img" />
                    <div className="manage-item-info">
                      <h3>{blog.title}</h3>
                      <p>Published: {blog.month} {blog.date}</p>
                    </div>
                    <div className="manage-item-actions">
                      <button className="action-btn edit" onClick={() => handleEdit(blog)} title="Edit"><FaEdit /></button>
                      <button className="action-btn delete" onClick={() => handleDelete(blog.id)} title="Delete"><FaTrash /></button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>

      {/* Custom Modal */}
      {modal.isOpen && (
        <div className="custom-modal-overlay">
          <div className="custom-modal">
            <p className="custom-modal-message">{modal.message}</p>
            
            {modal.type === 'prompt' && (
              <input 
                type="text" 
                className="custom-modal-input" 
                placeholder="https://..."
                value={modalInput}
                onChange={(e) => setModalInput(e.target.value)}
                autoFocus
              />
            )}
            
            <div className="custom-modal-actions">
              {modal.type !== 'alert' && (
                <button className="modal-btn-cancel" onClick={closeCustomModal}>Cancel</button>
              )}
              <button 
                className="modal-btn-confirm" 
                onClick={() => modal.onConfirm(modal.type === 'prompt' ? modalInput : null)}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cropper Modal */}
      {cropImageSrc && (
        <ImageCropperModal
          imageSrc={cropImageSrc}
          onCancel={() => {
            setCropImageSrc(null);
            if(fileInputRef.current) fileInputRef.current.value = '';
          }}
          onSave={handleCropSave}
          onUploadOriginal={handleCropSave}
        />
      )}
    </div>
  );
};

export default AdminDashboard;
