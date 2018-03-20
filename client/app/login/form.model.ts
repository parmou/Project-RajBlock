export class FormModel{
    name: String;
    email: String;
    password: String;
    password2: String;
    constructor(name: String, email: String, password: String, password2: String){
      this.name= name;
      this.email = email;
      this.password = password;
      this.password2 = password2;
    }
  }