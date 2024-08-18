/*
  Warnings:

  - You are about to drop the `TopOffers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CartItem" DROP CONSTRAINT "CartItem_topOfferId_fkey";

-- DropForeignKey
ALTER TABLE "Favorite" DROP CONSTRAINT "Favorite_topOfferId_fkey";

-- DropTable
DROP TABLE "TopOffers";
