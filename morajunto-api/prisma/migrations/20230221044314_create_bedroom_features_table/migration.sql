-- CreateTable
CREATE TABLE "bedroom_features" (
    "id" SERIAL NOT NULL,
    "beedroomId" INTEGER NOT NULL,
    "isUnfurnished" BOOLEAN NOT NULL,
    "hasBed" BOOLEAN NOT NULL DEFAULT false,
    "hasBalcony" BOOLEAN NOT NULL DEFAULT false,
    "hasChairs" BOOLEAN NOT NULL DEFAULT false,
    "hasDesk" BOOLEAN NOT NULL DEFAULT false,
    "hasEnsuite" BOOLEAN NOT NULL DEFAULT false,
    "hasLock" BOOLEAN NOT NULL DEFAULT false,
    "hasSofa" BOOLEAN NOT NULL DEFAULT false,
    "hasTv" BOOLEAN NOT NULL DEFAULT false,
    "hasWardrobe" BOOLEAN NOT NULL DEFAULT false,
    "hasWindow" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "bedroom_features_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "bedroom_features_beedroomId_key" ON "bedroom_features"("beedroomId");

-- AddForeignKey
ALTER TABLE "bedroom_features" ADD CONSTRAINT "bedroom_features_beedroomId_fkey" FOREIGN KEY ("beedroomId") REFERENCES "bedrooms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
