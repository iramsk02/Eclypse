


import React from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import axios from 'axios';

type Review = {
  id?: number;
  review: string;
  author: string;
  name: string;
  location: string;
  avatar?: string;
};

type ReviewCardProps = {
  reviews: Review[];
  currentIndex: number;
  onPrevious: () => void;
  onNext: () => void;
  showNavigation?: boolean;
};

const ReviewCard: React.FC<ReviewCardProps> = ({
  reviews = [],
  currentIndex = 0,
  onPrevious,
  onNext,
  showNavigation = true,
}) => {
  const currentReview = reviews[currentIndex];

  if (!currentReview) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 text-lg">No reviews available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      {/* Header */}
      <div className="relative z-10 pt-8 px-8">
        <h1 className="text-sm font-light tracking-[0.3em] text-gray-300 uppercase">
          Our Customers
        </h1>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-between h-full px-8 py-16 min-h-[80vh]">
        {/* Navigation - Left */}
        {showNavigation && onPrevious && (
          <button
            onClick={onPrevious}
            className="p-4 hover:bg-white/5 rounded-full transition-all duration-300 group"
            disabled={currentIndex === 0}
          >
            <ChevronLeft
              size={32}
              className={`${
                currentIndex === 0
                  ? 'text-gray-600'
                  : 'text-white group-hover:text-gray-300'
              } transition-colors`}
            />
          </button>
        )}

        {/* Review Content */}
        <div className="flex-1 max-w-4xl mx-auto px-8">
          {/* Quote Icon */}
          <div className="mb-8">
            <Quote size={48} className="text-white/20" />
          </div>

          {/* Review Text */}
          <blockquote className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-16 text-white">
            {currentReview.review}
          </blockquote>

          {/* Author Info */}
          <div className="flex items-center space-x-4">
            <div>
              <div className="text-xl font-medium text-white mb-1">
                {currentReview.name}
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">
                {currentReview.location}
              </div>
            </div>
          </div>
        </div>

        <div>
          <img
            src={currentReview.avatar ?? ''}
            alt={currentReview.author}
            className="w-30 h-30 rounded-full object-cover"
          />
        </div>

        {/* Navigation - Right */}
        <div className="flex flex-col items-center space-y-4">
          {showNavigation && onNext && (
            <button
              onClick={onNext}
              className="p-4 hover:bg-white/5 rounded-full transition-all duration-300 group"
              disabled={currentIndex === reviews.length - 1}
            >
              <ChevronRight
                size={32}
                className={`${
                  currentIndex === reviews.length - 1
                    ? 'text-gray-600'
                    : 'text-white group-hover:text-gray-300'
                } transition-colors`}
              />
            </button>
          )}
        </div>
      </div>

      {/* Progress Indicator */}
      {reviews.length > 1 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2">
            {reviews.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-white' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const ReviewsContainer = () => {
  const [reviews, setReviews] = React.useState<Review[]>([]);
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get(
          'https://eclypse-backend-5li2.onrender.com/api/reviews'
        );
        setReviews(res.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching reviews:', error);
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(reviews.length - 1, prev + 1));
  };

  if (loading) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <div className="animate-pulse">
          <div className="text-lg text-gray-400">Loading reviews...</div>
        </div>
      </div>
    );
  }

  return (
    <ReviewCard
      reviews={reviews}
      currentIndex={currentIndex}
      onPrevious={handlePrevious}
      onNext={handleNext}
      showNavigation={true}
    />
  );
};

export default ReviewsContainer;
