/*
  Warnings:

  - A unique constraint covering the columns `[stateId,name]` on the table `cities` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "neighborhoods" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "normalizedName" TEXT NOT NULL,
    "cityId" INTEGER NOT NULL,

    CONSTRAINT "neighborhoods_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "neighborhoods_cityId_name_normalizedName_key" ON "neighborhoods"("cityId", "name", "normalizedName");

-- AddForeignKey
ALTER TABLE "neighborhoods" ADD CONSTRAINT "neighborhoods_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "cities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
