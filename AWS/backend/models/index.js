const mongoose = require("mongoose");
//User
const userSchema = new mongoose.Schema({
  email: String,
  pw: String,
  robots_id: [mongoose.Types.ObjectId],
});
const sessionSchema = new mongoose.Schema(
  {
    expires: Date,
    session: mongoose.Schema.Types.Mixed,
  },
  {
    collection: "mySessions",
  }
);

const robotSchema = new mongoose.Schema({
  serial: String,
  modules_id: [mongoose.Types.ObjectId],
  name: String,
});

const registedModuleSchema = new mongoose.Schema(
  {
    serial: String,
    type_id: mongoose.Types.ObjectId,
    data: mongoose.Schema.Types.Mixed,
    name: String,
  },
  {
    timestamps: true,
  }
);

const moduleTypeSchema = new mongoose.Schema({
  name: String,
});

const User = mongoose.model("User", userSchema);
const Robot = mongoose.model("Robot", robotSchema);

const ModuleType = mongoose.model("ModuleType", moduleTypeSchema);
const RegistedModule = mongoose.model(
  "RegistedModule",
  registedModuleSchema,
  "RegistedModule"
);
const Session = mongoose.model("MySession", sessionSchema);

module.exports = { User, Robot, RegistedModule, ModuleType, Session };
