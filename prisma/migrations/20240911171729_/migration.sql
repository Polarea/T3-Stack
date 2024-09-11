/*
  Warnings:

  - You are about to drop the `SchoolCourse` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SchoolCourse" DROP CONSTRAINT "SchoolCourse_courseId_fkey";

-- DropForeignKey
ALTER TABLE "SchoolCourse" DROP CONSTRAINT "SchoolCourse_schoolId_fkey";

-- DropTable
DROP TABLE "SchoolCourse";

-- CreateTable
CREATE TABLE "_CourseToSchool" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CourseToSchool_AB_unique" ON "_CourseToSchool"("A", "B");

-- CreateIndex
CREATE INDEX "_CourseToSchool_B_index" ON "_CourseToSchool"("B");

-- AddForeignKey
ALTER TABLE "_CourseToSchool" ADD CONSTRAINT "_CourseToSchool_A_fkey" FOREIGN KEY ("A") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CourseToSchool" ADD CONSTRAINT "_CourseToSchool_B_fkey" FOREIGN KEY ("B") REFERENCES "School"("id") ON DELETE CASCADE ON UPDATE CASCADE;
