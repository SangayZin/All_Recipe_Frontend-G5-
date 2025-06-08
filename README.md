# ALL_RECIPE_FRONTEND-G5-

## Project Proposal

### Aim and Objective 
The aim of this project is to develop **ALL_RECIPE**, a modern, user-friendly web application for discovering, searching, and managing recipes. The objective is to provide users with an intuitive platform to explore a wide variety of recipes, search by ingredients or names, and view detailed instructions and images.

### Feasibility 
The project is feasible within the given timeframe and resources. We used React (or Next.js) for the frontend, leveraging open-source libraries such as Tailwind CSS and lucide-react for UI and icons. The modular component-based architecture ensures scalability and maintainability. Collaboration will be facilitated via GitHub.

### Expected Outcome 
- A fully functional, responsive recipe web application with:
- A searchable recipe database
- Detailed recipe pages with images and instructions
- A clean, modern UI that works on both desktop and mobile devices
- Well-documented codebase and components, enabling easy maintenance and future enhancements

---

## Project Planning

### Application Selection
We have chosen to develop a **recipe discovery and management application**. This is based on the popular concept of recipe apps but will be enhanced with a modern UI and improved search functionality.

### Core Functionalities
- **Recipe Search:** Users can search for recipes by name or ingredient.
- **Recipe Listing:** Browse a list of available recipes with images.
- **Recipe Details:** View detailed instructions, ingredients, and images for each recipe.
- **Responsive Design:** Accessible on both desktop and mobile devices.

### Project Plan Across Assignments
- **Assignment 1:** Setup, basic layout, and navigation
- **Assignment 2:** Implement search and listing features
- **Assignment 3:** Add recipe detail pages and advanced UI
- **Assignment 4:** Testing, optimization, and documentation

---

## Development Environment Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/ALL_RECIPE_FRONTEND-G5-.git
   cd ALL_RECIPE_FRONTEND-G5-
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser:**
   - Visit [http://localhost:3000](http://localhost:3000)

### Remote Repository
- The project is hosted on GitHub for code collaboration:  
  [https://github.com/your-username/ALL_RECIPE_FRONTEND-G5-](https://github.com/your-username/ALL_RECIPE_FRONTEND-G5-)

---

## Project Architecture

```
src/
  components/      # Reusable UI components (Sidebar, SearchBar, RecipeList, etc.)
  pages/           # Main pages (Home, RecipeDetails, etc.)
  assets/          # Images and static files
  App.jsx          # Main app component
  index.js         # Entry point
```

---

## Component Documentation

### Sidebar
- **Purpose:** Navigation and access to search bar
- **Props:** None
- **Usage:**
  ```jsx
  <Sidebar />
  ```

### SearchBar
- **Purpose:** Allows users to search for recipes or ingredients
- **Props:**
  - `onSearch` (function): Callback when a search is submitted
  - `placeholder` (string): Placeholder text for the input
- **Usage:**
  ```jsx
  <SearchBar onSearch={handleSearch} placeholder="Search recipes..." />
  ```

### RecipeList
- **Purpose:** Displays a list of recipes
- **Props:**
  - `recipes` (array): Array of recipe objects
- **Usage:**
  ```jsx
  <RecipeList recipes={recipes} />
  ```

### RecipeDetails
- **Purpose:** Shows detailed information about a selected recipe
- **Props:**
  - `recipe` (object): The selected recipe object
- **Usage:**
  ```jsx
  <RecipeDetails recipe={selectedRecipe} />
  ```

---

## Contribution Guidelines

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License.

---

## Acknowledgements

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/)