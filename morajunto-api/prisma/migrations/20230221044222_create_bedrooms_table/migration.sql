-- CreateTable
CREATE TABLE "bedrooms" (
    "id" SERIAL NOT NULL,
    "propertyId" INTEGER NOT NULL,
    "key" TEXT NOT NULL,

    CONSTRAINT "bedrooms_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "bedrooms" ADD CONSTRAINT "bedrooms_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "properties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
