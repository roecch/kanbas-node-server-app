import * as dao from "./dao.js";
function ModuleRoutes(app) {
  
  const createModule = async (req, res) => {
    const { cid } = req.params;
    const newModule = {
      ...req.body,
      course: cid,
      id: new Date().getTime().toString(),
      _id: new Date().getTime().toString(),
    };
    const user = await dao.createModule(newModule);
    res.json(user);
  };

  const updateModule = async (req, res) => {
    const { mid } = req.params;
    const status = await dao.updateMod(mid, req.body);
    res.json(status);
};

  const deleteModule = async (req, res) => {
    const status = await dao.deleteMod(req.params.mid);
    res.json(status);
  };

  const findModulesInCourse = async (req, res) => {
    const { cid } = req.params;
    const mods = await dao.findAllModInCourse(cid);
    res.send(mods);
  };

  app.get("/api/courses/:cid/modules", findModulesInCourse);
  app.delete("/api/modules/:mid", deleteModule);
  app.put("/api/modules/:mid", updateModule);
  app.post("/api/courses/:cid/modules", createModule);

}
export default ModuleRoutes;