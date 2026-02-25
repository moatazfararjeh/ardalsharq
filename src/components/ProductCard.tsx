import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index: number;
}


const ProductCard = ({ product, index, onClick }: ProductCardProps & { onClick?: () => void }) => {
  return (
    <div
      className="group bg-card rounded-lg border border-border p-4 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5 animate-scale-in cursor-pointer"
      style={{ animationDelay: `${Math.min(index * 30, 300)}ms` }}
      onClick={onClick}
    >
      {/* لا تعرض صورة المنتج هنا، الصور تظهر فقط عند الضغط على اسم المنتج */}
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-sm font-semibold text-card-foreground leading-relaxed flex items-center gap-2">
          {product.name}
          {(!product.images || product.images.length === 0) ? (
            <span title="لا يوجد صور" className="text-gray-400 text-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line></svg>
            </span>
          ) : (
            <span title="يوجد صور" className="text-green-500 text-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
            </span>
          )}
        </h3>
        {product.brand && (
          <span className="shrink-0 text-xs font-medium bg-frost text-frost-foreground px-2.5 py-1 rounded-full">
            {product.brand}
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
