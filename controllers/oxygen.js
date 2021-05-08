const Datastore = require("nedb");
const db = new Datastore({ filename: "./models/findOxygen.db" });

db.loadDatabase((err) => {
  console.log(err);
});

exports.getDetails = (req, res) => {
  const patientName = req.body.patient_Name;
  const age = req.body.age;
  const city = req.body.city;
  const state = req.body.state;
  const hospital = req.body.hospital;
  const bloodGroup = req.body.blood_group;
  const number_of_cylinders = req.body.number_of_cylinders;
  const phone = req.body.phone;
  const email = req.body.email;

  const object = {patientName,age,city,state,hospital,bloodGroup,number_of_cylinders,phone,email}

  db.insert(object,(err, result) => {
      if (err) {
          console.log(err);
      }
      else{
          console.log(result);
      }
  })
  
  res.redirect('message')

};
