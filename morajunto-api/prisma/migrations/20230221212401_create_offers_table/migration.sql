-- CreateTable
CREATE TABLE "offers" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "propertyId" INTEGER NOT NULL,
    "bedroomId" INTEGER,
    "publish" BOOLEAN NOT NULL DEFAULT false,
    "rentPricing" TEXT NOT NULL,
    "availableAt" TIMESTAMP(3) NOT NULL,
    "depositRequired" BOOLEAN NOT NULL DEFAULT false,
    "depositAmount" TEXT,
    "minimumStay" INTEGER,
    "maximumStay" INTEGER,
    "menAllowed" BOOLEAN NOT NULL DEFAULT true,
    "womenAllowed" BOOLEAN NOT NULL DEFAULT true,
    "withElectricity" BOOLEAN NOT NULL DEFAULT false,
    "withGas" BOOLEAN NOT NULL DEFAULT false,
    "withInternet" BOOLEAN NOT NULL DEFAULT false,
    "withWater" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "offers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "offers_bedroomId_key" ON "offers"("bedroomId");

-- AddForeignKey
ALTER TABLE "offers" ADD CONSTRAINT "offers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "offers" ADD CONSTRAINT "offers_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "properties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "offers" ADD CONSTRAINT "offers_bedroomId_fkey" FOREIGN KEY ("bedroomId") REFERENCES "bedrooms"("id") ON DELETE SET NULL ON UPDATE CASCADE;
