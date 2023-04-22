console.log("PLS");
const playlistBar = document.getElementById("bar");

playlistBar.addEventListener("keyup", (e) => {
    e.preventDefault();

    if (e.key === "Enter") {
        const postData = async () => {
            const request = await fetch("http://localhost:8080/playlist", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"      
                },
                body: JSON.stringify({
                    playlistLink: playlistBar.value
                })
            });
        };

        postData();
    };
});