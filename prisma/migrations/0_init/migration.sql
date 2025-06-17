-- CreateTable
CREATE TABLE "activities" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255),

    CONSTRAINT "activities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "elders" (
    "id" SERIAL NOT NULL,
    "firstname" VARCHAR(255) NOT NULL,
    "lastname" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone_number" VARCHAR(255) NOT NULL,
    "birthdate" TIMESTAMP(6),
    "job" VARCHAR(255),
    "city" VARCHAR(255) NOT NULL,
    "zipcode" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "url_image" VARCHAR(255),
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "elders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "elders_activities" (
    "id" SERIAL NOT NULL,
    "activity_id" INTEGER NOT NULL,
    "elder_id" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "elders_activities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "volonteers" (
    "id" SERIAL NOT NULL,
    "firstname" VARCHAR(255) NOT NULL,
    "lastname" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone_number" VARCHAR(255) NOT NULL,
    "url_image" VARCHAR(255),
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "volonteers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "volonteers_activities" (
    "id" SERIAL NOT NULL,
    "activity_id" INTEGER NOT NULL,
    "volonteer_id" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "volonteers_activities_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "elders_activities" ADD CONSTRAINT "elders_activities_activity_id_fkey" FOREIGN KEY ("activity_id") REFERENCES "activities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "elders_activities" ADD CONSTRAINT "elders_activities_elder_id_fkey" FOREIGN KEY ("elder_id") REFERENCES "elders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "volonteers_activities" ADD CONSTRAINT "volonteers_activities_activity_id_fkey" FOREIGN KEY ("activity_id") REFERENCES "activities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "volonteers_activities" ADD CONSTRAINT "volonteers_activities_volonteer_id_fkey" FOREIGN KEY ("volonteer_id") REFERENCES "volonteers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

