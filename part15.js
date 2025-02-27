let r = prompt("Nhap ban kinh hinh tron: ");
let theTichHinhCau = 4 / 3 * Math.PI * r * r * r;
let dienTichHinhCau = 4 * Math.PI * r * r;
let chuViLonNhatHinhCau = 2 * Math.PI * r;
document.write(`The tich hinh cau la: ${theTichHinhCau}<br>`);
document.write(`Dien tich hinh cau la: ${dienTichHinhCau}<br>`);
document.write(`Chu vi lon nhat hinh cau la: ${chuViLonNhatHinhCau}`);