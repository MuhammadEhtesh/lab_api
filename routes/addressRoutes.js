const express = require("express");
const addressController=require('../controllers/addressController')
const router = express.Router();


//State
router.get("/stateFindAll", addressController.stateFindAll);
router.post("/stateCreate", addressController.stateCreate);
router.get("/stateFindById", addressController.stateFindById);
router.delete("/stateDelete", addressController.stateDelete);
router.put("/stateUpdate", addressController.stateUpdate);



//County
router.get("/countyFindAll", addressController.countyFindAll);
router.post("/countyCreate", addressController.countyCreate);
router.get("/countyfindById", addressController.countyfindById);
router.delete("/countyDelete", addressController.countyDelete);
router.put("/countyUpdate", addressController.countyUpdate);




//Country
router.get("/countryFindAll", addressController.countryFindAll);
router.post("/countryCreate", addressController.countryCreate);
router.get("/countryfindById", addressController.countryfindById);
router.delete("/countryDelete", addressController.countryDelete);
router.put("/countryUpdate", addressController.countryUpdate);



//City
router.get("/cityFindAll", addressController.cityFindAll);
router.post("/cityCreate", addressController.cityCreate);
router.get("/cityFindById", addressController.cityFindById);
router.delete("/cityDelete", addressController.cityDelete);
router.put("/cityUpdate", addressController.cityUpdate);





//Address
router.get("/addressFindAll", addressController.addressFindAll);
router.post("/addressCreate", addressController.addressCreate);
router.get("/addressFindById", addressController.addressFindById);
router.delete("/addressDelete", addressController.addressDelete);
router.put("/addressUpdate", addressController.addressUpdate);


module.exports = router;