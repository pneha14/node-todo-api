const {MongoClient,ObjectID}=require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err,client) =>{
  if (err) {
       return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db=client.db('TodoApp');

  //delete many
/*db.collection('Todos').deleteMany({text:'Something to do'}).then((result)=>{
      console.log(result);
  });*/

  //delete one
  db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((result)=>{
      console.log(result);
  });
   















});