const Datastore = require("nedb");
const db = new Datastore({ filename: "./models/findOxygen.db" });

db.loadDatabase((err) => {
  console.log(err);
});

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


