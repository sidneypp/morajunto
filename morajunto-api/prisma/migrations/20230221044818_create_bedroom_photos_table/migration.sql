-- CreateTable
CREATE TABLE "bedroom_photos" (
    "id" SERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "filename" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "bedroomId" INTEGER NOT NULL,

    CONSTRAINT "bedroom_photos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "bedroom_photos" ADD CONSTRAINT "bedroom_photos_bedroomId_fkey" FOREIGN KEY ("bedroomId") REFERENCES "bedrooms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
