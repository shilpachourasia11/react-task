let data = require('./../../config/db');
let sequelize = data.sequelize;
let connection = data.connection;
let axios = require('axios')

module.exports=function(){
let workSpace= connection.define('work_space',{
   id: {
       type: sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true
     },
   type: {
       type: sequelize.STRING,
       allowNull: false,
     },
   availability: {
       type: sequelize.BOOLEAN,
       allowNull: false,
      defaultValue: true
    },
    capacity: {
       type: sequelize.TEXT,
       allowNull: false,
    },
    name: {
       type: sequelize.TEXT,
       allowNull: false,
    },
    status: {
      type: sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  }
);
workSpace.getAllWorkspaces = function (db, req) {
  let offset = req.query.page*10
  return db.rating.findAndCountAll({
    attributes: ['monthly', 'hourly', 'daily'],
    where: {
      status: true
    },
    limit: 10,
    offset: offset,
    include: [
      {
        model: db.work_space,
        where: {
          status: true
        },
        attributes: ['name','availability','capacity','type','id'],
        required: true
      },
    ]
  })
}

workSpace.changeAvailability = function(db, req) {
  return db.work_space.update({
    availability: req.body.value
  },
  {
    where:{
      id: req.body.workSpaceId
    }
  })
}
return workSpace;
};
