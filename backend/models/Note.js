const mongoose=require('mongoose');
const {Schema}=mongoose;

const NoteSchema=new Schema({
      user:{
         type:mongoose.Schema.Types.ObjectId,
         ref:'user'
      },
     title:{
         type:String,
         required:true
     },
     
     description:{
         type:String,
         required:true
     },
     link:{
         type:String,
         default:"www.google.com"
     },
     genre:{
         type:String,
         default:"General"
     },
     platform:{
         type:String,
         default:"General"
     },
     date:{
         type:Date,
         default:Date.now
     }
});                                 
module.exports=mongoose.model('note',NoteSchema);
