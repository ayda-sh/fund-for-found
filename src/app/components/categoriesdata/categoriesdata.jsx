import { useEffect, useState } from "react";
import categoriesData from "@/data/categoriesData.json";

function Categoriesdata({ onCategoryChange, onSubcategoryChange }) {
  const allCategoriesData = categoriesData.catandsubcat;

  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [selectedCategoryName, setSelectedCategoryName] = useState("");
  const [selectedSubcategoryName, setSelectedSubcategoryName] = useState("");

  useEffect(() => {
    const uniqueCategories = [
      ...new Set(allCategoriesData.map((item) => item.category)),
    ];
    setCategories(uniqueCategories);
  }, []);

  useEffect(() => {
    if (selectedCategoryName) {
      const filteredSubcategories = allCategoriesData
        .filter((item) => item.category === selectedCategoryName)
        .map((item) => item.subcategory);
      setSubcategories(filteredSubcategories);

      if (!filteredSubcategories.includes(selectedSubcategoryName)) {
        setSelectedSubcategoryName("");
        onSubcategoryChange("");
      }
    } else {
      setSubcategories([]);
      setSelectedSubcategoryName("");
      onSubcategoryChange("");
    }
  }, [selectedCategoryName, allCategoriesData, onSubcategoryChange]);

  const handleCategoryChange = (e) => {
    const categoryName = e.target.value;
    setSelectedCategoryName(categoryName);
    onCategoryChange(categoryName);
  };

  const handleSubcategoryChange = (e) => {
    const subcategoryName = e.target.value;
    setSelectedSubcategoryName(subcategoryName);
    onSubcategoryChange(subcategoryName);
  };

  return (
    <div className="flex gap-5">
      <div className="mb-4 w-1/2">
        <label
          htmlFor="category"
          className="block md:text-sm text-[12px] font-semibold text-[var(--gray-2)]"
        >
          Category <span className="text-[#C91433]">*</span>
        </label>
        <select
          id="category"
          name="category"
          onChange={handleCategoryChange}
          value={selectedCategoryName}
          required
          className="mt-1 block w-full border border-[var(--primary-300)] rounded-md p-2"
        >
          <option className="text-sm" value="" disabled>
            Select category
          </option>
          {categories.map((category, index) => (
            <option className="text-sm" key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4 w-1/2">
        <label
          htmlFor="subcategory"
          className="block md:text-sm text-[12px] font-semibold text-[var(--gray-2)]"
        >
          Subcategory <span className="text-[#C91433]">*</span>
        </label>
        <select
          id="subcategory"
          onChange={handleSubcategoryChange}
          value={selectedSubcategoryName || ""}
          className="mt-1 block w-full border border-[var(--primary-300)] rounded-md p-2"
        >
          <option className="text-sm" value="" disabled>
            Select a subcategory
          </option>
          {subcategories.map((subcategory, index) => (
            <option className="text-sm" key={index} value={subcategory}>
              {subcategory}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Categoriesdata;
