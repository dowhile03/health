const Datastore =  require('nedb')
const fetch = require('node-fetch')
const db = new Datastore({filename : './models/daignosis.db'})
db.loadDatabase(err => {
    console.log(err);
})    



exports.getData = async (req,res,next) => {
    const firstName = req.body.first_name;
    const lastName = req.body.last_name;
    const bodyTemp = req.body.bodyTemp;
    const oxyLevel =  req.body.oxyLevel;
    const headache = req.body.headache;
    const cough = req.body.cough;
    const taste = req.body.taste;
    const smell = req.body.smell;
    const email = req.body.email;
    const myObj = {firstName, lastName, bodyTemp, oxyLevel, headache, cough, taste, smell, email}
     db.insert(myObj,(err,result) => {
        if(err) {
            console.log(err);
        }
        console.log(result);
    })
   res.redirect('/showdata?' + 'firstName=' + firstName + '&lastName=' + lastName + '&bodyTemp=' + bodyTemp + '&oxyLevel=' + oxyLevel + '&headache=' + headache + '&cough=' + cough + '&taste=' + taste + '&smell=' + smell + '&email=' + email)
}

exports.showdata = (req,res) => {
    console.log(req.query);
    const tempMessage = bodyTemperature(req.query.bodyTemp);
    console.log(tempMessage)
    res.render('showdata',{
        myObj : req.query,
        tempMessage : tempMessage
    })
}

function bodyTemperature(temp) {
    let message ;
    if(temp > 98 && temp < 99) {
        message = "Your body temperature is slightly above normal temperature take rest if possible you can take paracetamol tablet of 500 mg, stay hydrated, if possible stay away from your family members";
    }
    else if(temp >= 99 && temp < 101) {
        message = "Consult a doctor, if not possible take paracetamol tablet right now and take as much rest as you can, stay hydrated, if possible stay away from your family members, give yourself a sponge bath with lukewarm water, wear light pajamas or clothing."
    }
    else if(temp  > 101) {
        message = "Consult a doctor, if not possible"
    }
    return message
}