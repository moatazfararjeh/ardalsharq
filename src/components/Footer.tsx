import { Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-hero text-primary-foreground py-10">
      <div className="container mx-auto px-4 text-center space-y-4">
        <h3 className="text-xl font-bold">شركة أرض الشرق لتجارة المواد الغذائية</h3>
        <p className="text-primary-foreground/80 text-sm">
          للتجار والموزعين وأصحاب السوبر ماركت والمطاعم
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/90">
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
           الأردن - عمان - ماركا - مجمع فينوس - خلف الترخيص
          </span>
          <span className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            للتواصل والطلب
            
            <a href="tel:+962795277537" className="font-bold text-primary-foreground">00962795277537</a>
            <br/>
            <a href="tel:+962792881832" className="font-bold text-primary-foreground">00962792881832</a>

          </span>
        </div>
        <p className="text-xs text-primary-foreground/60 pt-4">
          © {new Date().getFullYear()} شركة أرض الشرق — جميع الحقوق محفوظة
        </p>
      </div>
    </footer>
  );
};

export default Footer;
