/*
  Warnings:

  - You are about to drop the column `addres` on the `Barbershop` table. All the data in the column will be lost.
  - You are about to drop the column `barbershooId` on the `BarbershopService` table. All the data in the column will be lost.
  - You are about to drop the column `barbershopId` on the `Booking` table. All the data in the column will be lost.
  - Added the required column `address` to the `Barbershop` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `BarbershopService` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Barbershop" DROP COLUMN "addres",
ADD COLUMN     "address" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "BarbershopService" DROP COLUMN "barbershooId",
ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "barbershopId";
