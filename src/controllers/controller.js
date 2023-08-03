const {CityService} = require('../services/index');

const cityService = new CityService();

const create = async (req, res) =>{
    try{
       const city = await cityService.createCity(req.body);
       return res.status(201).json({
         data: city,
         success : true,
         message : 'successfully created a city',
         err : {}
       });
    } catch(error){
       console.log(error);
       return res.status(500).json({
         data : {},
         success : false,
         message : 'not able to create the city',
         err : error
       });
    }
}

const destroy = async (req, res) =>{
    try{
       const response = await cityService.deleteCity(req.param.id);
       return res.status(200).json({
         data: response,
         success : true,
         message : 'successfully deleted a city',
         err : {}
       });
    } catch(error){
       console.log(error);
       return res.status(500).json({
         data : {},
         success : false,
         message : 'not able to delete the city',
         err : error
       });
    }
}

const get = async (req, res) =>{
    try {
      const response = await cityService.getCity(req.param.id);
      return res.status(200).json({
        data: response,
        success: true,
        message: "successfully fetched a city",
        err: {},
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        data: {},
        success: false,
        message: "not able to get the city",
        err: error,
      });
    }
}

const update = async (req, res) => {
  try {
    const response = await cityService.updateCity(req.param.id,req.body);
    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully updated a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to update the city",
      err: error,
    });
  }
};

module.exports = {
    create,
    destroy,
    get,
    update
};