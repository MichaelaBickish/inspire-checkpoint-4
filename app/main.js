import TodosController from "./Controllers/TodosController.js";
import WeathersController from "./Controllers/WeathersController.js";
import ClocksController from "./Controllers/ClocksController.js";
import QuotesController from "./Controllers/QuotesController.js";
import ImagesController from "./Controllers/ImagesController.js";

class App {
  todosController = new TodosController();
  weathersController = new WeathersController();
  clocksController = new ClocksController();
  quotesController = new QuotesController();
  imagesController = new ImagesController();
}

window["app"] = new App();
