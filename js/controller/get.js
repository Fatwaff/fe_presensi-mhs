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
    .replace("#KELAS#", value.biodata.nama_kelas.nama_kelas)
    .replace("#JURUSAN#", value.biodata.jurusan.nama_prodi)
    .replace("#STATUS#", value.kehadiran == "masuk" ? value.kehadiran : "menghilang")
    .replace("#MATKUL#", value.mata_kuliah.nama_matkul)
    .replace("#DOSEN#", value.mata_kuliah.dosen_pengajar.nama_dosen)
    .replace("#HARIKULIAH#", value.mata_kuliah.jadwal_kuliah.hari ? value.mata_kuliah.jadwal_kuliah.hari : "#HARIKULIAH")
    .replace("#JAMMASUK#", value.mata_kuliah.jadwalkuliah.hari ? value.mata_kuliah.jadwal_kuliah.jam_masuk : "#JAMMASUK")
    .replace("#JAMKELUAR#", value.mata_kuliah.jadwalkuliah.hari ? value.mata_kuliah.jadwal_kuliah.jam_keluar : "#JAMMKELUAR")
    .replace("#RUANGAN#", value.mata_kuliah.ruang_kuliah.nama_ruang ? value.mata_kuliah.ruang_kuliah.nama_ruang : "#RUANGAN")
    .replace("#WARNA#", getRandomColor())
    .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner("iniTabel", content);
}
