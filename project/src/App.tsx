import React, { useState, useRef } from 'react';
import { Truck, PenTool as Tool, Clock, Shield, Star, ChevronDown, Phone, Mail, MessageCircle, MapPin, CheckCircle2, Wrench, Package, Home, Users } from 'lucide-react';

interface ServiceRequest {
  name: string;
  phone: string;
  serviceType: 'assembly' | 'disassembly' | 'both';
  address: string;
  comment: string;
}

interface PortfolioItem {
  title: string;
  description: string;
  imageUrl: string;
  category: 'assembly' | 'disassembly' | 'office' | 'home';
}

function App() {
  const [formData, setFormData] = useState<ServiceRequest>({
    name: '',
    phone: '',
    serviceType: 'assembly',
    address: '',
    comment: ''
  });

  const formRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const portfolioItems: PortfolioItem[] = [
    {
      title: 'Сборка современной кухни',
      description: 'Профессиональная установка кухонного гарнитура премиум-класса',
      imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
      category: 'home'
    },
    {
      title: 'Монтаж офисной мебели',
      description: 'Комплексное оснащение офиса на 50 рабочих мест',
      imageUrl: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200',
      category: 'office'
    },
    {
      title: 'Установка гардеробной системы',
      description: 'Монтаж премиальной гардеробной системы с подсветкой',
      imageUrl: 'https://www.union.ru/upload/iblock/620/rptu6h84z734goixfdi7200k66dub7z2/_-ALTO-01.jpg',
      category: 'home'
    },
    {
      title: 'Сборка спальной мебели',
      description: 'Комплексная сборка мебели для спальни премиум-класса',
      imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=1200',
      category: 'home'
    },
    {
      title: 'Офисные перегородки',
      description: 'Установка стеклянных перегородок и рабочих зон',
      imageUrl: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200',
      category: 'office'
    },
    {
      title: 'Разборка и переезд',
      description: 'Профессиональная разборка мебели для переезда компании',
      imageUrl: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&q=80&w=1200',
      category: 'disassembly'
    },
    {
      title: 'Детская комната',
      description: 'Сборка комплекта мебели для детской комнаты',
      imageUrl: 'https://images.unsplash.com/photo-1617104551722-3b2d51366400?auto=format&fit=crop&q=80&w=1200',
      category: 'home'
    },
    {
      title: 'Мебель для гостиной',
      description: 'Монтаж стенки и мягкой мебели в гостиной',
      imageUrl: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=1200',
      category: 'home'
    },
    {
      title: 'Корпоративный переезд',
      description: 'Разборка, упаковка и сборка мебели на новом месте',
      imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1200',
      category: 'disassembly'
    }
  ];

  const services = [
    {
      icon: <Home className="h-12 w-12 text-blue-600" />,
      title: 'Сборка домашней мебели',
      description: 'Профессиональная сборка любой домашней мебели: кухни, спальни, гардеробные, детские',
      features: ['Бережное отношение к вашей мебели', 'Чистота после работы', 'Опытные мастера']
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: 'Офисная мебель',
      description: 'Комплексная сборка офисной мебели любой сложности',
      features: ['Работаем в нерабочее время', 'Быстрая сборка', 'Гарантия на работы']
    },
    {
      icon: <Package className="h-12 w-12 text-blue-600" />,
      title: 'Разборка и переезд',
      description: 'Аккуратная разборка, упаковка и последующая сборка мебели на новом месте',
      features: ['Бережная упаковка', 'Маркировка деталей', 'Сохранность фурнитуры']
    },
    {
      icon: <Wrench className="h-12 w-12 text-blue-600" />,
      title: 'Ремонт мебели',
      description: 'Ремонт и замена фурнитуры, устранение дефектов, усиление конструкций',
      features: ['Выезд на осмотр', 'Подбор материалов', 'Гарантия на ремонт']
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    alert('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.');
    setFormData({
      name: '',
      phone: '',
      serviceType: 'assembly',
      address: '',
      comment: ''
    });
  };

  const handleCallRequest = () => {
    const phone = '+77712160128';
    window.location.href = `tel:${phone}`;
  };

  const handleWhatsAppClick = () => {
    const phone = '+77712160128';
    window.open(`https://wa.me/${phone}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Tool className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">MebelService.kz</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection(servicesRef)} className="text-gray-600 hover:text-blue-600">Услуги</button>
            <button onClick={() => scrollToSection(portfolioRef)} className="text-gray-600 hover:text-blue-600">Наши работы</button>
            <button onClick={() => scrollToSection(contactRef)} className="text-gray-600 hover:text-blue-600">Контакты</button>
          </div>
          <div className="flex items-center space-x-6">
            <button onClick={handleCallRequest} className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
              <Phone className="h-5 w-5" />
              <span className="hidden md:inline">+7 771 216 0128</span>
            </button>
            <button 
              onClick={() => scrollToSection(formRef)} 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Заказать
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Профессиональная сборка и разборка мебели в Алмате и Алматинской области
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Более 1000 довольных клиентов доверили нам свою мебель. Наши опытные мастера соберут вашу мебель быстро, качественно и с гарантией.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection(formRef)}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
                >
                  Оставить заявку
                </button>
                <button 
                  onClick={handleWhatsAppClick}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg text-lg hover:bg-blue-50 transition"
                >
                  Написать в WhatsApp
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=80&w=1200"
                alt="Furniture Assembly"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Предоставляем полный спектр услуг по сборке, разборке и ремонту мебели любой сложности
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition duration-300">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section ref={portfolioRef} id="portfolio" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Наши работы
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Более 5000 успешно выполненных проектов. Каждый проект – это индивидуальный подход и гарантированное качество.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                <div className="relative h-64">
                  <img 
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Почему выбирают нас
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Clock className="h-8 w-8 text-blue-600" />,
                title: 'Оперативность',
                description: 'Выезд мастера в день обращения. Работаем без выходных'
              },
              {
                icon: <Tool className="h-8 w-8 text-blue-600" />,
                title: 'Опытные мастера',
                description: 'Команда профессионалов с опытом от 5 лет. Более 5000 собранных предметов мебели'
              },
              {
                icon: <Shield className="h-8 w-8 text-blue-600" />,
                title: 'Гарантия',
                description: 'Предоставляем гарантию на все виды работ. Бесплатно устраняем любые недочеты'
              },
              {
                icon: <Truck className="h-8 w-8 text-blue-600" />,
                title: 'Выезд по Алмате и Алматинской области',
                description: 'Работаем во всех крупных городах. Бесплатный выезд на замер'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition duration-300">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Form Section */}
      <section ref={formRef} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              Оставить заявку
            </h2>
            <p className="text-xl text-gray-600 text-center mb-8">
              Оставьте заявку прямо сейчас и получите скидку 10% на первый заказ
            </p>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                    placeholder="Введите ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Тип услуги
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({...formData, serviceType: e.target.value as ServiceRequest['serviceType']})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="assembly">Сборка мебели</option>
                    <option value="disassembly">Разборка мебели</option>
                    <option value="both">Сборка и разборка</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Адрес
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                    placeholder="Укажите адрес"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Комментарий
                  </label>
                  <textarea
                    value={formData.comment}
                    onChange={(e) => setFormData({...formData, comment: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={4}
                    placeholder="Опишите ваши пожелания или задайте вопрос"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Отправить заявку
                </button>
                <p className="text-sm text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Как мы работаем
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Простой и понятный процесс работы, который экономит ваше время
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { 
                step: 1, 
                title: 'Заявка', 
                description: 'Оставьте заявку на сайте или позвоните нам. Наш менеджер свяжется с вами в течение 15 минут' 
              },
              { 
                step: 2, 
                title: 'Расчет стоимости', 
                description: 'Согласуем удобное время, рассчитаем точную стоимость работ без скрытых платежей' 
              },
              { 
                step: 3, 
                title: 'Выполнение', 
                description: 'Наши мастера выполнят работу качественно и в срок. Убедятся, что всё работает идеально' 
              },
              { 
                step: 4, 
                title: 'Гарантия', 
                description: 'Принимаете работу, получаете гарантию. Оплата только после вашего полного одобрения' 
              }
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Отзывы наших клиентов
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Более 1000 положительных отзывов от довольных клиентов
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Айгуль К.',
                position: 'Владелец магазина',
                rating: 5,
                text: 'Отличный сервис! Мастера собрали всю мебель для нашего магазина за один день. Очень аккуратно и профессионально. Рекомендую!'
              },
              {
                name: 'Марат Д.',
                position: 'Директор компании',
                rating: 5,
                text: 'Заказывал разборку и сборку мебели при переезде офиса. Команда сработала оперативно, все вещи промаркировали, ничего не потеряли. Отличный сервис!'
              },
              {
                name: 'Елена С.',
                position: 'Домохозяйка',
                rating: 5,
                text: 'Очень довольна работой. Собрали новую кухню, все ровно, красиво, работает идеально. Мастера вежливые, после работы всё убрали. Спасибо!'
              }
            ].map((review, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{review.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-gray-500">{review.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Работаем ежедневно с 9:00 до 21:00 без выходных
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <button 
              onClick={handleCallRequest}
              className="flex items-center space-x-4 bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition duration-300"
            >
              <Phone className="h-8 w-8 text-blue-600" />
              <div className="text-left">
                <h3 className="font-semibold text-lg">Телефон</h3>
                <p className="text-gray-600">+7 771 216 0128</p>
                <p className="text-sm text-gray-500">Ежедневно с 9:00 до 21:00</p>
              </div>
            </button>
            <a 
              href="mailto:bekzanabdimanap080@gmail.ru"
              className="flex items-center space-x-4 bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition duration-300"
            >
              <Mail className="h-8 w-8 text-blue-600" />
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-600">bekzanabdimanap080@gmail.ru</p>
                <p className="text-sm text-gray-500">Ответим в течение часа</p>
              </div>
            </a>
            <button 
              onClick={handleWhatsAppClick}
              className="flex items-center space-x-4 bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition duration-300"
            >
              <MessageCircle className="h-8 w-8 text-blue-600" />
              <div className="text-left">
                <h3 className="font-semibold text-lg">WhatsApp</h3>
                <p className="text-gray-600">+7 771 216 0128</p>
                <p className="text-sm text-gray-500">Быстрые консультации</p>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Tool className="h-8 w-8" />
                <span className="text-xl font-bold">MebelService.kz</span>
              </div>
              <p className="text-gray-400">
                Профессиональная сборка и разборка мебели в Алмате и Алматинской области
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button onClick={() => scrollToSection(servicesRef)} className="hover:text-white">
                    Сборка мебели
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection(servicesRef)} className="hover:text-white">
                    Разборка мебели
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection(servicesRef)} className="hover:text-white">
                    Ремонт мебели
                  </button>
                
                </li>
                <li>
                  <button onClick={() => scrollToSection(servicesRef)} className="hover:text-white">
                    Переезд
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button onClick={() => scrollToSection(portfolioRef)} className="hover:text-white">
                    Наши работы
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection(formRef)} className="hover:text-white">
                    Заказать
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection(contactRef)} className="hover:text-white">
                    Контакты
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button onClick={handleCallRequest} className="hover:text-white">
                    +7 771 216 0128
                  </button>
                </li>
                <li>
                  <a href="mailto:bekzanabdimanap080@gmail.ru" className="hover:text-white">
                    bekzanabdimanap080@gmail.ru
                  </a>
                </li>
                <li>Казахстан, г. Алматы</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400">© 2025 MebelService.kz. Все права защищены.</p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <button className="text-gray-400 hover:text-white">Политика конфиденциальности</button>
                <button className="text-gray-400 hover:text-white">Условия использования</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;