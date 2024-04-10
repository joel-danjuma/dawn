-- CreateTable
CREATE TABLE "user_profiles" (
    "course" TEXT NOT NULL,
    "client_description" TEXT NOT NULL,
    "id" UUID NOT NULL,

    CONSTRAINT "user_profiles_pkey" PRIMARY KEY ("id")
);
