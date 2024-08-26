import mongoose from 'mongoose'

function initDB(){
    
    if(mongoose.connections[0].readyState){
        // // console.log('already connected')
        return
    }
    
    mongoose.connect("mongodb+srv://DreamGamezTech:CA5Cw77qdSKTmOT9@dreamgamez.h7vhhzz.mongodb.net/finaltesting",{
        useNewUrlParser : true,
        useUnifiedTopology:true
    })

    mongoose.connection.on('connected',()=>{
        // // console.log('connected sucessfully')
    })

    mongoose.connection.on('error',(err)=>{
        // // console.log('kuch gadbad hai yar aur vo ye hai ki =>',err)
    })

}

export default initDB;