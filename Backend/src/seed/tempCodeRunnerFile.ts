

// const runSeeder = async () => {
//   try {
//     await connectDB();

//     // Clear existing data
//     await Product.deleteMany();
//     await FAQ.deleteMany();
//     await CustomerReview.deleteMany();
//     await Order.deleteMany();

//     // Seed Products
//     const createdProducts = await Product.insertMany(seedProducts);



//     // Assign productId to reviews
//     seedReviews[0].productId = createdProducts[0].id;

//     // Seed Reviews & FAQs
//     await CustomerReview.insertMany(seedReviews);
//     await FAQ.insertMany(seedFAQs);

//     console.log('✅ Demo data inserted successfully!');
//     process.exit();
//   } catch (error) {
//     console.error('❌ Error inserting demo data:', error);
//     process.exit(1);
//   }
// };

// runSeeder();
