import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {


  constructor(public http: HttpClient) {
    console.log('Hello UsersProvider Provider');
  }

  getURLCollection(collections){
    return "https://api.mlab.com/api/1/databases/minhaduvida/collections/"+collections+"?apiKey=RqBfMjoHn_Oli2vXa0YuwEx1TaPTnHbF";
  }

  getAcesso(user) {
    return new Promise(resolve => {
      this.http.get(this.getURLCollection("acesso")+"&q={tipousuario:\""+user+"\"}").subscribe(data => {
        console.log(data);
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }


  contarUser(user){

    this.getAcesso(user).then(allowed => {
      if (allowed !== false) {  
        console.log(allowed);
        this.putInfo({ acessos : 1 + allowed[0].acessos },{_id : allowed[0]._id},"acesso").then(allowed => {
          console.log(allowed);
        }).catch(error => { console.log(error) });
      } else {

      }
    }).catch(error => { console.log(error) });
    }




  postInfo(info, collection) {
    return new Promise((resolve, reject) => {
      this.http.post(this.getURLCollection(collection),
        JSON.stringify(info), {
          headers: new HttpHeaders().set('Content-Type', 'application/json')
        })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  putInfo(info,Key,collection) {
    return new Promise((resolve, reject) => {
      this.http.put(this.getURLCollection(collection)+"&q="+JSON.stringify(Key),
        JSON.stringify({ $set : info }), {
          headers: new HttpHeaders().set('Content-Type', 'application/json')
        })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}
