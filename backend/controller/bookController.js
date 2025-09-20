const bookModel = require("../models/bookModel");

const getbookController =async (req,res)=>{
  try{
   const book = await bookModel.find({})
   if(!book){
    res.status(404).send({
      success:false,
      message:"book not available"
    });
   }
   res.status(200).send({
    success:true,
    message:"book found successfully",
    totalcount:book.length,
    book,
   })
  }catch(error){
    console.log(error)
    res.status(500).send({
      success:false,
      message:"error in book API"
    })
  }
};

module.exports ={getbookController};