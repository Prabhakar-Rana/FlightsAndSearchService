const { City } = require("../models/index");
const { Op } = require("sequelize");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch {
      console.log("Something went wrong in repository layey");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      const city = await City.destroy({
        where: {
          id: cityId
        }
      });
      return true;
    } catch {
      console.log("Something went wrong in repository layey");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {                                                   // below code also work but give empty array
      /*const city = await City.update(data, {  // {name : "updated city"}
        where: {
          id : cityId
        },
      });*/
      const city = await City.findByPk(cityId);
      city.name = data.name;
      await city.save();
      return city;
    } catch(error) {
      
      console.log("Something went wrong in repository layey");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch {
      console.log("Something went wrong in repository layey");
      throw { error };
    }
  }

  async getAllCities(filter) {
    try{
       if(filter.name){
         const cities = await City.findAll({
           where: {
             name: {
               [Op.startsWith]: filter.name,
             },
           },
         });
         return cities;
       }
       const cities = await City.findAll();
       return cities;
    } catch{
       console.log("Something went wrong in repository layey");
       throw { error };
    }
  }
}
module.exports = CityRepository;
