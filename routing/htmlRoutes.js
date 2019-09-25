const path=require(path);

module.exports=function(app){
    app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, "/public/survey.html"));
  })
  
  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  
  /*  got this info from chapter 13-expression exercises 14 and 15 for routing*/