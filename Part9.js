let b = +prompt("Nhap so nguyen b: ");
let c = +prompt("Nhap so nguyen c: ");
let a = +prompt("Nhap so nguyen a: ");
if (a == 0) {
    console.log("Phuong trinh vo nghiem");
} else {
    console.log(`Phuong trinh co nghiem kep hoac phuong trinh co 2 nghiem phan biet`);
    let delta = b * b - 4 * a * c;
    if (delta < 0) {
        console.log("Phuong trinh vo nghiem");
    } else if (delta == 0) {
        let x = -b / (2 * a);
        console.log(`Phuong trinh co nghiem kep x = ${x}`);
    } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log(`Phuong trinh co 2 nghiem phan biet x1 = ${x1} va x2 = ${x2}`);
    }
}

