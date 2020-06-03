import fetch from "node-fetch";

interface UserRequest {
    email: string;
    password: string;
}

interface UserResponse {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    roleID: number;
    profileImageURL: string;
    resetPasswordExpires: Date;
    createdByUserID: number;
    updatedByUserID: number;
    lastSeen: Date;
    lastLogin: Date;
    confirmedAt: Date;
    createdAt: Date;
    updatedAt: Date;
    goalDescription: string;
    introVideoComplete: boolean;
    goalDescriptionComplete: boolean;
    goalSelectionComplete: boolean;
    timeZone: string;
    deactivatedAt: Date;
    token: string;
}

const login = async (param: UserRequest): Promise<UserResponse> => {
    try {
        const response = await fetch('https://dev.thegameplanner.com/api/auth/signin', {
            method: 'post',
            body: JSON.stringify(param),
            headers: { 'Content-Type': 'application/json' }
        });
        return response.json();
    } catch (error) {
        return error;
    }
};

const body: UserRequest = {
    email: "adam.joe@gps.com",
    password: "password@123"
}

const response: Promise<UserResponse> = login(body);
response.then((res) => {
    console.log(res);
})