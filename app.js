const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'asignaturas';

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true });

// Use connect method to connect to the Server
client.connect(function(err) {
	if (err){
		console.log("no se ha podido conectar")
	}
  
  console.log("Conectados");

  const db = client.db(dbName);

  const collection = db.collection('estudiantes');

  // collection.insertOne({
  // 	nombre: "Maria",
  // 	matematicas: 3,
  // 	ingles: 4,
  // 	programacion: 4,
  // 	lengua: 5
  // }, (err, result)=>{
  // 	if (err){
  // 		return console.log("error ingresando usuario")
  // 	}
  // 	return console.log(result.ops)
  // }) 

  // collection.findOne({nombre: "Maria"},(err, resultado)=>{
  // 	if (err){
  // 		return console.log("error")
  // 	}
  // 	if(!resultado){
  // 		return console.log("no se encontró el nombre")
  // 	}
  // 	console.log(resultado)
  // })

  // collection.find({matematicas: 3}).toArray((err, resultados) => {
  // 	if (err){
  // 		return console.log("no pudo buscar")
  // 	}
  // 	console.log(resultados)
  // })

  // collection.updateOne({nombre: "Maria"}, 
  // 	{ $set: 
  // 		{ ingles : 3,
  // 			programacion: 5
  // 		}}, 
  // 	(err, resultado)=>{
  // 		if (err){
  // 			return console.log("error en actualizar")
  // 		}
  // 		console.log (" actualizó correctamente" + resultado)
  // })

  //     collection.updateMany({matematicas: 5},
  //   	{$inc:
  //   		{matematicas: -1}},
  //   		(err, resultado)=>{
  //   			if (err){
  // 			return console.log("error en actualizar")
  // 		}
  // 		console.log (" actualizó correctamente" + resultado)
  // 	})

  // 	 collection.find({}).toArray((err, resultados) => {
  // 	if (err){
  // 		return console.log("no pudo buscar")
  // 	}
  // 	console.log(resultados)
  // })


  	// collection.insertMany([
  	// {
  	// nombre: "Jorge",
  	// matematicas: 3,
  	// ingles: 5,
  	// programacion: 2	
  	// 	},
  	// 			{
  	// nombre: "Teresa",
  	// matematicas: 3,
  	// ingles: 2,
  	// programacion: 5	
  	// 	},
  	// 	], (err, result)=>{
  	// 	if (err){
  	// 	return console.log("error ingresando usuario")
  	// 	}
  	// return console.log(result.ops)
  	// }) 

  


  	  	 collection.find({}).toArray((err, resultados) => {
  	if (err){
  		return console.log("no pudo buscar")
  	}
  	console.log(resultados)
  })

  	  	collection.deleteMany({matematicas:{$lt :4}}, (err, resultado)=>{
  		if(err){
  			return console.log("error al eliminar")
  		}
  		console.log("Se ha eliminado el elemento" + resultado)

  	}) 

  	  		collection.find({}).toArray((err, resultados) => {
  	if (err){
  		return console.log("no pudo buscar")
  	}
  	console.log(resultados)
  })

  client.close();
});