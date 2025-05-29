// import Navbar from "../components/Navbar";
// import ProductList from "../components/ProductList";

// const HomePage = () => (
//     <main className="bg-black min-h-screen text-white">
//         <Navbar />
//         <header className="p-8 text-5xl font-bold tracking-wider">Eclypse</header>
//         {/* <section className="text-center px-8 mb-10"> */}
//             {/* <div> 
//                 <video src="public\Hero_video.mp4"> <h1 className="text-2xl">A silhouette worth remembering</h1></video>

//             {/* </div> 
       

//          <div className="relative h-96 md:h-[500px] border-4 border-blue-500 rounded-lg overflow-hidden mb-8">
//             <img 
//               src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=1200&h=600&fit=crop"
//               alt="Hero"
//               className="w-full h-full object-cover"
//             /> */}
//             <video
//                 autoPlay
//                 playsInline
//                 loop
//                 muted
//                 src="/Hero_video.mp4"
//                 className="w-full h-[500px] object-cover"
//             ></video>


//             <div className="absolute bottom-8 right-8">
//                 <h1 className="text-white text-3xl md:text-4xl font-light">
//                     A silhouette worth remembering
//                 </h1>
//             </div>
//         {/* </section> */}
//         <ProductList />
//     </main>
// );

// export default HomePage;
import FaqList from "../components/FaqList";
import Footer from "../components/Footer";
import ImageGrid from "../components/ImageGrid";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import ReviewsContainer from "../components/ReviewCard";

const HomePage = () => (
  <main className="bg-black min-h-screen text-white">
    <Navbar />
    <header className="p-8 text-5xl font-bold tracking-wider">Eclypse</header>

    {/* Hero Section with Video and Bottom-Right Text Overlay */}
    <section className="relative w-full h-[500px] mb-8">
      <video
        autoPlay
        playsInline
        loop
        muted
        src="/Hero_video.mp4"
        className="w-full h-full object-cover"
      ></video>

      <div className="absolute bottom-8 right-8">
        <h1 className="text-white text-3xl md:text-4xl font-light">
          A silhouette worth remembering
        </h1>
      </div>
    </section>
    <ImageGrid/>

    <ProductList />
      <FaqList/>
      <ReviewsContainer/>
      <Footer/>
  </main>
);

export default HomePage;
