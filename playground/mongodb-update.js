const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err,client) =>{
  if (err) {
       return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db=client.db('TodoApp');

  db.collection('Todos').findOneAndUpdate({
     _id: new ObjectID('5c175dbf3a4219c8d68ef675')
  }, {
      $set:{
          text:'Something to do'
      }
  },{
      returnOriginal:false
  }).then((result)=> {
      console.log(result);
  });
  

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5c1758134fba1c0e902eac4f')
 }, {
     $set:{
         name:'Surya'
     },
     $inc:{
         age:1
     }
 },{
     returnOriginal:false
 }).then((result)=> {
     console.log(result);
 });


//client.close()
});