import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "../temp/table.js";
export function isiTablePresensiMahasiswa(results) {
  results.forEach(isiRow);
}
function isiRow(value) {
  let content = isiTabel
    .replace("#NAMA#", value.biodata.nama)
    .replace("#NPM#", value.biodata.npm)
    .replace("#KELAS#", value.biodata.namakelas.namakelas ? value.biodata.namakelas.namakelas : "#KELAS")
    .replace("#JURUSAN#", value.biodata.jurusan.namaprodi ? value.biodata.jurusan.namaprodi : "#JURUSAN")
    .replace("#STATUS#", value.kehadiran == "masuk" ? value.kehadiran : "menghilang")
    .replace("#MATKUL#", value.matakuliah.namamatkul ? value.matakuliah.namamatkul : "#MATKUL")
    .replace("#DOSEN#", value.matakuliah.dosenpengajar.namadosen ? value.matakuliah.dosenpengajar.namadosen : "#DOSEN")
    .replace("#HARIKULIAH#", value.matakuliah.jadwalkuliah.hari ? value.matakuliah.jadwalkuliah.hari : "#HARIKULIAH")
    .replace("#JAMMASUK#", value.matakuliah.jadwalkuliah.jammasuk ? value.matakuliah.jadwalkuliah.jammasuk : "#JAMMASUK")
    .replace("#JAMKELUAR#", value.matakuliah.jadwalkuliah.jamkeluar ? value.matakuliah.jadwalkuliah.jamkeluar : "#JAMMKELUAR")
    .replace("#WARNA#", getRandomColor())
    .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner("iniTabel", content);
}
