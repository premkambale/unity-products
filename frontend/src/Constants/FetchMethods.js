// For API's without token 

// POST method for login and tokenParse
export const LOGIN_POST = async (URL, body) => {
    const res = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(body)
    });

    return res;
}


//Get Wihtout token
export const GETExcept = async (URL) => {
    try {
        const res = await fetch(URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!res.ok) {
            throw new Error('Network response was not ok.');
        }

        return res;  
    } catch (error) {   
        throw new Error('Error occurred while fetching data:', error);
    }
}


//POST for register 
export const REG_POST = async (URL, body,) => {
    const res = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(body)
    });

    return res;
}


// For API's with token 

// GET method
export const GET = async (URL, token) => {
    const res = await fetch(URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + token,
        },
    });
    return res;
}


// POST method
export const POST = async (URL, token, body) => {
    const res = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            "Authorization": "Bearer " + token,
        },
        body: JSON.stringify(body)
    });

    return res;
}


//Post method form In which Image upload
export const POSTWImage = async (URL, token, body) => {
    const res = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/pdf',
            'Accept': 'application/json',
            "Authorization": "Bearer " + token,
        },
        body: JSON.stringify(body)
    });

    return res;
}


// PUT method
export const PUT = async (URL, token, body) => {
    const res = await fetch(URL, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            "Authorization": "Bearer " + token,
        },
        body: JSON.stringify(body)
    });

    return res;
}

// DELETE method
export const DELETE = async (URL, body) => {
    const res = await fetch(URL, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    });

    return res;
}



// //// DELETE method
// export const DELETE = async (URL) => {
//     const res = await fetch(URL, {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//         },
//     });

//     return res;
// }
