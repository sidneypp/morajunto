-- AlterTable
ALTER TABLE "PropertyFeatures" ADD COLUMN     "hasCleaningService" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "hasEnsuite" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isUnfurnishedBedroom" BOOLEAN NOT NULL DEFAULT true;
