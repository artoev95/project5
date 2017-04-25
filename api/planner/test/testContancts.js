var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.
var server = supertest.agent("http://localhost:80");

// UNIT test begin

describe("Contacts GET unit test",function(){
  // #1 should return contacts representation in json
  it("should return collection of JSON documents",function(done){

    // calling home page api
    server
    .get("/api/planner/")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      done();
    });
  });

it("should add a new plan",function(done){

  // post to /api/plan
  server.post('/api/planner')
  .send({name:"Contact 99"})
  .expect("Content-type",/json/)
  .expect(201)
  .end(function(err,res){
    res.status.should.equal(201);
    done();
  });
});

it("should update plan",function(done){
// post to /api/plan
// calling home page api
      
        server.put("/api/planner/58f79980cbff6306385c697e")
        .expect("Content-type",/json/)
        .expect(200) // THis is HTTP response
        .end(function(err,res){
            res.body._id.should.equal("58f79980cbff6306385c697e");
            done();
         }
       );
       }
     );


it("should delete plan",function(done){
// post to /api/plan
// calling home page api
      
        server.delete("/api/planner/58dbde92da80bb279c374f1e")
        .expect("Content-type",/json/)
        .expect(200) // THis is HTTP response
        .end(function(err,res){
            res.body._id.should.equal("58dbde92da80bb279c374f1e");
            done();
         }
       );
       }
     );


});
