import { useState, useMemo, useEffect } from "react";
import { Search } from "lucide-react";
import { categories } from "@/data/products";
import CategoryFilter from "./CategoryFilter";
import ProductCard from "./ProductCard";
import GalleryModal from "./GalleryModal";

type Product = {
  id: number;
  name: string;
  description?: string;
  price?: number;
  image_url?: string;
  category?: string;
  categoryId?: string;
};

const ProductCatalog = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [galleryImages, setGalleryImages] = useState<string[] | null>(null);

  useEffect(() => {
    // Fetch products and their images
    fetch("http://localhost:9090/api/products")
      .then((res) => res.json())
      .then(async (data) => {
        // For each product, fetch its images
        const withImages = await Promise.all(
          data.map(async (p: any) => {
            const imgRes = await fetch(`http://localhost:9090/api/products/${p.id}/images`);
            const imgs = await imgRes.json();
            return { ...p, images: imgs.map((img: any) => img.image_url) };
          })
        );
        console.log('Products with images:', withImages);
        setProducts(withImages);
      })
      .catch(() => setProducts([]));
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // دعم category_id من الـ backend وcategoryId من الداتا القديمة
      const catId = p.categoryId || p.category_id || p.category;
      const matchesCategory = !activeCategory || catId === activeCategory;
      const matchesSearch = !searchQuery || p.name.includes(searchQuery);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery, products]);

  const groupedProducts = useMemo(() => {
    if (activeCategory) {
      return [{ category: categories.find((c) => c.id === activeCategory)!, products: filteredProducts }];
    }
    return categories
      .map((cat) => ({
        category: cat,
        products: filteredProducts.filter((p) => {
          const catId = p.categoryId || p.category_id || p.category;
          return catId === cat.id;
        }),
      }))
      .filter((g) => g.products.length > 0);
  }, [filteredProducts, activeCategory]);

  return (
    <section className="container mx-auto px-4 py-12">
      {/* Search */}
      <div className="max-w-md mx-auto mb-8">
        <div className="relative">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="ابحث عن منتج..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pr-10 pl-4 py-3 rounded-xl bg-card border border-border text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow font-cairo"
          />
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-10">
        <CategoryFilter activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      </div>

      {/* Count */}
      <p className="text-center text-muted-foreground mb-8 text-sm">
        عدد المنتجات: <span className="font-bold text-foreground">{filteredProducts.length}</span> منتج
      </p>

      {/* Products by Category */}
      <div className="space-y-10">
        {groupedProducts.map(({ category, products: catProducts }) => (
          <div key={category.id}>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl">{category.icon}</span>
              <h2 className="text-xl font-bold text-foreground">{category.name}</h2>
              <span className="text-sm text-muted-foreground">({catProducts.length})</span>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {catProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                  onClick={() => product.images && product.images.length > 0 && setGalleryImages(product.images)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted-foreground text-lg">لا توجد منتجات مطابقة للبحث</p>
        </div>
      )}
    {galleryImages && (
      <GalleryModal images={galleryImages} onClose={() => setGalleryImages(null)} />
    )}
    </section>
  );
};

export default ProductCatalog;
