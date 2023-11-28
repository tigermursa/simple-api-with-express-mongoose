
export type Guardian = {
    fatherName: string;
    motherName: string;
    others: string
}

export type UserT = {
    id: string;
    name: {
        firstName: string;
        middleName: string;
    }
    email: string;
    gender: "male" | "female";
    guardian: Guardian;
}


