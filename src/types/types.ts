export type Qualification = {
    id: number;
    name: string;
    instructors: Instructor[];
}

export type Instructor = {
    id: number;
    name: string;
    qualifications: Qualification[];
}

export type Course = {
    id: number;
    name: string;
    startDate: Date;
    endDate: Date;
    schools: School[];
}

export type School = {
    id: number;
    name: string;
    courses: Course[];
}