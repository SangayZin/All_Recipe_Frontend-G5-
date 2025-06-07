import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { LogIn, Home } from "lucide-react";
import { useInfiniteQuery } from '@tanstack/react-query';
import RecipeList from "../components/RecipeList";
import SearchBar from "../components/SearchBar";
import RecipeModal from '../components/Modal';
import FavoritesToggle from "../components/FavoritesToggle";

// Mock API function - replace with your actual API call
const fetchRecipes = async ({ pageParam = 0 }) => {
  const allRecipes = [
    { title: "Ema Datsi", description: "A national Bhutanese dish...", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0HhKhZMi3rZLUGVIvKMgi-iYwLwGebrwkZQ&s" },
    { title: "Kewa Datshi", description: "Potatoes and cheese with chiles.", imageUrl: "../kewadatsi.png" },
    { title: "Shakam Datshi", description: "Shakam in Bhutanese dried beef, made with red chilli, onions, feta cheese.", imageUrl: "../shakam.png" },
    { title: "Sikam Phaksha Paa", description: "Traditional Bhutanese dish made with pork and a variety of spices.", imageUrl: "../sikam.png" },
    { title: "Colcannon Potatoes", description: "Irish mashed potatoes with cabbage or kale and scallions.", imageUrl: "../colcanon.png" },
    { title: "Jollof Rice", description: "West African rice dish cooked in tomato sauce and spices.", imageUrl: "../jollof.png" },
    { title: "Samosa Chaat", description: "Indian street food with samosas, yogurt, tamarind chutney, and spices.", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROCfaJvRHIJImIgLom9R_oOi3834kjz0m5IA&s" },
    { title: "Lahmacun", description: "Turkish flatbread topped with minced meat and spices.", imageUrl: "../lhachmo.png" },
    { title: "Poutine", description: "Canadian fries topped with cheese curds and gravy.", imageUrl: "../poutine.png" },
    { title: "Peanut Butter Soup", description: "West African creamy soup with peanut butter and vegetables.", imageUrl: "../peanut.png" },
    { title: "Orecchiette with Broccoli Rabe", description: "Italian pasta with sautéed broccoli rabe and garlic.", imageUrl: "../brocoli.png" },
    { title: "Sushi Rolls", description: "Japanese rice rolls with fish and vegetables.", imageUrl: "../sushi.png" },
    { title: "Biryani", description: "Fragrant rice with marinated meat and spices.", imageUrl: "../biryani.png" },
    { title: "Ceviche", description: "Marinated raw fish with lime, onions, and cilantro.", imageUrl: "../ceviche.png" },
    { title: "Kimchi Fried Rice", description: "Korean fried rice with kimchi and vegetables.", imageUrl: "../kimchi.png" },
    { title: "Ratatouille", description: "French stew with eggplant, zucchini, peppers, and tomatoes.", imageUrl: "../rata.png" },
    { title: "Baklava", description: "Sweet pastry with nuts and honey syrup.", imageUrl: "../baklava.png" },
    { title: "Steak Frites", description: "French dish with steak and fries.", imageUrl: "../streak.png" },
  ];
  
  // Simulate pagination - 6 items per page
  const startIdx = pageParam * 6;
  const endIdx = startIdx + 6;
  const paginatedRecipes = allRecipes.slice(startIdx, endIdx);
  
  return {
    recipes: paginatedRecipes,
    nextCursor: endIdx < allRecipes.length ? pageParam + 1 : undefined
  };
};

const HomePage = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFavorites, setShowFavorites] = useState(false);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ['recipes', searchQuery, showFavorites],
    queryFn: fetchRecipes,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    initialPageParam: 0,
  });

  // Combine all pages of recipes
  const allRecipes = data?.pages.flatMap(page => page.recipes) || [];

  // Filter recipes based on search and favorites
  const filteredRecipes = allRecipes.filter(recipe => 
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const recipesToDisplay = showFavorites
    ? filteredRecipes.filter((r) => favorites.includes(r.title))
    : filteredRecipes;

  // Infinite scroll handler
  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop >= 
      document.documentElement.offsetHeight - 100 && // Load when 100px from bottom
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleSearchChange = (query) => setSearchQuery(query);
  const handleViewRecipe = (title) => setSelectedRecipe(allRecipes.find(r => r.title === title));
  const handleLike = (title) =>
    setFavorites(favorites.includes(title) ? favorites.filter(fav => fav !== title) : [...favorites, title]);
  const closeModal = () => setSelectedRecipe(null);

  if (isLoading && !data) {
    return <div className="p-6">Loading initial recipes...</div>;
  }

  return (
    <div className="p-6">
      {/* Header Section with Logo and Buttons */}
      <div className="flex justify-between items-center mb-6">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src="/image.png" alt="App Logo" className="h-20 w-35" />
        </div>

        {/* Navigation Buttons */}
        <div className="flex space-x-4">
          <Link to="/" className="flex items-center bg-white text-black px-3 py-2 rounded hover:bg-red-500 hover:text-white transition-all duration-300 text-sm">
            <Home className="mr-2 w-4 h-4" />
            Home
          </Link>
          <Link to="/login" className="flex items-center bg-white text-black px-3 py-2 rounded hover:bg-red-500 hover:text-white transition-all duration-300 text-sm">
            <LogIn className="mr-2 w-4 h-4" />
            Login
          </Link>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-white text-black p-3 rounded-md mb-6 shadow-lg">
        <div className="flex justify-start space-x-4">
          {/* Meals Dropdown */}
          <div className="relative group">
            <button className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200">Meals</button>
            <div className="absolute left-0 hidden group-hover:block bg-white text-black shadow-lg rounded mt-2 w-48">
              <ul className="p-2">
                <li><Link to="/breakfast" className="block px-4 py-2 text-sm hover:bg-gray-100">Breakfast & Brunch</Link></li>
                <li><Link to="/lunch" className="block px-4 py-2 text-sm hover:bg-gray-100">Lunch</Link></li>
                <li><Link to="/healthy" className="block px-4 py-2 text-sm hover:bg-gray-100">Healthy</Link></li>
                <li><Link to="/appetizers" className="block px-4 py-2 text-sm hover:bg-gray-100">Appetizers & Snacks</Link></li>
                <li><Link to="/salads" className="block px-4 py-2 text-sm hover:bg-gray-100">Salads</Link></li>
                <li><Link to="/salads" className="block px-4 py-2 text-sm hover:bg-gray-100">Side Dishes</Link></li>
                <li><Link to="/salads" className="block px-4 py-2 text-sm hover:bg-gray-100">Soups</Link></li>
                <li><Link to="/salads" className="block px-4 py-2 text-sm hover:bg-gray-100">Bread</Link></li>
              </ul>
            </div>
          </div>

          {/* Dinners Dropdown */}
          <div className="relative group">
            <button className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200">Dinners</button>
            <div className="absolute left-0 hidden group-hover:block bg-white text-black shadow-lg rounded mt-2 w-48">
              <ul className="p-2">
                <li><Link to="/breakfast" className="block px-4 py-2 text-sm hover:bg-gray-100">5-Ingredient Meals</Link></li>
                <li><Link to="/lunch" className="block px-4 py-2 text-sm hover:bg-gray-100">One-Pot Meals</Link></li>
                <li><Link to="/healthy" className="block px-4 py-2 text-sm hover:bg-gray-100">Quick & Easy</Link></li>
                <li><Link to="/appetizers" className="block px-4 py-2 text-sm hover:bg-gray-100">30-Minute Meals</Link></li>
                <li><Link to="/salads" className="block px-4 py-2 text-sm hover:bg-gray-100">Family Dinners</Link></li>
                <li><Link to="/salads" className="block px-4 py-2 text-sm hover:bg-gray-100">Soups</Link></li>
                <li><Link to="/salads" className="block px-4 py-2 text-sm hover:bg-gray-100">Comfort Food</Link></li>
                <li><Link to="/salads" className="block px-4 py-2 text-sm hover:bg-gray-100">Main Dishes</Link></li>
                <li><Link to="/salads" className="block px-4 py-2 text-sm hover:bg-gray-100">Sheet Pan Dinners</Link></li>
              </ul>
            </div>
          </div>

          {/* Ingredients Dropdown */}
          <div className="relative group">
            <button className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200">Ingredients</button>
            <div className="absolute left-0 hidden group-hover:block bg-white text-black shadow-lg rounded mt-2 w-48">
              <ul className="p-2">
                <li><Link to="/vegetables" className="block px-4 py-2 text-sm hover:bg-gray-100">Chicken</Link></li>
                <li><Link to="/meats" className="block px-4 py-2 text-sm hover:bg-gray-100">Beef</Link></li>
                <li><Link to="/spices" className="block px-4 py-2 text-sm hover:bg-gray-100">Pork</Link></li>
                <li><Link to="/spices" className="block px-4 py-2 text-sm hover:bg-gray-100">Seafood</Link></li>
                <li><Link to="/spices" className="block px-4 py-2 text-sm hover:bg-gray-100">Pasta</Link></li>
              </ul>
            </div>
          </div>

          {/* Cuisines Dropdown */}
          <div className="relative group">
            <button className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200">Cuisines</button>
            <div className="absolute left-0 hidden group-hover:block bg-white text-black shadow-lg rounded mt-2 w-48">
              <ul className="p-2">
                <li><Link to="/vegetables" className="block px-4 py-2 text-sm hover:bg-gray-100">Mexican</Link></li>
                <li><Link to="/meats" className="block px-4 py-2 text-sm hover:bg-gray-100">Italian</Link></li>
                <li><Link to="/spices" className="block px-4 py-2 text-sm hover:bg-gray-100">Chinese</Link></li>
                <li><Link to="/spices" className="block px-4 py-2 text-sm hover:bg-gray-100">Indian</Link></li>
                <li><Link to="/spices" className="block px-4 py-2 text-sm hover:bg-gray-100">German</Link></li>
                <li><Link to="/spices" className="block px-4 py-2 text-sm hover:bg-gray-100">Greek</Link></li>
              </ul>
            </div>
          </div>

          {/* About Us Dropdown */}
          <div className="relative group">
            <button className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200">About Us</button>
            <div className="absolute left-0 hidden group-hover:block bg-white text-black shadow-lg rounded mt-2 w-48">
              <ul className="p-2">
                <li><Link to="/vegetables" className="block px-4 py-2 text-sm hover:bg-gray-100">The All Recipe Team</Link></li>
                <li><Link to="/meats" className="block px-4 py-2 text-sm hover:bg-gray-100">How to add a recipe</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Search, Favorites, Recipes */}
      <SearchBar searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      <FavoritesToggle onToggle={() => setShowFavorites(!showFavorites)} showFavorites={showFavorites} />
      
      <RecipeList 
        recipes={recipesToDisplay} 
        onClick={handleViewRecipe}
        onLike={handleLike}
        favorites={favorites}
      />
      
      {isFetchingNextPage && (
        <div className="text-center py-4">Loading more recipes...</div>
      )}
      
      <RecipeModal
        recipe={selectedRecipe}
        onClose={closeModal}
        onLike={handleLike}
        isFavorite={selectedRecipe ? favorites.includes(selectedRecipe.title) : false}
      />
    </div>
  );
};

export default HomePage;
