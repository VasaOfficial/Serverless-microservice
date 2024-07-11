/*
  Warnings:

  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `salt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `userType` on the `User` table. All the data in the column will be lost.
  - Added the required column `firebaseUid` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_phone_idx";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "password",
DROP COLUMN "phone",
DROP COLUMN "salt",
DROP COLUMN "userType",
ADD COLUMN     "firebaseUid" TEXT NOT NULL,
ADD COLUMN     "payment_id" TEXT,
ADD COLUMN     "stripe_id" TEXT;

-- CreateTable
CREATE TABLE "PaymentMethod" (
    "id" BIGSERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "bank_account" BIGINT,
    "swift_code" TEXT,
    "payment_type" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PaymentMethod_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "PaymentMethod_bank_account_idx" ON "PaymentMethod"("bank_account");

-- CreateIndex
CREATE INDEX "PaymentMethod_user_id_idx" ON "PaymentMethod"("user_id");

-- CreateIndex
CREATE INDEX "PaymentMethod_payment_type_idx" ON "PaymentMethod"("payment_type");

-- AddForeignKey
ALTER TABLE "PaymentMethod" ADD CONSTRAINT "PaymentMethod_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
