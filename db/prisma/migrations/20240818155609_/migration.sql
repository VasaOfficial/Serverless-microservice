/*
  Warnings:

  - You are about to drop the column `topOfferId` on the `CartItem` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `CartItem` table. All the data in the column will be lost.
  - You are about to drop the column `topOfferId` on the `Favorite` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,destinationId]` on the table `Favorite` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `isTopOffer` to the `Destination` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Favorite_userId_destinationId_topOfferId_type_key";

-- AlterTable
ALTER TABLE "CartItem" DROP COLUMN "topOfferId",
DROP COLUMN "type";

-- AlterTable
ALTER TABLE "Destination" ADD COLUMN     "isTopOffer" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Favorite" DROP COLUMN "topOfferId";

-- CreateIndex
CREATE UNIQUE INDEX "Favorite_userId_destinationId_key" ON "Favorite"("userId", "destinationId");
