const { City } = require("../models/index");

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
    try {
      const city = await City.update(data, {  // {name : "updated city"}
        where: {
          lastName: null,
        },
      });
      return city;
    } catch {
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
}
module.exports = CityRepository;
