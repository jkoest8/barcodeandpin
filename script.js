function generateBarcode() {
  // Read user inputs
  const username = document.getElementById('username').value.trim();
  const partialPassword = document.getElementById('partialPassword').value.trim();

  if (!username || !partialPassword) {
    alert("Please enter both a username and a partial password!");
    return;
  }

  // Combine username and partial password, with a tab (\t) between them
  // Example: "jdoe\tMySecretPassword"
  // Note: We do NOT add "\n" (Enter key) so it doesn't auto-submit.
  const loginString = `${username}\t${partialPassword}`;

  // Clear any existing barcode
  const container = document.getElementById('barcode-container');
  container.innerHTML = "";

  // Create an SVG element for JsBarcode
  const svg = document.createElement('svg');
  svg.id = "barcode";
  container.appendChild(svg);

  // Generate the barcode
  JsBarcode("#barcode", loginString, {
    format: "code128",
    displayValue: false,  // Hide the text to avoid revealing your partial password
    width: 2,
    height: 100,
    margin: 10
  });
}
