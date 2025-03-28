function generateBarcode() {
  // Grab inputs
  const username = document.getElementById('username').value.trim();
  const partialPassword = document.getElementById('partialPassword').value.trim();

  if (!username || !partialPassword) {
    alert("Please enter both a username and a partial password!");
    return;
  }

  // Combine them with a Tab (\t) in between, but NO Enter (\n).
  // This means scanning the barcode will type username, press Tab,
  // and type the partial password, but won't auto-login.
  const loginString = `${username}\t${partialPassword}`;

  // Clear previous barcode (if any)
  const container = document.getElementById('barcode-container');
  container.innerHTML = "";

  // Create an SVG element to display the barcode
  const svg = document.createElement('svg');
  svg.id = "barcode";
  container.appendChild(svg);

  // Generate the barcode
  JsBarcode("#barcode", loginString, {
    format: "code128",
    displayValue: false, // Hide text to avoid showing the partial password
    width: 2,
    height: 100,
    margin: 10
  });
}
