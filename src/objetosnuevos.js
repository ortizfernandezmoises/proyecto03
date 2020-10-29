//Introduzco documentos por segunda vez a la colección inventory
db.inventory.insertMany([
    { item: "pen", qty: 60, size: { h: 9, w: 6, uom: "cm" }, status: "C" },
    { item: "usb", qty: 4, size: { h: 2, w: 1.5, uom: "in" }, status: "B" },
    { item: "carton", qty: 600, size: { h: 20, w: 11, uom: "cm" }, status: "B" },
    { item: "pincel", qty: 90, size: { h: 7, w: 8, uom: "cm" }, status: "C" },
    { item: "cuerda", qty: 40, size: { h: 1, w: 10, uom: "cm" }, status: "C" },
]);