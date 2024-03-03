import "./searchBar.css";
const SearchBar = () => {
  return (
    <div className="searchbar-container">
      <div className="searchBar">
        <input type="text" />
        <button>x</button>
      </div>
      <div className="select">
        <select>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
