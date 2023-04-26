-- CreateTable
CREATE TABLE "cities" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "normalizedName" TEXT NOT NULL,
    "stateAcronym" TEXT NOT NULL,

    CONSTRAINT "cities_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cities_stateAcronym_name_normalizedName_key" ON "cities"("stateAcronym", "name", "normalizedName");

-- AddForeignKey
ALTER TABLE "cities" ADD CONSTRAINT "cities_stateAcronym_fkey" FOREIGN KEY ("stateAcronym") REFERENCES "states"("acronym") ON DELETE RESTRICT ON UPDATE CASCADE;
