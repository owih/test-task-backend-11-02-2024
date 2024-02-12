const prisma = require('../prisma');
const dotenv = require('dotenv');

dotenv.config();

class ConfigurationController {
  async get(
    req,
    res,
  ) {
    try {

      const configurationList = await prisma.configuration.findMany();

      return res.status(200).json({ data: configurationList });
    } catch (e) {
      return res.status(404).json({ message: 'Ошибка получения списка конфигураций' });
    }
  }

  async add(
    req,
    res,
  ) {
    try {
      const { sizeId, slotsId } = req.body;
      let configuration = await prisma.configuration.findFirst({
        where: {
          sizeId,
          slotsId,
        },
      });

      if (configuration) {
        await prisma.configuration.update({
          where: {
            id: configuration.id,
          },
          data: {
            count: configuration.count + 1,
          },
        });
      }

      if (!configuration) {
        configuration = await prisma.configuration.create({
          data: {
            sizeId,
            slotsId,
            count: 1,
          },
        });
      }


      return res.status(200).json({ data: configuration });
    } catch (e) {
      return res.status(404).json({ message: 'Ошибка при создании конфигурации' });
    }
  }

  async delete(
    req,
    res,
  ) {
    try {
      const { sizeId, slotsId } = req.query;

      let configuration = await prisma.configuration.findFirst({
        where: {
          sizeId: Number(sizeId),
          slotsId: Number(slotsId),
        },
      });

      if (configuration) {
        await prisma.configuration.delete({
          where: {
            id: configuration.id,
          },
        });
        configuration = null;
      }
      return res.status(200).json({ data: configuration });
    } catch (e) {
      return res.status(404).json({ message: 'Ошибка при удалении конфигурации' });
    }
  }

  async count(
    req,
    res,
  ) {
    try {
      const { count } = req.body;
      const { sizeId, slotsId } = req.body.configuration;

      let configuration = await prisma.configuration.findFirst({
        where: {
          sizeId,
          slotsId,
        },
      });

      if (configuration) {
        if (!count) {
          await prisma.configuration.delete({
            where: {
              id: configuration.id,
            },
          });
          configuration = null;
        }
        if (count) {
          configuration = await prisma.configuration.update({
            where: {
              id: configuration.id,
            },
            data: {
              count,
            },
          });
        }
      }


      return res.status(200).json({ data: configuration });
    } catch (e) {
      return res.status(404).json({ message: 'Ошибка при обновлении количества конфигурации' });
    }
  }
}

module.exports = new ConfigurationController();
