import fetch from "node-fetch";

interface Userdata {
    email: string;
    password: string;
}

const login = async (param: Userdata) => {
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

let body = {
    email: "adam.joe@gps.com",
    password: "password@123"
}

let response = login(body);
response.then((res) => {
    console.log(res);
})