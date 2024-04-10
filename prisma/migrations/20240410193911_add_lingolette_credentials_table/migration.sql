-- CreateTable
CREATE TABLE "lingolette_credentials" (
    "targetLng" TEXT NOT NULL,
    "nativeLng" TEXT NOT NULL,
    "id" UUID NOT NULL,
    "languageLevel" INTEGER NOT NULL,
    "userid" UUID NOT NULL,

    CONSTRAINT "lingolette_credentials_pkey" PRIMARY KEY ("id","userid")
);

-- CreateIndex
CREATE UNIQUE INDEX "lingolette_credentials_userid_key" ON "lingolette_credentials"("userid");

-- AddForeignKey
ALTER TABLE "lingolette_credentials" ADD CONSTRAINT "lingolette_credentials_userid_fkey" FOREIGN KEY ("userid") REFERENCES "user_profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
