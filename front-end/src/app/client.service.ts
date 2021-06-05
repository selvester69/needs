import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Client } from './component/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private addClientUrl="http://localhost:3000/client/add";
  private getOneClientUrl="http://localhost:3000/client/one/"
  private updateClientUrl="http://localhost:3000/client/update_info/"
  private deleteClientUrl="http://localhost:3000/client/remove/"
  constructor(private http:HttpClient) { }

  getAllClients(){
    let data= this.http.get<any>("http://localhost:3000/client/all");
    return data;
  }

  addClient(client:Client){
    return this.http.post<any>(this.addClientUrl,client);
  }

  getOneUser(id:String){
    return this.http.get<any>(this.getOneClientUrl+id);
   }

   updateClient(client:Client, id:string){
    return this.http.put<any>(this.updateClientUrl+id,client);
  }

  deleteClient(id:String){
    return this.http.delete<any>(this.deleteClientUrl+id)
  }
  
  /* _userList: User[] = [];

  
  consulter(user: User) {
    const index = this._userList.findIndex(c => c._id === user._id);
    this._userList[index] = user;
  }
  getAllUser() {
    return this._userList;
  }
 */

}