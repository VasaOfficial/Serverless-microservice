import { TopOffer, topOffersData } from "./data/topOffersData";
import prisma from '../prisma'

async function seedData() {
  const topOffersNames = Object.keys(topOffersData); // Get all top offers names

  for (const location of topOffersNames) {
    const existingLocation = await prisma.topOffers.findFirst({
      where: { countryName: location },
    });

    const {
      country,
      city,
      price,
      imageUrl,
      shortDescription,
      description,
      days,
      tripRoute,
      travelPlan,
      includedIn,
      dateRange,
    } = topOffersData[location] as TopOffer;

    if (!existingLocation) {
      const destination = await prisma.topOffers.create({
        data: {
          countryName: country,
          city: city,
          price: price,
          imageUrl: imageUrl,
          shortDescription: shortDescription,
          description: description,
          durationDays: days,
          tripRoute: tripRoute,
          travelPlans:  travelPlan,
          includedIn: includedIn,
          dateRange: dateRange,
        },
      });
    } else {
      console.log(`Continent  already exists, skipping...`);
    }
  }
}

seedData()
.catch((error) => {
  console.error('Error seeding data:', error);
})
.finally(async () => {
  await prisma.$disconnect();
});

// delete all data from the table
async function deleteAllData() {
  // Define deletion order (important for relationships)
  const deletionOrder = [
    'TopOffers',
  ];

  for (const modelName of deletionOrder) {
    await prisma.$executeRawUnsafe(`DELETE FROM "${modelName}"`);
  }

  console.log('All data deleted from database!');
}

//deleteAllData()