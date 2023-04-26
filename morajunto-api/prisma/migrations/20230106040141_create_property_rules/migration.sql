-- CreateTable
CREATE TABLE "PropertyRules" (
    "id" SERIAL NOT NULL,
    "propertyId" INTEGER NOT NULL,
    "smokingAllowed" BOOLEAN NOT NULL DEFAULT false,
    "childrenAllowed" BOOLEAN NOT NULL DEFAULT false,
    "petsAllowed" BOOLEAN NOT NULL DEFAULT false,
    "alcoholAllowed" BOOLEAN NOT NULL DEFAULT false,
    "guestsAllowed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "PropertyRules_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PropertyRules_propertyId_key" ON "PropertyRules"("propertyId");

-- AddForeignKey
ALTER TABLE "PropertyRules" ADD CONSTRAINT "PropertyRules_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "properties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
