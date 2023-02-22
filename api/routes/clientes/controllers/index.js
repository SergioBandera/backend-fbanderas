import  Router  from "express";
import getOne from "./getOne";
import list from './list'
import create from './create'
import update from "./update";
import remove from "./remove";


const router = Router();
router.route("/")
.post(create)
router.route("/list")
.get(list);
router.route("/:id")
.get(getOne)
//body
.put(update)
.delete(remove)


// .put(client)

export default router;