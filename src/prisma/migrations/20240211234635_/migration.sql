/*
  Warnings:

  - You are about to drop the `Configurator` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Configurator";

-- CreateTable
CREATE TABLE "Configuration" (
    "id" SERIAL NOT NULL,
    "sizeId" INTEGER NOT NULL,
    "SlotsId" INTEGER NOT NULL,
    "count" INTEGER NOT NULL,

    CONSTRAINT "Configuration_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Configuration_id_key" ON "Configuration"("id");
