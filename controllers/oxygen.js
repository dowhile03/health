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
  const date = new Date().toLocaleString();

  const object = {patientName,age,city,state,hospital,bloodGroup,number_of_cylinders,phone,email,date}

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



exports.adminlogin = (req, res) => {
  const code = req.body.code;

  if (code == process.env.code) {
    res.redirect("/fetchadmindata");
  } else {
    res.send(
      '<h2> You are Not an admin</h2><a href="/admin"><button>Go back</button></a>'
    );
  }
};


exports.fetchData = (req, res) => {
  db.find({},(err, data) => {
      if (err) {
          res.end();
          return;
      }
      console.log(data);
     res.render('fetchadmindata',{
         data: data
     })
  })
}
