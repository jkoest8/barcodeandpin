function generateBarcode() {
  // Grab the user inputs
  const username = document.getElementById("username").value.trim();
  const partialPw = document.getElementById("partialPassword").value.trim();

  // Build the combined string with a Tab in between
  // No newline, so scanning won't auto-submit
  const combinedString = `${username}\t${partialPw}`;

  // If either field is blank, clear the barcode and debug text
  if (!username || !partialPw) {
    JsBarcode("#barcode", "", { displayValue: false }); // Clear barcode
    document.getElementById("barcodeString").textContent = "";
    return;
  }

  // Generate the barcode using JsBarcode
  JsBarcode("#barcode", combinedString, {
    format: "CODE128",
    lineColor: "#000",
    background: "#fff",
    width: 1.5,      // Adjust for thicker or thinner bars
    height: 50,      // Adjust height as desired
    displayValue: false // Hide the text under the barcode
  });

  // Show the raw string for debugging (remove if not needed)
  document.getElementById("barcodeString").textContent = combinedString;
}
