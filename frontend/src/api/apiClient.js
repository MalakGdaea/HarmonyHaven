const BASE_URL = 'https://localhost:3000';

export async function get(endpoint) {
    try {
        const res = await fetch(`${BASE_URL}${endpoint}`);
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        return await res.json();
    } catch (error) {
        console.error('GET request failed:', error);
        throw error;
    }
}

export async function post(endpoint, data) {
    try {
        const res = await fetch(`${BASE_URL}${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        return await res.json();
    } catch (error) {
        console.error('POST request failed:', error);
        throw error;
    }
}
