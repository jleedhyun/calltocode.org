/**
 * Created by hhy615 on 1/19/18.
 */
import {
  DISABLE_LOGIN,
  ENABLE_LOGIN
} from "./types"

export const disable_login = { type: DISABLE_LOGIN };
export const enable_login = { type: ENABLE_LOGIN};

export default class headerActionCreator {
  static  enableLogin(){
    return enable_login;
  }

  static  disableLogin(){
    return disable_login;
  }
}



