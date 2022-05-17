let foydalanuvchi = [
    ["Odil", "Olimov", 18, "Yaypan"],
    ["muhammadjon", "akbarov", 20, "konizar"],
    ["murodxon", "isroilov", 15, "qulibek"],
    ["muhammadjon", "to'xtasinov", 17, "yaypan"]
]
console.log(foydalanuvchi[1][3])
console.log(foydalanuvchi[2].slice(0, 2).join(" ").toLocaleUpperCase())

document.write("<table><tr><th colspan='5'>Foydalanuvchilar ro'yxati</th></tr><tr><th>№</th><th>Ism</th><th>Familiya</th><th>Yoshi</th><th>Manzili</th></tr>")
for (let index = 0; index < foydalanuvchi.length; index++) {
    document.write(`<tr><td>${index + 1}</td>`)
    for (let index2 = 0; index2 < foydalanuvchi[index].length; index2++) {
        document.write(`<td>${foydalanuvchi[index][index2]}</td>`)
    }
    document.write("</tr>")
}
document.write("</table>")


