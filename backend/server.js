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

    app.post("/Newslettersubscribe", (req, res) => {
      let newmembership = req.body;
      db.collection("membership").insertOne(newmembership, (err, data) => {
        if (err) res.send("cant add membership demand");
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

    app.get("/Administration/:id/:username", (req, res) => {
      db.collection('projects').find().toArray(
        (err,data)=>{
            if (err) res.send("error: can not fetch projects")
            else {res.send(data)}
    });
    });
    app.post("/Administration/:id/:username/add-project", (req, res) => {
      let newProject = req.body;
      db.collection("projects").insertOne(newProject, (err, data) => {
        if (err) res.send("cant add projects");
        else res.send(data);
      });
    });
    app.put("/Administration/:id/:username/update-project/:id", (req, res) => {
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
    app.delete("/Administration/:id/:username/delete-project/:id", (req, res) => {
      let id = ObjectID(req.params.id);
      db.collection("projects").findOneAndDelete({ _id: id }, (err, data) => {
        if (err) res.send("cant delete project");
        else res.send(data);
      });
    });
    app.get('/Administration/:id/:username/display-project/:id', (req,res) => {
      let id = ObjectID(req.params.id);
      db.collection('projects').findOne({_id: id},(err,data)=>{
          if(err)   res.send("error: can not fetch projects")
          else {res.send(data) }})
      });
      app.get('/Administration/:id/:username/Event/Edit-UpcommingEvent/', (req,res) => {
        db.collection('events').find().toArray(
          (err,data)=>{
              if (err) res.send("error: can not fetch events")
              else {res.send(data)}
        });
        });
        app.get("/", (req, res) => {
          db.collection('events').find().toArray(
            (err,data)=>{
                if (err) res.send("error: can not fetch events")
                else {res.send(data)}
        });
        });
      app.put("/Administration/:id/:username/Event/Edit-UpcommingEvent/:id", (req, res) => {
        let editedEvents = req.body;
        let id = ObjectID(req.params.id);
        db.collection("events").findOneAndUpdate(
          { _id: id },
          { $set: { ...editedEvents } },
          (err, data) => {
            if (err) res.send("cant edit event");
            else res.send(data);
          }
        );
      });
      app.get("/Administration/:id/:username/messages", (req, res) => {
        db.collection('messages').find().toArray(
          (err,data)=>{
              if (err) res.send("error: can not fetch messages")
              else {res.send(data)}
      });
      });
      app.get("/Administration/:id/:username/memberships", (req, res) => {
        db.collection('membership').find().toArray(
          (err,data)=>{
              if (err) res.send("error: can not fetch membership")
              else {res.send(data)}
      });
      });
    }
);

app.listen(3007, err => {
  if (err) console.log("server erreur");
  else console.log("server is running on port 3007");
});
