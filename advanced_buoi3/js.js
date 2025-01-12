function checkIceCreamScoops(scoop) {
    if (scoop >= 5) {
        console.log("Ăn nhanh lên, kem sắp tan chảy!");
    } else if (scoop === 3) {
        console.log("Kem sắp hết!");
    } else if (scoop === 2) {
        console.log("Lần một!");
    } else if (scoop === 1) {
        console.log("Lần hai!");
    } else if (scoop === 0) {
        console.log("Hết rồi!");
    } else {
        console.log("Vẫn còn nhiều kem, hãy đến lấy thêm!");
    }
}
checkIceCreamScoops(3);

let text = ""
for (let i=1;i<=100;i++)
{
    text = text + 'thay huy xau trai\n'
    
}
document.querySelector('body').innerHTML = text
