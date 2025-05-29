

import { useState } from 'react';
import {Star, ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  size: string;
  image: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface CustomerReview {
  id: number;
  name: string;
  location: string;
  review: string;
  avatar: string;
  rating: number;
}
export default function Store (){
  const navigate=useNavigate();
  // const [currentPage, setCurrentPage] = useState<'product' | 'checkout'>('product');
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [quantity, setQuantity] = useState<number>(1);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [currentReview, setCurrentReview] = useState<number>(0);

  const product = {
    id: 1,
    name: 'Silhouette No.1 - Vermillion',
    price: 7999,
    rating: 4.8,
    reviews: 124,
    description: 'A tailored composition in motion. Cut from structured wool with a sculpted shoulder and softened hem, this piece captures presence without force. Worn here in the stillness of a city in motion.',
    images: [
      'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=600&fit=crop'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  };

  const faqs: FAQ[] = [
    {
      question: "What materials are used in this garment?",
      answer: "Our Silhouette No.1 is crafted from premium structured wool (85%) with elastane (15%) for comfort and flexibility. The fabric is sourced from certified sustainable mills and treated with care to maintain its luxurious feel and durability."
    },
    {
      question: "How should I care for this piece?",
      answer: "We recommend dry cleaning for best results. If hand washing, use cold water with gentle detergent and lay flat to dry. Avoid direct sunlight and store on padded hangers to maintain the garment's structure."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return window for unworn items with original tags. Returns are free within the UK, and we provide prepaid return labels. International returns may incur shipping costs."
    },
    {
      question: "How does the sizing run?",
      answer: "Our sizing runs true to UK standards. The Silhouette No.1 features a tailored fit through the body with a relaxed shoulder. We recommend consulting our size chart or contacting our styling team for personalized fit advice."
    },
    {
      question: "Is this piece ethically made?",
      answer: "Yes, all Eclypse garments are produced in certified ethical factories with fair labor practices. We maintain direct relationships with our manufacturers and conduct regular audits to ensure our standards are met."
    },
    {
      question: "Do you offer alterations?",
      answer: "We provide complimentary basic alterations for purchases over £200. This includes hem adjustments and minor sizing modifications. Contact us within 14 days of delivery to arrange alterations."
    }
  ];

  const customerReviews: CustomerReview[] = [
    {
      id: 1,
      name: "Sarah Chen",
      location: "London, UK",
      review: "Understated, but unforgettable. It feels like it was made for me. The quality is exceptional and the fit is perfect.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 2,
      name: "Emma Rodriguez",
      location: "Manchester, UK",
      review: "The attention to detail is incredible. From the structured shoulders to the soft hem, every element feels intentional and luxurious.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 3,
      name: "Aisha Patel",
      location: "Birmingham, UK",
      review: "I've worn this piece to both business meetings and evening events. It's versatile, elegant, and gets compliments every time.",
      avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 4,
      name: "Julia Morrison",
      location: "Edinburgh, UK",
      review: "The wool quality is outstanding and the color is even more beautiful in person. Worth every penny for a piece that will last years.",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
      rating: 4
    }
  ];

  const handleBuyNow = () => {
    const newItem: CartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      size: selectedSize,
      image: product.images[0]
    };
    setCartItems([newItem]);
    // setCurrentPage('checkout');
    navigate("/checkout");

  };

  const updateQuantity = (change: number) => {
    setQuantity(Math.max(1, quantity + change));
  };

  const updateCartQuantity = (id: number, change: number) => {
    setCartItems(items => 
      items.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const getSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % customerReviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + customerReviews.length) % customerReviews.length);
  };

 return(
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/Frame 19.png" className='h-10' alt="" />
            {/* <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-4">
              <div className="w-4 h-4 bg-black rounded-full"></div>
            </div> */}
          </div>
          
          {/* Navigation */}
          <nav className="flex items-center space-x-8">
            <a href="#" className="text-white hover:text-gray-300 transition-colors">About Us</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">Waitlist</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">Cart</a>
            <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors">
              Buy
            </button>
          </nav>
        </div>
      </header>

      <div className="pt-20 max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="mb-16">
          {/* Large Logo */}
          <div className="flex justify-between items-start mb-8">
            <div className="text-6xl md:text-8xl font-light">
              <span className="text-white">Eclypse</span>
              <span className="text-sm align-super">®</span>
            </div>
            <div className="text-white text-sm">
              © 2025
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative h-96 md:h-[500px] border-4 border-blue-500 rounded-lg overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=1200&h=600&fit=crop"
              alt="Hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-8 right-8">
              <h1 className="text-white text-3xl md:text-4xl font-light">
                A silhouette worth remembering
              </h1>
            </div>
          </div>
          
          {/* Philosophy Text */}
          <div className="mb-8">
            <h2 className="text-white text-3xl md:text-4xl font-light leading-relaxed max-w-4xl">
              Rooted in a philosophy of quiet luxury, our garments are designed to speak softly in cut, in movement, in presence.
            </h2>
          </div>
          
          {/* Learn More Link */}
          <div>
            <a href="#" className="text-white text-lg border-b border-white pb-1 hover:text-gray-300 hover:border-gray-300 transition-colors inline-flex items-center">
              Learn more about Eclypse
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {product.images.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg">
              <img 
                src={image}
                alt={`Product ${index + 1}`}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Product Details */}
        <div className="bg-white text-black rounded-lg p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <img 
                src={product.images[0]}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            
            <div className="space-y-6">
              {/* Product Description */}
              <div className="bg-pink-100 border-2 border-pink-500 p-4 rounded-lg">
                <p className="text-black text-sm leading-relaxed">
                  A tailored composition in motion. Cut from structured wool with a sculpted shoulder and softened hem, this piece captures presence without force. Worn here in the stillness of a city in motion.
                </p>
              </div>

              {/* Product Images */}
              <div className="flex space-x-4">
                {product.images.slice(0, 3).map((image, index) => (
                  <img 
                    key={index}
                    src={image}
                    alt={`Product view ${index + 1}`}
                    className="w-20 h-24 object-cover rounded-lg"
                  />
                ))}
              </div>

              {/* Price */}
              <div className="space-y-2">
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-bold">₹ 7,999</span>
                </div>
                <p className="text-gray-600 text-sm">MRP incl. of all taxes</p>
              </div>

              {/* Size Selection */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Please select a size</span>
                  <button className="text-sm text-gray-500 underline">Size chart</button>
                </div>
                <div className="flex space-x-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-lg border font-medium transition-colors ${
                        selectedSize === size
                          ? 'border-black bg-black text-white'
                          : 'border-gray-300 bg-gray-100 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button className="flex-1 bg-white border-2 border-gray-300 text-black font-semibold py-3 px-6 rounded-lg hover:border-gray-400 transition-colors">
                  Add to Cart
                </button>
                <button
                  onClick={handleBuyNow}
                  className="flex-1 bg-black text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-light text-white mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-900 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-800 transition-colors"
                >
                  <span className="text-white font-medium">{faq.question}</span>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-light text-white">Our Customers</h2>
            <div className="flex space-x-2">
              <button
                onClick={prevReview}
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextReview}
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="bg-gray-900 rounded-lg p-8">
            <div className="flex items-start space-x-6">
              <img
                src={customerReviews[currentReview].avatar}
                alt={customerReviews[currentReview].name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < customerReviews[currentReview].rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <blockquote className="text-2xl text-white font-light leading-relaxed mb-4">
                  "{customerReviews[currentReview].review}"
                </blockquote>
                <div className="text-gray-400">
                  <p className="font-medium">{customerReviews[currentReview].name}</p>
                  <p className="text-sm">{customerReviews[currentReview].location}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Review indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {customerReviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentReview ? 'bg-white' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 border-t border-gray-800 pt-12 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Logo and Navigation */}
            <div>
              <div className="text-2xl font-bold mb-8">
                <span className="text-white">Eclypse</span>
                <span className="text-xs align-super">®</span>
              </div>
              <nav className="space-y-3">
                <div><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></div>
                <div><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></div>
                <div><a href="#" className="text-gray-400 hover:text-white transition-colors">Buy</a></div>
                <div><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Customers</a></div>
                <div><a href="#" className="text-gray-400 hover:text-white transition-colors">Contacts</a></div>
              </nav>
            </div>

            {/* Contact Information */}
            <div>
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">CONTACT</h4>
                <p className="text-white text-lg">+91 123-456-7890</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">EMAIL</h4>
                <p className="text-white">eclypse@gmail.com</p>
              </div>
            </div>

            {/* Copyright and Back to Top */}
            <div className="flex flex-col justify-between">
              <div></div>
              <div className="flex justify-between items-end">
                <p className="text-gray-500 text-sm">© Eclypse 2025</p>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )


};

