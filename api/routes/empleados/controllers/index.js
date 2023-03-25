import Router from "express";
import login from "./login";
import create from "./create";
import getOne from "./getOne";
// import update from "./update";
import list from "./list";

const router = Router();
router.route("/").post(create);
router.route("/list").get(list);
router.route("/oneEmployee").get(getOne)
router.route("/login").post(login);
// router.route("/").put(update);

export default router;
