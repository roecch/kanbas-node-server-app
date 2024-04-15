import model from "./model.js";
export const createModule = (mod) => {
    delete mod._id
    return model.create(mod);
  }
  
export const findAllModInCourse = (cid) => model.find({course: cid});
export const findModById = (mod) => model.findById(mod);
export const updateMod = (modID, mod) =>  model.updateOne({ _id: modID }, { $set: mod });
export const deleteMod = (mod) => model.deleteOne({ _id: mod });