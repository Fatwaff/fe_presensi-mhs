import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabelPresensi, isiTabelMahasiswa, isiTabelKelas, isiTabelProdi, isiTabelMatkul, isiTabelDosen, isiTabelRuangan } from "../temp/table.js";
export function isiTablePresensi(results) {
  results.forEach(isiRowPresensi);
}
export function isiTableMahasiswa(results) {
  results.forEach(isiRowMahasiswa);
}
export function isiTableKelas(results) {
  results.forEach(isiRowKelas);
}
export function isiTableProdi(results) {
  results.forEach(isiRowProdi);
}
export function isiTableMatkul(results) {
  results.forEach(isiRowMatkul);
}
export function isiTableDosen(results) {
  results.forEach(isiRowDosen);
}
export function isiTableRuangan(results) {
  results.forEach(isiRowRuangan);
}
function isiRowPresensi(value) {
  let content = isiTabelPresensi
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
  addInner("iniTabelPresensi", content);
}
function isiRowMahasiswa(value) {
  let content = isiTabelMahasiswa
    .replace("#NAMA#", value.nama)
    .replace("#NPM#", value.npm)
    .replace("#KELAS#", value.namakelas.namakelas ? value.namakelas.namakelas : "#KELAS")
    .replace("#JURUSAN#", value.jurusan.namaprodi ? value.jurusan.namaprodi : "#JURUSAN")
    .replace("#FAKULTAS#", value.jurusan.fakultas ? value.jurusan.fakultas : "#FAKULTAS")
    .replace("#WARNA#", getRandomColor())
    .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner("iniTabelMahasiswa", content);
}
function isiRowKelas(value) {
  let content = isiTabelKelas
    .replace("#KODE#", value.kodekelas)
    .replace("#NAMA#", value.namakelas)
    .replace("#KAPASITAS#", value.kapasitas ? value.kapasitas : "#kapasitas")
    .replace("#WARNA#", getRandomColor())
    .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner("iniTabelKelas", content);
}
function isiRowProdi(value) {
  let content = isiTabelProdi
    .replace("#NAMAPRODI#", value.namaprodi)
    .replace("#KETUAPRODI#", value.ketuaprodi)
    .replace("#FAKULTAS#", value.fakultas)
    .replace("#KAPASITAS#", value.kapasitas ? value.kapasitas : "#kapasitas")
    .replace("#WARNA#", getRandomColor())
    .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner("iniTabelProdi", content);
}
function isiRowMatkul(value) {
  let content = isiTabelMatkul
    .replace("#NAMA#", value.namamatkul)
    .replace("#KODE#", value.kodematkul)
    .replace("#SKS#", value.sks ? value.sks : "#SKS")
    .replace("#DOSEN#", value.dosenpengajar.namadosen ? value.dosenpengajar.namadosen : "#DOSEN")
    .replace("#HARIKULIAH#", value.jadwalkuliah.hari ? value.jadwalkuliah.hari : "#HARIKULIAH")
    .replace("#JAMMASUK#", value.jadwalkuliah.jammasuk ? value.jadwalkuliah.jammasuk : "#JAMMASUK")
    .replace("#JAMKELUAR#", value.jadwalkuliah.jamkeluar ? value.jadwalkuliah.jamkeluar : "#JAMMKELUAR")
    .replace("#RUANGAN#", value.ruangkuliah.namaruang ? value.ruangkuliah.namaruang : "RUANGAN")
    .replace("#WARNA#", getRandomColor())
    .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner("iniTabelMatkul", content);
}
function isiRowDosen(value) {
  let content = isiTabelDosen
    .replace("#NAMA#", value.namadosen)
    .replace("#NIK#", value.nik)
    .replace("#BIDANG#", value.bidangstudi)
    .replace("#WARNA#", getRandomColor())
    .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner("iniTabelDosen", content);
}
function isiRowRuangan(value) {
  let content = isiTabelRuangan
    .replace("#NAMARUANG#", value.namaruang)
    .replace("#KAPASITAS#", value.kapasitas ? value.kapasitas : "#kapasitas")
    .replace("#GEDUNG#", value.gedung)
    .replace("#LANTAI#", value.lantai)
    .replace("#WARNA#", getRandomColor())
    .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner("iniTabelRuangan", content);
}
