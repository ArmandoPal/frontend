import axios from "axios";

const API_URL = "http://localhost:8080";

export interface Usuario {
    id?: number;                
    name: string;    
    lastname: string; 
    email: string;             
    password: string;     
    token?: string;        
  };
  

//Registro
export const registro = async(usuario: Usuario) => {
    try{
        const respuesta = await axios.post(`${API_URL}/api/auth/register`, usuario);
        console.log(`Registro exitoso`);
        return respuesta.data;
    }catch(error){
        console.error('Registro fallido:', error);
        throw error;
    };
};

//Autenticacion
export const login = async(email:string, contraseña:string) => {
    try{
        const respuesta = await axios.post <{token: string }>(`${API_URL}/api/auth/login`, {email, contraseña});
        localStorage.setItem('token', respuesta.data.token);
        console.log('Login exitoso');
        return respuesta.data;
    } catch(error){
        console.error('Login fallido:', error);
        throw error;
    }
}


