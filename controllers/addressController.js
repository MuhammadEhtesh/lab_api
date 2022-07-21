const dbContext = require("../models");
//const state = require('../models/state');
const { count } = require('console');
const State = dbContext.State;
const County=dbContext.County;
const Country=dbContext.Country;
const  City=dbContext.City;
const  Address=dbContext.Address;


//Api For Select all States
exports.stateFindAll = (req, res) => {
    State.findAll()
      .then((allData) => {
        res.send(allData);
      })
      .catch((err) => res.status(500).send(err));
  };
  
//Api for Create State
exports.stateCreate = (req, res) => {
    
     State.create(req.body)
          .then((resp) => {
            res.send(resp);
          })
          .catch((err) => console.log(err));
      };

//Api For Find state in db
  exports.stateFindById = async (req, res) => {
    const stateData=await State.findById({where: {id : req.body.id} });
    if(stateData){
    res.status(200).send(stateData);
    }
    else
    {
        res.status(204).send("state not available");
    }
  };
  
  //Api for Delete State
  exports.stateDelete = (req, res) => {
    State.destroy({
      where: { id: req.body.id },
    })
      .then((data) =>
        res.status(204).json({
          msg: "State deleted.",
        })
      )
      .catch((err) =>
        res.status(400).send({
          error: "Error while deleting!!!",
        })
      );
  };
  //Api for Update State
  exports.stateUpdate = (req, res) => {
    State.update(req.body, { where: { id: req.body.id } })
      .then((num) => {
        if (num == 1) {
          res.status(200).send({
            message: "Updated!!",
          });
        } else {
          res.status(400).send({
            message: `Can not update State with id ${req.params.id}`,
          });
        }
      })
      .catch((err) => res.status(500).send({ message: err.message }));
  };





//For county //////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////



//Api For Select all County
exports.countyFindAll = (req, res) => {
    County.findAll()
      .then((allData) => {
        res.send(allData);
      })
      .catch((err) => res.status(500).send(err));
  };

//Api for Create County
exports.countyCreate = (req, res) => {
    
    County.create(req.body)
         .then((resp) => {
           res.send(resp);
         })
         .catch((err) => console.log(err));
     };

//Api For Find County in db
 exports.countyfindById = async (req, res) => {
   const countyData=await County.findById({where: {id : req.body.id} });
   if(countyData){
   res.status(200).send(countyData);
   }
   else
   {
       res.status(204).send("County not available");
   }
 };
 
 //Api for Delete County
 exports.countyDelete = (req, res) => {
    County.destroy({
     where: { id: req.body.id },
   })
     .then((data) =>
       res.status(204).json({
         msg: "County deleted.",
       })
     )
     .catch((err) =>
       res.status(400).send({
         error: "Error while deleting!!!",
       })
     );
 };
 //Api for Update County
 exports.countyUpdate = (req, res) => {
    County.update(req.body, { where: { id: req.body.id } })
     .then((num) => {
       if (num == 1) {
         res.status(200).send({
           message: "Updated!!",
         });
       } else {
         res.status(400).send({
           message: `Can not update County with id ${req.body.id}`,
         });

       }
     })
     .catch((err) => res.status(500).send({ message: err.message }));
 };


 ///////////////////////////////////For Country/////////////////////////////////
///////////////////////////////////////////////////////////////////////////



//Api For Select all Country
exports.countryFindAll = (req, res) => {
    Country.findAll()
      .then((allData) => {
        res.send(allData);
      })
      .catch((err) => res.status(500).send(err));
  };

//Api for Create Country
exports.countryCreate = (req, res) => {
    
    Country.create(req.body)
         .then((resp) => {
           res.send(resp);
         })
         .catch((err) => console.log(err));
     };

//Api For Find Country in db
 exports.countryfindById = async (req, res) => {
   const countryData=await Country.findById({where: {id : req.body.id} });
   if(countryData){
   res.status(200).send(countryData);
   }
   else
   {
       res.status(204).send("Country not available");
   }
 };
 
 //Api for Delete Country
 exports.countryDelete = (req, res) => {

    Country.destroy({
     where: { id: req.body.id },
   })
     .then((data) =>
       res.status(204).json({
         msg: "Country deleted.",
       })
     )
     .catch((err) =>
       res.status(400).send({
         error: "Error while deleting!!!",
       })
     );
     
    };

 //Api for Update Country
 exports.countryUpdate = (req, res) => {
    Country.update(req.body, { where: { id: req.body.id } })
     .then((num) => {
       if (num == 1) {
         res.status(200).send({
           message: "Updated!!",
         });
       } else {
         res.status(400).send({
           message: `Can not update Country with id ${req.body.id}`,
         });

       }
     })
     .catch((err) => res.status(500).send({ message: err.message }));
 };
  ///////////////////////////////////For City/////////////////////////////////
////////////////For City////////////////////////////////////For City///////////////////////



//Api For Select all City
exports.cityFindAll = (req, res) => {
    City.findAll()
      .then((allData) => {
        res.send(allData);
      })
      .catch((err) => res.status(500).send(err));
  };

//Api for Create City
exports.cityCreate = (req, res) => {
    
    City.create(req.body)
         .then((resp) => {
           res.send(resp);
         })
         .catch((err) => console.log(err));
     };

//Api For Find City in db
 exports.cityFindById = async (req, res) => {
   const cityData=await City.findById({where: {id : req.body.id} });
   if(cityData){
   res.status(200).send(cityData);
   }
   else
   {
       res.status(204).send("City not available");
   }
 };
 
 //Api for Delete City
 exports.cityDelete = (req, res) => {
    City.destroy({
     where: { id: req.body.id },
   })
     .then((data) =>
       res.status(204).json({
         msg: "City deleted.",
       })
     )
     .catch((err) =>
       res.status(400).send({
         error: "Error while deleting!!!",
       })
     );
 };
 //Api for Update City
 exports.cityUpdate = (req, res) => {
    City.update(req.body, { where: { id: req.body.id } })
     .then((num) => {
       if (num == 1) {
         res.status(200).send({
           message: "Updated!!",
         });
       } else {
         res.status(400).send({
           message: `Can not update City with id ${req.body.id}`,
         });

       }
     })
     .catch((err) => res.status(500).send({ message: err.message }));
 };



 /////////////////////////For Address//////////////////////For Address///////////
///////////////////////////////For Address//////////////////////////////////////////////



//Api For Select all Address
exports.addressFindAll = (req, res) => {
    Address.findAll()
      .then((allData) => {
        res.send(allData);
      })
      .catch((err) => res.status(500).send(err));
  };

//Api for Create Address
exports.addressCreate = (req, res) => {
    
    Address.create(req.body)
         .then((resp) => {
           res.send(resp);
         })
         .catch((err) => console.log(err));
     };

//Api For Find Address in db
 exports.addressFindById = async (req, res) => {
   const addressData=await Address.findById({where: {id : req.body.id} });
   if(addressData){
   res.status(200).send(addressData);
   }
   else
   {
       res.status(204).send("Address not available");
   }
 };
 
 //Api for Delete Address
 exports.addressDelete = (req, res) => {
    Address.destroy({
     where: { id: req.body.id },
   })
     .then((data) =>
       res.status(204).json({
         msg: "Address deleted.",
       })
     )
     .catch((err) =>
       res.status(400).send({
         error: "Error while deleting!!!",
       })
     );
 };
 //Api for Update Address
 exports.addressUpdate = (req, res) => {
    Address.update(req.body, { where: { id: req.body.id } })
     .then((num) => {
       if (num == 1) {
         res.status(200).send({
           message: "Updated!!",
         });
       } else {
         res.status(400).send({
           message: `Can not update Address with id ${req.body.id}`,
         });

       }
     })
     .catch((err) => res.status(500).send({ message: err.message }));
 };