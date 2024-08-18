/*
  Warnings:

  - You are about to drop the column `topOfferId` on the `CartItem` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `CartItem` table. All the data in the column will be lost.
  - You are about to drop the column `topOfferId` on the `Favorite` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,destinationId]` on the table `Favorite` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Favorite_userId_destinationId_topOfferId_type_key";

-- AlterTable
ALTER TABLE "CartItem" DROP COLUMN "topOfferId",
DROP COLUMN "type";

-- AlterTable
ALTER TABLE "Favorite" DROP COLUMN "topOfferId";

-- CreateIndex
CREATE UNIQUE INDEX "Favorite_userId_destinationId_key" ON "Favorite"("userId", "destinationId");
