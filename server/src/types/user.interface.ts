import { Document } from "mongoose";
//Criando modelo de usuário Mongoose
export interface User {
  email: string;
  username: string;
  password: string;
  createdAt: Date;
}
//os dados ficarão no UserDocument para ser utilizado na validação
export interface UserDocument extends User, Document {
  validatePassword(param1: string): string;
}


/**@author Raquel K. Alves*/