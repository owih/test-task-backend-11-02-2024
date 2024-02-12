-- CreateTable
CREATE TABLE "Configurator" (
    "id" SERIAL NOT NULL,
    "sizeId" INTEGER NOT NULL,
    "SlotsId" INTEGER NOT NULL,
    "count" INTEGER NOT NULL,

    CONSTRAINT "Configurator_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Configurator_id_key" ON "Configurator"("id");
