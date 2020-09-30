const obj = {
    "01" : "北海道",
    "02" : "青森県",
    "03" : "岩手県"
}

console.log(
    Object.keys(obj).find(key => key === "02")
);

console.log(obj["02"]);

if (!Object.keys(obj).find(key => key === "04")){
    console.log("該当なし")
}

