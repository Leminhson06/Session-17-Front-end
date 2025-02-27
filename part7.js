function formatCurrencyVND(amount) {
    return amount.toLocaleString('vi-VN') + " VNĐ";
}
const userInput = prompt("Nhập số tiền (VNĐ):");
const amount = parseInt(userInput);
if (!isNaN(amount)) {
    console.log(formatCurrencyVND(amount));
    alert(formatCurrencyVND(amount));
} else {
    alert("Vui lòng nhập một số hợp lệ!");
}