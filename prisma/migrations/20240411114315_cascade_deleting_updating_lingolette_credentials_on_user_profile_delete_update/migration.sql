-- DropForeignKey
ALTER TABLE "lingolette_credentials" DROP CONSTRAINT "lingolette_credentials_userid_fkey";

-- AddForeignKey
ALTER TABLE "lingolette_credentials" ADD CONSTRAINT "lingolette_credentials_userid_fkey" FOREIGN KEY ("userid") REFERENCES "user_profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
