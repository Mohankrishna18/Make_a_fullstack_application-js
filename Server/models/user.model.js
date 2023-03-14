var mongoose = require('mongoose')

var User = new mongoose.Schema(
    {
        rusername:{type: String, required: true},
        remail:{type:String,required:true},
        rpass1:{type:String,required:true},
        rpass2:{type:String,required:true}
        
    },
    {collection:'register-data'}
)

var model = mongoose.model('Register-data',User)

module.exports = model




