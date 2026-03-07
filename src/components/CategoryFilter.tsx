type Category = {
  id: number;
  name: string;
};

interface CategoryFilterProps {
  categories: Category[];
  activeCategory: number | null;
  onCategoryChange: (categoryId: number | null) => void;
}

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <button
        onClick={() => onCategoryChange(null)}
        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
          activeCategory === null
            ? "gradient-hero text-primary-foreground shadow-card"
            : "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground"
        }`}
      >
        جميع الأصناف
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onCategoryChange(cat.id)}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
            activeCategory === cat.id
              ? "gradient-hero text-primary-foreground shadow-card"
              : "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground"
          }`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
