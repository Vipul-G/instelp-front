export interface UserDto {
    fullName: string;
    phoneNumber: string;
    email: string;
    password: string;
} 

export interface User extends UserDto {
    _id: string;
}