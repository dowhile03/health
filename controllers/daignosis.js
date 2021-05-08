const Datastore =  require('nedb')
const fetch = require('node-fetch')
const db = new Datastore({filename : './models/daignosis.db'})
db.loadDatabase(err => {
    console.log(err);
})    



exports.getData = async (req,res,next) => {
    const firstName = req.body.first_name;
    const lastName = req.body.last_name;
    const age = req.body.age;
    const bodyTemp = req.body.bodyTemp;
    const oxyLevel =  req.body.oxyLevel;
    const headache = req.body.headache;
    const cough = req.body.cough;
    const taste = req.body.taste;
    const smell = req.body.smell;
    const email = req.body.email;
    const myObj = {firstName, lastName, age, bodyTemp, oxyLevel, headache, cough, taste, smell, email}
     db.insert(myObj,(err,result) => {
        if(err) {
            console.log(err);
        }
        console.log(result);
    })
   res.redirect('/showdata?' + 'firstName=' + firstName + '&lastName=' + lastName + '&age=' + age + '&bodyTemp=' + bodyTemp + '&oxyLevel=' + oxyLevel + '&headache=' + headache + '&cough=' + cough + '&taste=' + taste + '&smell=' + smell + '&email=' + email)
}

exports.showdata = (req,res) => {
    let test;
    console.log(req.query);
    const tempMessage = bodyTemperature(req.query.bodyTemp);
    const coughmsg = coughReason(req.query.cough);
    const smellmsg = smellReason(req.query.smell);
    const headmsg = headacheReason(req.query.head);
    const tastemsg = tasteReason(req.query.taste)
    const oxygenmsg = oxygenMeter(req.query.oxyLevel)
    const date = new Date().toLocaleDateString('en-US');
    if(tempMessage >= 99) {
        test = "Yes";
    }
    else if(coughmsg == "Yes" || smellmsg == "Yes" || tastemsg == "Yes") {
        test = "Yes";
    }
    else {
        test = "Right now take care if you do not feel well go for a test";
    }
    console.log(date);
    console.log(tempMessage)
    res.render('showdata',{
        myObj : req.query,
        tempMessage : tempMessage,
        coughmsg : coughmsg,
        smellmsg: smellmsg,
        tastemsg : tastemsg,
        headmsg : headmsg,
        oxygenmsg :oxygenmsg,
        date : date,
        test : test
    })
}

function bodyTemperature(temp) {
    let message ;
    if(temp < 98) {
        message = "Your body temperature is normal"
    }
    if(temp >= 98 && temp < 99) {
        message = "Your body temperature is slightly above normal temperature take rest if possible you can take paracetamol tablet of 500 mg, stay hydrated, if possible stay away from your family members";
    }
    else if(temp >= 99 && temp < 101) {
        message = "Consult a doctor, if not possible take paracetamol tablet right now and take as much rest as you can, stay hydrated, if possible stay away from your family members, give yourself a sponge bath with lukewarm water, wear light pajamas or clothing."
    }
    else if(temp  > 101) {
        message = "Consult a doctor, if not possible take paracetamol with nimesulide and do not eat anything spicy or oily, stay hydrated, if possible stay away from famil members, keep clean cloth soaked in cold water on head"
    }
    return message
}

function coughReason(cough) {
    let coughmsg ;
    if (cough = "Yes") {
        coughmsg = "Take to 2 table spoon of honey with lemon in lukewarm water avoid eating and drinking cold food items"
    }
    else if (cough = "No") {
        coughmsg = "Take all neccessary precautions and manage your diet properly"
    }
    return coughmsg;
}

function smellReason(smell) {
    let smellmsg;
    if(smell = "Yes") {
        smellmsg = "Your smell is totally fine do not worry"
    }
    else if(smell = "No") {
        smellmsg = "Get yourself tested for corona and isolate yourself"
    }
    return smellmsg;
}

function tasteReason(smell) {
    let tastemsg;
    if(taste = "Yes") {
        tastemsg = "Your taste is totally fine do not worry"
    }
    else if(taste = "No") {
        tastemsg = "Get yourself tested for corona and isolate yourself"
    }
    return tastemsg;
}

function headacheReason(head) {
    let headmsg;
    if(head = "Yes") {
        headmsg = "Stay hydrated, take some magnesium if not eat almonds"
    }
    else if(head = "No") {
        headmsg = "No problem"
    }
    return headmsg;
}

function oxygenMeter(oxygen) {
    let oxyMsg ;
    if(oxygen < 85 ) {
        oxyMsg = "Consult a doctor as soon as possible and try to arrange oxygen bed"
    }
    else if(oxygen >= 85 && oxygen < 90) {
        oxyMsg = "Try to arrange oxygen concentrator, keep in touch with doctor, drink as much water as you can"
    }
    else if(oxygen >= 90 && oxygen < 95) {
        oxyMsg = "Drink more water and check your oxygen continously if it drops continously consult a doctor"
    }
    else if(oxygen >= 95) {
        oxyMsg = "Your oxygen level is fine but keep checking to avoid any serious problem"
    }
    return oxyMsg
}