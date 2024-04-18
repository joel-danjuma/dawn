-- AlterTable
ALTER TABLE "user_profiles" ADD COLUMN     "grammatical_gender" TEXT NOT NULL DEFAULT 'prefer-not-to-say',
ADD COLUMN     "name" TEXT NOT NULL DEFAULT '';
