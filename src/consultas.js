//Buscar todos los objetos en la colleción

db.inventory.find( {} )

//Buscar un documento donde el campo es el especificado

db.inventory.find( { status: "D" } )

//Devuelve todos los documentos de la colección donde el campo sea, por ejemplo en esta colección, "A" o "D" --IN--

db.inventory.find( { status: { $in: [ "A", "D" ] } } ).

//Método find con AND implícito, devuelve los documentos de la coleccion donde el campo sea igual a lo que se pide

db.inventory.find( { status: "A", qty: { $lt: 30 } } )

//Con AND explícito sería

db.inventory.find( { $and: [{status: "A",  qty: { $lt: 30 } } ] } )

//Devuelve documentos en la colección que tengan alguno de los campos especificados --OR--

db.inventory.find( { $or: [ { status: "A" }, { qty: { $lt: 30 } } ] } )

//Devuelve documentos en la colección donde el valor del campo sea igual a lo que se pide

db.inventory.find ({qty: {$eq: 40}})

//Devuelve documentos en la colección donde el valor del campo sea mayor o igual a lo que se pide

db.inventory.find ({qty: {$gte: 67}})

//Algunos ejercicios extra usando otros valores para las instrucciones, los resultados de estos se encuentran en un pdf en la carpeta doc

//Otro --AND-- explicito que devuelve documentos en la colección donde el status sea "B" y qty sea menor de 80 

db.inventory.find( { $and: [{status: "B",  qty: { $lt: 80 } } ] } )

//Devuelve documentos en la colección donde su status sea "C" Y, o qty sea mayor de 50 e item comience por la letra c

db.inventory.find({ status: "C", $or: [ { qty: { $gt: 50 } }, { item: /^c/ } ]} )

//Devuelve documentos en la colección donde status no sea "A" o qty sea igual a 40

db.inventory.find( { $nor: [ { status: "A" }, { qty: { $eq: 40 } } ] } )

//Devuelve documentos en la colección donde qty no sea 5 o 15

db.inventory.find( { qty: { $nin: [ 5, 15 ] } } )







