// TypeScript
// int edad = 25;

// string, number, boolean, undefined, null,

// let edad: number = 24;
const nombre: string = "Fernando";

let nombres: string[] = ["nombres", "edad", "test"];

// let edad: (number | string) = 'veinticuatro';

let values: (string | boolean)[] = ["s", true];

let array: Array<string> = ["str", "dhdhd"];

type Categorytype = "Terror" | "Ciencia Ficcion" | "Aventura";

let age: AgeFormatType = 24;

let category: Categorytype = "Ciencia Ficcion";

type AgeFormatType = string | number;
type GetDataType = () => string;

interface IUser {
	name: string;
	age: number;
	job?: string;
	getData: GetDataType;
}

type UserType = {
	name: string;
	age: number;
	job?: string;
	getData: () => string;
};

const user: UserType = {
	name: "Fernando",
	age: 24,
	getData() {
		return `Mi nombre es ${this.name} y mi edad es ${this.age}`;
	},
};

enum CounterActions {
	INCREMENT = "INCREMENT",
	DECREMENT = "DECREMENT",
}

// const INCREMENT: CounterActions = CounterActions.INCREMENT;

let edad: number = 24;

function suma(num1: number, num2: number): number {
	return num1 + num2;
}

export {};
