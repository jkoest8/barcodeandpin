function generateBarcode() {
  // Get values from the two input fields
  const username = document.getElementById("username").value.trim();
  const partialPassword = document.getElementById("partialPassword").value.trim();

  if (!username || !partialPassword) {
    alert("Please enter both a username and partial password!");
    return;
  }

  // Build the string that the barcode will contain
  //   "\t" = Tab key
  // (No "\n" so it won't automatically press Enter)
  const loginString = `${username}\t${partialPassword}`;

  // Clear anything that was in the container before
  const container = document.getElementById("barcode-container");
  container.innerHTML = "";

  // Create an <svg id="barcode"> element dynamically
  const svg = document.createElement("svg");
  svg.id = "barcode";

  // Append the SVG to our container
  container.appendChild(svg);

  // Now generate the Code128 barcode inside that <svg>
  JsBarcode("#barcode", loginString, {
    format: "code128",
    displayValue: false,  // hide the text
    width: 2,
    height: 100,
    margin: 10
  });
}

