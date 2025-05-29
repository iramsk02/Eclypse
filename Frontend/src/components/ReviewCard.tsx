import React from 'react';
import { ChevronLeft, ChevronRight, Quote, QuoteIcon } from 'lucide-react';
import axios from 'axios';

const ReviewCard = ({
    reviews = [],
    currentIndex = 0,
    onPrevious,
    onNext,
    showNavigation = true
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
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>
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
                            className={`${currentIndex === 0 ? 'text-gray-600' : 'text-white group-hover:text-gray-300'} transition-colors`}
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
                        src={currentReview.avatar}
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
                                className={`${currentIndex === reviews.length - 1 ? 'text-gray-600' : 'text-white group-hover:text-gray-300'} transition-colors`}
                            />
                        </button>
                    )}

                    {/* Profile Images */}
                    {/* <div className="flex flex-col space-y-3 mt-8">
                        {reviews.map((review, index) => (
                            <div
                                key={index}
                                className={`w-12 h-12 rounded-full border-2 transition-all duration-300 cursor-pointer ${index === currentIndex
                                        ? 'border-white shadow-lg scale-110'
                                        : 'border-gray-600 hover:border-gray-400'
                                    }`}
                                onClick={() => {/* Handle profile click if needed 
                            >
                                {review.avatar ? (
                                    <img
                                        src={review.avatar}
                                        alt={review.author}
                                        className="w-full h-full rounded-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                                        <span className="text-white text-sm font-medium">
                                            {review.author?.charAt(0) || '?'}
                                        </span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div> */}
                </div>
            </div>

            {/* Progress Indicator */}
            {reviews.length > 1 && (
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="flex space-x-2">
                        {reviews.map((_, index) => (
                            <div
                                key={index}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white' : 'bg-gray-600'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

// Example usage component showing how to integrate with your backend
const ReviewsContainer = () => {
    const [reviews, setReviews] = React.useState([]);
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [loading, setLoading] = React.useState(true);

    // Replace this with your actual backend API call
    React.useEffect(() => {
        const fetchReviews = async () => {
            try {
                // Replace with your actual API endpoint
                // const response = await fetch('/api/reviews');
                // const data = await response.json();
                // setReviews(data);

                //   useEffect(() => {
                //     const fetchFaqs = async () => {
                const res = await axios.get("http://localhost:5000/api/reviews");
                console.log(res.data)
                setReviews(res.data.data);
                //     };
                //     fetchFaqs();
                //   }, []);

                // For now, showing the structure your backend should return
                console.log('Expected data structure from backend:', {
                    reviews: [
                        {
                            id: 1,
                            text: "Understated, but unforgettable. It feels like it was made for me",
                            author: "Random Woman",
                            location: "NY, USA",
                            avatar: null // Optional: URL to user avatar image
                        }
                        // ... more reviews
                    ]
                });

                setLoading(false);
            } catch (error) {
                console.error('Error fetching reviews:', error);
                setLoading(false);
            }
        };

        fetchReviews();
    }, []);

    const handlePrevious = () => {
        setCurrentIndex(prev => Math.max(0, prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex(prev => Math.min(reviews.length - 1, prev + 1));
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