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
      "Copy and paste to Libre Office \n" +
      "(Скопируй и вставь в Libre Office):";
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
      "Copy and paste to Libre Office \n" +
      "(Скопируй и вставь в Libre Office):";
    window.prompt(message, BARCODE);
  } catch (exception) {
    console.log(exception);
    alert(exception);
  }
}

main();

async function gpi_downloadAsExcel() {
  try {
    const BARCODE = document.getElementById("gpi_input").value;
    const LIBRE_BARCODE_128 = getLibreBarcode128Text(BARCODE);

    const WORKBOOK = new ExcelJS.Workbook();
    const SHEET = WORKBOOK.addWorksheet("libre-barcode");

    let row = 0;

    // new row

    row += 1;
    SHEET.addRow(["Font Family", "Text", "View"]);

    SHEET.getRow(row).alignment = {
      vertical: "middle",
      horizontal: "center",
    };

    ["A", "B", "C"].forEach((letter) => {
      SHEET.getCell(`${letter}${row}`).border = {
        top: { style: "thin" },
        left: { style: "thin" },
        bottom: { style: "thin" },
        right: { style: "thin" },
      };
    });

    // new row

    row += 1;
    SHEET.addRow(["Libre Barcode 128", LIBRE_BARCODE_128, LIBRE_BARCODE_128]);

    SHEET.getCell(`C${row}`).font = {
      name: "Libre Barcode 128",
      size: 36,
    };

    SHEET.getCell(`C${row}`).alignment = {
      vertical: "middle",
      horizontal: "center",
    };

    SHEET.getRow(row).height = 40;

    ["A", "B", "C"].forEach((letter) => {
      SHEET.getCell(`${letter}${row}`).border = {
        top: { style: "thin" },
        left: { style: "thin" },
        bottom: { style: "thin" },
        right: { style: "thin" },
      };
    });

    // new row

    row += 1;
    SHEET.addRow([
      "Libre Barcode 128 Text",
      LIBRE_BARCODE_128,
      LIBRE_BARCODE_128,
    ]);

    SHEET.getCell(`C${row}`).font = {
      name: "Libre Barcode 128 Text",
      size: 36,
    };

    SHEET.getCell(`C${row}`).alignment = {
      vertical: "middle",
      horizontal: "center",
    };

    SHEET.getRow(row).height = 50;
    ["A", "B", "C"].forEach((letter) => {
      SHEET.getCell(`${letter}${row}`).border = {
        top: { style: "thin" },
        left: { style: "thin" },
        bottom: { style: "thin" },
        right: { style: "thin" },
      };
    });

    // new row

    row += 1;
    SHEET.addRow(["Libre Barcode EAN13 Text", BARCODE, BARCODE]);

    SHEET.getCell(`C${row}`).font = {
      name: "Libre Barcode EAN13 Text",
      size: 72,
    };

    SHEET.getCell(`C${row}`).alignment = {
      vertical: "middle",
      horizontal: "center",
    };

    SHEET.getRow(row).height = 100;
    ["A", "B", "C"].forEach((letter) => {
      SHEET.getCell(`${letter}${row}`).border = {
        top: { style: "thin" },
        left: { style: "thin" },
        bottom: { style: "thin" },
        right: { style: "thin" },
      };
    });

    //

    SHEET.getColumn("A").width = 30;
    SHEET.getColumn("B").width = 20;
    SHEET.getColumn("C").width = 40;

    const BLOB = new Blob([await WORKBOOK.xlsx.writeBuffer()]);
    const FILE_NAME = `${gpi_getFormatedDate()}_Libre_Barcode_in_Libre_Office_Calc.xlsx`;
    gpi_downloadFileByBlob(FILE_NAME, BLOB);
  } catch (exception) {
    console.log(exception);
    alert(exception);
  }
}

function gpi_downloadFileByBlob(filename, blob) {
  const element = document.createElement("a");
  const file = blob;
  element.href = URL.createObjectURL(file);
  element.download = filename;
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

function gpi_getFormatedDate(d = new Date(), str = "YYYY-MM-DD_hh:mm") {
  const YYYY = d.getFullYear();

  const M = d.getMonth() + 1;
  const MM = `${M}`.padStart(2, "0");

  const D = d.getDate();
  const DD = `${D}`.padStart(2, "0");

  const h = d.getHours();
  const hh = `${h}`.padStart(2, "0");

  const m = d.getMinutes();
  const mm = `${m}`.padStart(2, "0");

  const s = d.getSeconds();
  const ss = `${s}`.padStart(2, "0");

  return str
    .replace(/YYYY/g, YYYY)
    .replace(/MM/g, MM)
    .replace(/DD/g, DD)
    .replace(/hh/g, hh)
    .replace(/mm/g, mm)
    .replace(/ss/g, ss)
    .replace(/M/g, M)
    .replace(/D/g, D)
    .replace(/h/g, h)
    .replace(/m/g, m)
    .replace(/s/g, s);
}
