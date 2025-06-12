import React, { useState } from 'react';
import Modal from 'react-modal';
import { Heart } from 'lucide-react'; // For the favorite icon
import { uploadImage } from '../lib/utils'; // Import upload function

// Recommended: Set this in your root index.js instead
Modal.setAppElement('#root');

const RecipeModal = ({ recipe, onClose, onLike, isFavorite }) => {
  if (!recipe) return null;

  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState(recipe.imageUrl || '');

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setUploading(true);
    try {
      const url = await uploadImage(file);
      setImageUrl(url);
      console.log('Image uploaded:', url);
    } catch (err) {
      console.error('Upload failed:', err.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <Modal
      isOpen={!!recipe}
      onRequestClose={onClose}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        },
        content: {
          position: 'relative',
          inset: 'auto',
          maxWidth: '800px',
          width: '90%',
          padding: '0',
          borderRadius: '12px',
          border: 'none',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
        }
      }}
    >
      <div className="flex flex-col md:flex-row bg-white">
        {/* Image Section */}
        <div className="md:w-1/2 h-64 md:h-96 bg-gray-100 relative">
          <img
            src={imageUrl || '/placeholder-food.jpg'}
            alt={recipe.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = '/placeholder-food.jpg';
            }}
          />
          {/* Upload Button */}
          <div className="absolute bottom-2 left-2">
            <label className="text-sm bg-white px-2 py-1 rounded shadow cursor-pointer">
              {uploading ? 'Uploading...' : 'Change Image'}
              <input
                type="file"
                accept="image/*"
                onChange={handleUpload}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl bg-white rounded-full w-8 h-8 flex items-center justify-center"
          >
            &times;
          </button>

          <h2 className="text-2xl font-bold mb-3 text-gray-800">{recipe.title}</h2>
          <p className="text-gray-600 mb-6">{recipe.description}</p>

          <button
            onClick={() => onLike(recipe.title)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full ${
              isFavorite 
                ? 'bg-red-100 text-red-600' 
                : 'bg-gray-100 text-gray-800'
            }`}
          >
            <Heart fill={isFavorite ? 'currentColor' : 'none'} size={18} />
            {isFavorite ? 'Saved' : 'Save Recipe'}
          </button>

          <div className="mt-8 pt-5 border-t border-gray-200">
            <h3 className="font-medium mb-3">Recipe Details</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-gray-500">Category</p>
                <p>Main Dish</p>
              </div>
              <div>
                <p className="text-gray-500">Prep Time</p>
                <p>15 mins</p>
              </div>
              <div>
                <p className="text-gray-500">Cook Time</p>
                <p>30 mins</p>
              </div>
              <div>
                <p className="text-gray-500">Servings</p>
                <p>4 people</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default RecipeModal;
