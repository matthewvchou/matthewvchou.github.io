document.addEventListener("DOMContentLoaded", function () {
    // Function to create the popup
    function showPopup(event) {
        event.preventDefault(); // Prevent the default action of the link

        // Check if the popup already exists
        if (document.getElementById("custom-popup")) return;

        // Create the popup container
        let popup = document.createElement("div");
        popup.id = "custom-popup";
        popup.innerHTML = `
            <div class="popup-content">
                <p>Download Matthew_Chou_Resume?</p>
                <button id="yes" class="popup-button accept">Yes</button>
                <button id="no" class="popup-button reject">No</button>
            </div>
        `;

        // Append popup to the body
        document.body.appendChild(popup);

        // Check if styles already exist before adding them
        if (!document.getElementById("popup-style")) {
            let style = document.createElement("style");
            style.id = "popup-style";
            style.innerHTML = `
                #custom-popup {
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: white;
                    padding: 20px;
                    border-radius: 10px;
                    text-align: center;
                    z-index: 1000;
                }
                .popup-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .popup-button {
                    margin: 5px;
                    padding: 10px 20px;
                    border: none;
                    cursor: pointer;
                    font-size: 16px;
                    border-radius: 5px;
                }
            `;
            document.head.appendChild(style);
        }

        // Event listeners for Accept and Reject buttons
        document.getElementById("yes").addEventListener("click", function () {
            document.body.removeChild(popup);

            // Create a temporary link element to trigger the download
            let downloadLink = document.createElement("a");
            downloadLink.href = "Matthew_Chou_Resume.pdf"; // Set the path to your resume file
            downloadLink.download = "Matthew_Chou_Resume.pdf"; // Set the download file name

            // Append the link to the document and simulate a click
            document.body.appendChild(downloadLink);
            downloadLink.click();

            // Remove the link after downloading
            document.body.removeChild(downloadLink);
        });

        document.getElementById("no").addEventListener("click", function () {
            document.body.removeChild(popup);
        });
    }

    // Attach the popup function to the Resume button
    let resumeButton = document.getElementById("resume");
    if (resumeButton) {
        resumeButton.addEventListener("click", showPopup);
    }
});
