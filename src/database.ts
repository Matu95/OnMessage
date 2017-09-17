import Dexie from 'dexie';

export class DatabaseAppDB extends Dexie{
  usuarios : Dexie.Table<IUsuario,number>;
  constructor(){
    super("OnMessageDB");

    this.version(1).stores({
      usuarios: '++id,usuario,correo,pasw'
    });
    this.usuarios.mapToClass(User);
  }
}
export interface ICategory{
zz
}

export interface IUsuario{
  usuario: string;
  correo: string;
  pasw: string;
}

export class User implements IUsuario{
  usuario: string;
  correo: string;
  pasw: string;

  constructor(usuario:string,correo:string,pasw:string){
     this.usuario = usuario;
     this.correo = correo;
     this.pasw = pasw;
   }

   save(){
     return db.usuarios.add(this);
   }
   static all(){
     return db.usuarios.orderBy("id").reverse().toArray();
   }
}

export let db = new DatabaseAppDB();
