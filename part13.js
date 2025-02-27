let money = +prompt("Nhap so tien: ");
let month = +prompt("Nhap so thang gui: ");
let rate = +prompt("Nhap lai suat: ");
let total = money;
for (let i = 0; i < month; i++) {
    total += total * rate / 100;
}
document.write(`So tien nhan duoc sau ${month} thang la: ${total}`);