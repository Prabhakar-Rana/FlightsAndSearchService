const { City } = require("../models/index");

class CityRepository {
  async creatCity({ name }) {
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
      await City.destroy({
        where: {
          id: cityId,
        },
      });
    } catch {
      console.log("Something went wrong in repository layey");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await City.update(data, {
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
