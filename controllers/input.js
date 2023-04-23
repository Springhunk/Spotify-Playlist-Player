const playlistBar = document.getElementById("bar");

playlistBar.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && playlistBar.value.length > 0) {
        e.preventDefault();
        
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
            playlistBar.value = "";
        };

        postData();
    };
});