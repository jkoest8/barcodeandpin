  <!-- Your custom script -->
  <script>
    function generateBarcode() {
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      if (!username || !password) {
        alert('Please enter both username and password!');
        return;
      }

      // The special keys:
      //  - \t = Tab
      //  - \n = Enter
      // If your environment needs something different, adjust here.
      const loginString = `${username}\t${password}\;

      // Create an SVG element to host the barcode
      const svg = document.createElement('svg');
      svg.id = 'barcode';

      // Clear any previous barcode and add the new SVG to our container
      const container = document.getElementById('barcode-container');
      container.innerHTML = '';  // clear previous
      container.appendChild(svg);

      // Generate the barcode
      JsBarcode('#barcode', loginString, {
        format: 'code128', // Code128 supports alpha-numerics and special chars
        displayValue: false, // We usually hide the text so password isn't visible 
        lineColor: '#000000',
        width: 2,
        height: 100,
        margin: 10
      });

      // Optionally, scroll down to show the newly generated barcode
      // window.scrollTo(0, document.body.scrollHeight);
    }
  </script>
</body>
</html>
