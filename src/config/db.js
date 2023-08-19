const {connect} = require('mongoose');

const URI = "mongodb+srv://blucanus:4hqx1xuvc3IxxpIb@cluster0.si3pbtb.mongodb.net/?retryWrites=true&w=majority"

//forma de conectar db
/* const connectDB = async () => {
    connect(URL)
        .then(()=> {
            console.log("Connet success to DB")
        })
        .catch(()=> {
            console.log("Error conecting to DB")
        })
}
connectDB */
//forma simplificada
connect(URI)
    .then(()=> {
        console.log("Connet success to DB")
    })
    .catch(()=> {
        console.log("Error conecting to DB")
    })