const ImageGrid = () => {
  return (
    <section className="p-8 bg-black">
      <div className="grid grid-cols-6 gap-4">
        {/* Top Row */}
        <div className="col-span-4 row-span-1">
          <img
            src="/tshirt1.jpg"
            alt="Fashion 1"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="col-span-2 row-span-1">
          <img
             src="/tshirt2.jpg"
            alt="Fashion 2"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Bottom Row */}
        <div className="col-span-2 row-span-1">
          <img
            src="/tshirt3.jpg"
            alt="Fashion 3"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="col-span-2 row-span-1">
          <img
             src="/jacket1.jpg"
            alt="Fashion 4"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="col-span-2 row-span-1">
          <img
            src="/jacket5.jpg"
            alt="Fashion 5"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;
