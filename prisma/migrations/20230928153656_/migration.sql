/*
  Warnings:

  - Added the required column `belongsToId` to the `Update` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Update" ADD COLUMN     "belongsToId" TEXT NOT NULL;
