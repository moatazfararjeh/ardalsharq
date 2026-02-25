import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden h-[450px]">
      <div className="absolute inset-0">
        
        <img
          src={heroBanner}
          alt="منتجات أرض الشرق المجمدة"
          className="w-full h-full object-cover object-center"
          style={{ background: '#f8fafc' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-black text-primary-foreground mb-4 leading-tight">
            شركة أرض الشرق
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-primary-foreground/90 mb-2">
            لتجارة المواد الغذائية
          </p>
          <div className="w-24 h-1 gradient-hero mx-auto rounded-full my-6" />
          <p className="text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
         متخصصون في توزيع الأغذية المجمدة والمبرّدة لتجّار الجملة، الموزّعين، السوبرماركت والمطاعم في الأردن.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {["نبيل", "الوادي", "أمريكانا", "لورباك", "بوك", "الإكرام", "تب توب"].map((brand) => (
              <span
                key={brand}
                className="bg-primary-foreground/15 backdrop-blur-sm text-primary-foreground text-sm font-medium px-4 py-1.5 rounded-full border border-primary-foreground/20"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

