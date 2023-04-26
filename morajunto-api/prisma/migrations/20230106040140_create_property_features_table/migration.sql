-- CreateTable
CREATE TABLE "PropertyFeatures" (
    "id" SERIAL NOT NULL,
    "propertyId" INTEGER NOT NULL,
    "isUnfurnished" BOOLEAN NOT NULL,
    "hasParking" BOOLEAN NOT NULL DEFAULT false,
    "hasGym" BOOLEAN NOT NULL DEFAULT false,
    "hasPool" BOOLEAN NOT NULL DEFAULT false,
    "hasAccessibility" BOOLEAN NOT NULL DEFAULT false,
    "hasAirConditioning" BOOLEAN NOT NULL DEFAULT false,
    "hasTv" BOOLEAN NOT NULL DEFAULT false,
    "hasCentralHeating" BOOLEAN NOT NULL DEFAULT false,
    "hasElevator" BOOLEAN NOT NULL DEFAULT false,
    "hasOutdoorArea" BOOLEAN NOT NULL DEFAULT false,
    "hasBalcony" BOOLEAN NOT NULL DEFAULT false,
    "hasWifi" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "PropertyFeatures_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PropertyFeatures_propertyId_key" ON "PropertyFeatures"("propertyId");

-- AddForeignKey
ALTER TABLE "PropertyFeatures" ADD CONSTRAINT "PropertyFeatures_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "properties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
