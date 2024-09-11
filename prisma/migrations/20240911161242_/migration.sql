/*
  Warnings:

  - You are about to drop the `_CourseToSchool` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CourseToSchool" DROP CONSTRAINT "_CourseToSchool_A_fkey";

-- DropForeignKey
ALTER TABLE "_CourseToSchool" DROP CONSTRAINT "_CourseToSchool_B_fkey";

-- DropTable
DROP TABLE "_CourseToSchool";

-- CreateTable
CREATE TABLE "SchoolCourse" (
    "schoolId" INTEGER NOT NULL,
    "courseId" INTEGER NOT NULL,

    CONSTRAINT "SchoolCourse_pkey" PRIMARY KEY ("schoolId","courseId")
);

-- AddForeignKey
ALTER TABLE "SchoolCourse" ADD CONSTRAINT "SchoolCourse_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SchoolCourse" ADD CONSTRAINT "SchoolCourse_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;
