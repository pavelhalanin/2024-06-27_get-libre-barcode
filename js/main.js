function main() {
  try {
    setBarcodes();
  } catch (exception) {
    console.log(exception);
    alert(exception);
  }
}

function setBarcodes() {
  try {
    const BARCODE = document.getElementById("gpi_input").value;
    const LIBRE_BARCODE_128 = getLibreBarcode128Text(BARCODE);

    document.getElementById("gpi_libre_barcode_128_input").innerHTML = `
            <button class="btn" onclick="gpi_copy128()">
                <pre>${LIBRE_BARCODE_128}</pre>
            </button>`;

    document.getElementById("gpi_libre_barcode_128_output").innerHTML = `
            <button class="btn" onclick="gpi_copy128()">
                <pre style="font-family: 'Libre Barcode 128', system-ui !important; font-size: 3em !important;">${LIBRE_BARCODE_128}</pre>
            </button>`;

    document.getElementById("gpi_libre_barcode_128_text_input").innerHTML = `
            <button class="btn" onclick="gpi_copy128()">
                <pre>${LIBRE_BARCODE_128}</pre>
            </button>`;

    document.getElementById("gpi_libre_barcode_128_text_output").innerHTML = `
            <button class="btn" onclick="gpi_copy128()">
                <pre style="font-family: 'Libre Barcode 128 Text', system-ui !important; font-size: 3em !important;">${LIBRE_BARCODE_128}</pre>
            </button>`;

    document.getElementById("gpi_libre_barcode_ean13_text_input").innerHTML = `
            <button class="btn" onclick="gpi_copy13()">
                <pre>${BARCODE}</pre>
            </button>`;

    document.getElementById("gpi_libre_barcode_ean13_text_output").innerHTML = `
            <button class="btn" onclick="gpi_copy13()">
                <pre style="font-family: 'Libre Barcode EAN13 Text', system-ui !important; font-size: 6em !important;">${BARCODE}</pre>
            </button>`;
  } catch (exception) {
    console.log(exception);
    alert(exception);
  }
}

function gpi_copy128() {
  try {
    const BARCODE = document.getElementById("gpi_input").value;
    const LIBRE_BARCODE_128 = getLibreBarcode128Text(BARCODE);
    const message =
      'Copy and paste to Libre Office \n' +
      '(Скопируй и вставь в Libre Office):';
    window.prompt(message, LIBRE_BARCODE_128);
  } catch (exception) {
    console.log(exception);
    alert(exception);
  }
}

function gpi_copy13() {
  try {
    const BARCODE = document.getElementById("gpi_input").value;
    const message =
      'Copy and paste to Libre Office \n' +
      '(Скопируй и вставь в Libre Office):';
    window.prompt(message, BARCODE);
  } catch (exception) {
    console.log(exception);
    alert(exception);
  }
}

main();
