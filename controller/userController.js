exports.data = async(req, res) => {
    let returnObj = {
        "name" : "Jagmeet",
        "employed" : true
    }
    return res.status(200).send({"message" : "Ok", "response" : returnObj});
}


exports.signUp = async(req, res) => {

}

exports.login = async(req, res) => {
    
}

exports.update = async(req, res) => {
    
}

exports.patch = async(req, res) => {
    
}

exports.delete = async(req, res) => {
    
}