document.addEventListener("DOMContentLoaded", function () {

    function showMessage(text, type) {

        let box = document.getElementById("messageBox");

        box.className = "message-box message-" + type;

        box.textContent = text;

        box.style.display = "block";

        setTimeout(() => {
            box.style.display = "none";
        }, 3000);

    }



    // DELETE EVENT

    document.querySelectorAll(".delete-event").forEach(button => {

        button.addEventListener("click", function () {

            let row = this.closest("tr");

            let title = row.querySelector(".event-title").textContent.trim();

            if (confirm("Delete " + title + " ?")) {

                row.remove();

                showMessage("Event deleted", "success");

            }

        });

    });



    // EDIT EVENT

    document.querySelectorAll(".edit-event").forEach(button => {

        button.addEventListener("click", function () {

            let title = this.closest("tr")
                .querySelector(".event-title").textContent.trim();

            showMessage("Editing " + title, "info");

        });

    });



    // DELETE USER

    document.querySelectorAll(".delete-user").forEach(button => {

        button.addEventListener("click", function () {

            let row = this.closest("tr");

            let name = row.querySelector(".user-name").textContent.trim();

            if (confirm("Delete " + name + " ?")) {

                row.remove();

                showMessage("User deleted", "success");

            }

        });

    });



});
