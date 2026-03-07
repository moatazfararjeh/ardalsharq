import HeroSection from "@/components/HeroSection";
import ProductCatalog from "@/components/ProductCatalog";
import Footer from "@/components/Footer";
import { MapPin, Phone, Facebook, Package } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      {/* Navigation Cards */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Products Card */}
            <a href="#products" className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-primary">
                <CardContent className="pt-6 pb-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Package className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    منتجاتنا
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">اكتشف جميع المنتجات</p>
                </CardContent>
              </Card>
            </a>

            {/* Location Card */}
            <a href="#location" className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-primary">
                <CardContent className="pt-6 pb-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    موقعنا
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">تعرف على موقعنا</p>
                </CardContent>
              </Card>
            </a>

            {/* Facebook Card */}
            <a href="#facebook" className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-primary">
                <CardContent className="pt-6 pb-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Facebook className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    صفحة الفيسبوك
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">تابعنا على فيسبوك</p>
                </CardContent>
              </Card>
            </a>

            {/* Contact Card */}
            <a href="#contact" className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-primary">
                <CardContent className="pt-6 pb-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    تواصل معنا
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">اتصل بنا الآن</p>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="scroll-mt-20">
        <ProductCatalog />
      </section>

      {/* Location Section */}
      <section id="location" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-3xl">
                <MapPin className="w-8 h-8" />
                موقعنا
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-lg text-right">
                  <strong>العنوان:</strong> عمان، الأردن
                </p>
                <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435519.227307058!2d35.48976179999999!3d31.963158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca2b6898e2e69%3A0x2c84e1e7f5e90b0!2sAmman%2C%20Jordan!5e0!3m2!1sen!2s!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Facebook Section */}
      <section id="facebook" className="py-16 scroll-mt-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-3xl">
                <Facebook className="w-8 h-8" />
                صفحة الفيسبوك
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-4">
                <p className="text-lg">تابعونا على فيسبوك لمعرفة آخر العروض والمنتجات الجديدة</p>
                <a
                  href="https://www.facebook.com/profile.php?id=61587917750474"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
                >
                  <Facebook className="w-6 h-6" />
                  زيارة صفحتنا على فيسبوك
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-3xl">
                <Phone className="w-8 h-8" />
                تواصل معنا
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6 text-right">
                <div>
                  <h3 className="text-xl font-semibold mb-3">أرقام الهواتف:</h3>
                  <div className="space-y-2">
                    <a href="tel:+962791234567" className="block text-lg hover:text-primary transition-colors">
                      📱 0791234567
                    </a>
                    <a href="tel:+962791234568" className="block text-lg hover:text-primary transition-colors">
                      📱 0791234568
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">ساعات العمل:</h3>
                  <p className="text-lg">السبت - الخميس: 8:00 صباحاً - 8:00 مساءً</p>
                  <p className="text-lg">الجمعة: مغلق</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
