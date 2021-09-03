import * as express from "express";
import addressService from './service/address-service'


class AddressController {
  public router = express.Router();

  constructor() {  
    this.router.get(`/linecheck`, this.lineCheck);
    this.router.get(`/creditCheck`, this.creditCheck);
    

  }
 

  private lineCheck = async (request: express.Request, response: express.Response) => { 
    return response.json(await addressService.linerCheck()).status(200);
  }

  private creditCheck = async (request: express.Request, response: express.Response) => {
    return response.json({"message": "hello"}).status(200);
  }
}

const addressController = new AddressController()
export default addressController;
