-- CreateTable
CREATE TABLE "states" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "acronym" TEXT NOT NULL,
    "isAvailable" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "states_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "states_acronym_key" ON "states"("acronym");