function generateBarcode() {
    var emBarcode = document.getElementById('emBarcode').value;
    JsBarcode("#barcode", emBarcode, {
        format: "CODE128",
        lineColor: "#000",
        width: 1, // Smaller width
        height: 40, // Adjust height as needed
        displayValue: false
    });
    document.getElementById('barcodeNumber').textContent = emBarcode;
}

