async function api() {
    const api1 = "https://jsonplaceholder.typicode.com/posts";
    const api2 = "https://jsonplaceholder.typicode.com/users";

    const [posts, users] = await Promise.all([
        fetch(api1).then(response => response.json()),
        fetch(api2).then(response => response.json())
    ]);

    console.log("Posts:", posts);
    console.log("Users:", users);
}
api();