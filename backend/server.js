const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient, ObjectID } = require("mongodb");
const assert = require("assert");

const app = express();
app.use(bodyParser.json());

const mongoUrl = "mongodb://localhost:27017";
const dataBase = "crtmDataBase";

MongoClient.connect(
  mongoUrl,
  { useNewUrlParser: true },
  (err, client) => {
    assert.equal(err, null, "data base erreur");
    const db = client.db(dataBase);
    app.post("/contact/add-message", (req, res) => {
      let newMessage = req.body;
      db.collection("messages").insertOne(newMessage, (err, data) => {
        if (err) res.send("cant add message");
        else res.send(data);
      });
    });
    app.get("/works", (req, res) => {
      db.collection('projects').find().toArray(
        (err,data)=>{
            if (err) res.send("error: can not fetch projects")
            else {res.send(data)}
    });
    });

    app.get('/works/:id', (req,res) => {
      let id = ObjectID(req.params.id);
      db.collection('projects').findOne({_id: id},(err,data)=>{
          if(err)   res.send("error: can not fetch projects")
          else {res.send(data) }});
      });
    
      app.get('/Administration',(req,res)=>{
        db.collection('user').find().toArray(
            (err,data)=>{
                if (err) res.send("error: can not fetch users")
                else {res.send(data)}
        });
    })

    app.get("/Administration/:id", (req, res) => {
      db.collection('projects').find().toArray(
        (err,data)=>{
            if (err) res.send("error: can not fetch projects")
            else {res.send(data)}
    });
    });

    app.post("/Administration/:id/add-project", (req, res) => {
      let newProject = req.body;
      db.collection("projects").insertOne(newProject, (err, data) => {
        if (err) res.send("cant add projects");
        else res.send(data);
      });
    });

    app.put("/Administration/:id/update-project/:id", (req, res) => {
      let editedProject = req.body;
      let id = ObjectID(req.params.id);
      db.collection("projects").findOneAndUpdate(
        { _id: id },
        { $set: { ...editedProject } },
        (err, data) => {
          if (err) res.send("cant edit project");
          else res.send(data);
        }
      );
    });
    app.delete("/Administration/:id/delete-project/:id", (req, res) => {
      let id = ObjectID(req.params.id);
      db.collection("projects").findOneAndDelete({ _id: id }, (err, data) => {
        if (err) res.send("cant delete project");
        else res.send(data);
      });
    });

    app.get('/Administration/:id/display-project/:id', (req,res) => {
      let id = ObjectID(req.params.id);
      db.collection('projects').findOne({_id: id},(err,data)=>{
          if(err)   res.send("error: can not fetch projects")
          else {res.send(data) }})
      });
    }
);

app.listen(3007, err => {
  if (err) console.log("server erreur");
  else console.log("server is running on port 3007");
});
