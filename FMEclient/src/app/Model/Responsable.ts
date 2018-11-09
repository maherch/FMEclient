export class Responsable {
  id: number;
  adress: string;
  birthdate: string;
  firstName: string;
  formation:string;
  lastName: string;
  mailAdress: string;
  nat_id_num:string;
  nationality: string;
  phone: string;
  photoUrl: string;


  constructor(id: number, adress: string, birthdate: string, firstName: string, formation: string, lastName: string, mailAdress: string, nat_id_num: string, nationality: string, phone: string, photoUrl: string) {
    this.id = id;
    this.adress = adress;
    this.birthdate = birthdate;
    this.firstName = firstName;
    this.formation = formation;
    this.lastName = lastName;
    this.mailAdress = mailAdress;
    this.nat_id_num = nat_id_num;
    this.nationality = nationality;
    this.phone = phone;
    this.photoUrl = photoUrl;
  }
}
