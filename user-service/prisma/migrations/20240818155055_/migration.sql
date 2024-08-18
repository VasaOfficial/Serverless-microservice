/*
  Warnings:

  - Added the required column `isTopOffer` to the `Destination` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Destination" ADD COLUMN     "isTopOffer" BOOLEAN NOT NULL;
