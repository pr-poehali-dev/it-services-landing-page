import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-secondary">IT Автоматизация</div>
          <Button variant="default" size="lg">
            Связаться с нами
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-secondary leading-tight">
              Преобразуйте ваш бизнес<br />с помощью технологий
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
              Автоматизация бизнеса на платформе «1С»
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <Button size="lg" className="text-lg px-8 py-6">
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Наши проекты
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-secondary">
            Что мы предлагаем?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 animate-fade-in border-none">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Icon name="BookOpen" className="text-primary" size={28} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-secondary">Бухгалтерский учёт</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Постановка грамотного бухгалтерского и управленческого учёта для полного контроля над финансами
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 animate-fade-in border-none" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Icon name="Network" className="text-primary" size={28} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-secondary">Интеграция систем</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Интеграция корпоративных ресурсов с CRM-системами и сайтами электронной коммерции
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 animate-fade-in border-none" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Icon name="ShoppingCart" className="text-primary" size={28} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-secondary">Торговое оборудование</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Настройка специализированного торгового оборудования и поддержка системы «Честный знак»
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 animate-fade-in border-none" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Icon name="Settings" className="text-primary" size={28} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-secondary">ИТ-инфраструктура</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Оптимизация ИТ-инфраструктуры вашей организации для максимальной эффективности
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-secondary">
            Почему выбирают именно нас?
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="flex gap-4 animate-fade-in">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="CheckCircle" className="text-white" size={24} />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-secondary">Профессиональный подход</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Глубокие знания специфики российского рынка и актуального законодательства
                </p>
              </div>
            </div>

            <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="Zap" className="text-white" size={24} />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-secondary">Быстрое внедрение</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Автоматизированные решения без потери производительности вашего предприятия
                </p>
              </div>
            </div>

            <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="Star" className="text-white" size={24} />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-secondary">Высокое качество</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Поддержка высокого уровня обслуживания клиентов и стабильная работа всех процессов
                </p>
              </div>
            </div>

            <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="Target" className="text-white" size={24} />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-secondary">Грамотный подбор</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Аппаратное и программное обеспечение, оптимизированное под нужды вашего бизнеса
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-secondary">
            Примеры наших проектов
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Мы помогли десяткам компаний автоматизировать их бизнес-процессы
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 animate-scale-in border-none">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Store" className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-secondary">Торговые сети</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Автоматизация торговых сетей средней величины с интеграцией онлайн-касс и маркировочных комплексов
                </p>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 animate-scale-in border-none" style={{ animationDelay: '0.1s' }}>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Package" className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-secondary">Складской учёт</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Полностью настроенная система складского учёта для крупных логистических центров
                </p>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 animate-scale-in border-none" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Shield" className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-secondary">Маркировка товаров</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Подключение производителей к системе обязательной маркировки «Честный знак»
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-muted-foreground">
              Позвоните нам или оставьте заявку. Вместе мы сделаем ваш бизнес эффективнее
            </p>
          </div>
          <Card className="p-8 md:p-12 border-none shadow-xl animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary">Имя</label>
                <Input
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary">Email</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary">Телефон</label>
                <Input
                  type="tel"
                  placeholder="+7 (999) 999-99-99"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-12"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary">Сообщение</label>
                <Textarea
                  placeholder="Расскажите о вашем проекте..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-32"
                />
              </div>
              <Button type="submit" size="lg" className="w-full text-lg py-6">
                Отправить заявку
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 bg-secondary text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">IT Автоматизация</h3>
              <p className="text-white/80">
                Профессиональная автоматизация бизнеса на платформе 1С
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-white/80">
                <p>Телефон: +7 (XXX) XXX XX XX</p>
                <p>Email: info@vashasite.ru</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <a href="#" className="hover:text-primary transition-colors">
                  <Icon name="Mail" size={24} />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Icon name="Phone" size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>© 2024 IT Автоматизация. Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
