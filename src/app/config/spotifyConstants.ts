import { environment } from "src/environments/environment";


const clientID  = "974c17f9ff924c50ba05a7b65521c011";
const authHost  ="https://accounts.spotify.com/authorize";
const responseType  ="token";



export const authEndpoint = authHost + "?client_id=" + clientID +
                                        "&response_type=" + responseType +
                                        "&redirect_uri=" + environment.redirectUri