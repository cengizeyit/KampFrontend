import { ResponseModel } from "./responseModel";

export interface ListsResponseModel<T> extends ResponseModel{
  data: T[];
}
