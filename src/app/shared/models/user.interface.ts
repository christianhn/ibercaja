export interface User {
    id: string;
    name: string;
    firstSurname: string;
    secondSurname: string;
    summary: Summary[];
    accounts: Account[];
    cards: Card[];
    movements: Movement[];
}

export interface Summary {
    name: string;
    amount: number;
}

export interface Account {
    name: string;
    lastFourNumber: string;
    balance: string;
    availableAmount: string;
}

export interface Card {
    title: string;
    lastFourNumber: string;
    cash: Cash;
    isOpenAction: boolean;
}

export interface Cash {
    aviable: number;
    total: number;
    width: number;
}

export interface Movement {
    date: string;
    payments: Payment[];
}

export interface Payment {
    concept: string;
    amount: number;
}