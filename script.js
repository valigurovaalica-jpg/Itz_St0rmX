const copyButton = document.getElementById("copyIP");
const toast = document.getElementById("toast");

copyButton.addEventListener("click", async () => {

    try {

        await navigator.clipboard.writeText(
            "susenkasmp.ultramc.co"
        );

    } catch (error) {

        console.log(error);

    }

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 1800);

});
