import { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import getLibreBarcode128Text from "../packages/getLibreBarcode128Text";

export default function HomePage() {
  const [inputBarcode, setInputBarcode] = useState("900413140919000");
  const [outputLibreBarcode128, setOutputLibreBarcode128] = useState("");

  useEffect(() => {
    const libreBarcode128 = getLibreBarcode128Text(inputBarcode);
    setOutputLibreBarcode128(libreBarcode128);
  }, []);

  function onChangeInputBarcode(barcode) {
    const libreBarcode128 = getLibreBarcode128Text(barcode);
    setInputBarcode(barcode);
    setOutputLibreBarcode128(libreBarcode128);
  }

  return (
    <div className={styles.wrapper}>
      <h1>Шрифты Libre Barcode</h1>

      <p>Введите штрихкод:</p>
      <div>
        <input
          className={styles.input}
          type="text"
          value={inputBarcode}
          onChange={(event) => onChangeInputBarcode(event.target.value)}
        />
      </div>

      <div className={styles.table__block}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Шрифт</th>
              <th>
                Что писать в<br /> Libre Office <br /> Writter
              </th>
              <th>
                Что получится в<br /> Libre Office <br /> Writter
              </th>
              <th>
                Скачать
                <br />
                установить
                <br />
                шрифт *.ttf
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Libre Barcode 128</td>
              <td className={styles.output}>{outputLibreBarcode128}</td>
              <td className={styles.output__libre_barcode_128}>
                <div className={styles.font__block}>
                  {outputLibreBarcode128}
                </div>
              </td>
              <td>
                <a
                  className={styles.td__a}
                  href="https://fonts.google.com/specimen/Libre+Barcode+128"
                >
                  Скачать
                </a>
              </td>
            </tr>
            <tr>
              <td>Libre Barcode 128 Text</td>
              <td className={styles.output}>{outputLibreBarcode128}</td>
              <td className={styles.output__libre_barcode_128_text}>
                <div className={styles.font__block}>
                  {outputLibreBarcode128}
                </div>
              </td>
              <td>
                <a
                  className={styles.td__a}
                  href="https://fonts.google.com/specimen/Libre+Barcode+128+Text"
                >
                  Скачать
                </a>
              </td>
            </tr>
            <tr>
              <td>Libre Barcode EAN39 Text</td>
              <td className={styles.output}>{inputBarcode}</td>
              <td className={styles.output_libre_barcode_ean39_text}>
                <div className={styles.font__block}>{inputBarcode}</div>
              </td>
              <td>
                <a
                  className={styles.td__a}
                  href="https://fonts.google.com/specimen/Libre+Barcode+EAN13+Text"
                >
                  Скачать
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        С сайта нужно скачать шрифт и установить в систему. Скачается архив. Там
        будет файл *.ttf. Его нужно будет запустить
      </p>
    </div>
  );
}
