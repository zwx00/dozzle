import ClipboardJS from "clipboard";
new ClipboardJS(".copy").on("success", function (e) {
  document.querySelector("button.copy").textContent = "Copied!";
});
