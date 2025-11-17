function formatValue(input: string | number | boolean): string | number | boolean {
    if (typeof input === "string") {
        return input.toUpperCase();
    } else if (typeof input === "number") {
        return input * 10;
    } else {
        return !input;
    }
}



function getLength(value: string | any[]): number {
    if (typeof value === "string") {
        return value.length;
    } else if (Array.isArray(value)) {
        return value.length;
    }
    return 0;
}



class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

const person1 = new Person("Ahmad Ibna", 21);
person1.getDetails();

const person2 = new Person("Habib", 48);
person2.getDetails();



type Item = {
    title: string;
    rating: number;
};

function filterByRating(items: Item[]): Item[] {
    return items.filter(item => item.rating >= 4);
}

const books = [
    { title: 'Book A', rating: 4.5 },
    { title: 'Book B', rating: 3.2 },
    { title: 'Book C', rating: 5.0 },
];

const topRatedBooks = filterByRating(books);


type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
};

function filterActiveUsers(users: User[]): User[] {
    return users.filter(user => user.isActive === true);
}

const users = [
    { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
    { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
    { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

const activeUsers = filterActiveUsers(users);




interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

function printBookDetails(book: Book): string {
    const availability = book.isAvailable ? 'Yes' : 'No';
    return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`;
}

const myBook: Book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedYear: 1925,
    isAvailable: true,
};

const bookDetails = printBookDetails(myBook);



function getUniqueValues(arr1: (number | string)[], arr2: (number | string)[]): (number | string)[] {
    const result: (number | string)[] = [];

    function addUnique(arr: (number | string)[]): void {
        for (let i = 0; i < arr.length; i++) {
            const value = arr[i];
            if (value !== undefined && !result.includes(value)) {
                result.push(value);
            }
        }
    }

    addUnique(arr1);
    addUnique(arr2);

    return result;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const uniqueValues = getUniqueValues(array1, array2);



type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
};

function calculateTotalPrice(products: Product[]): number {
    if (products.length === 0) return 0;

    return products
        .map(product => {
            const total = product.price * product.quantity;
            const discountAmount = product.discount ? (total * product.discount) / 100 : 0;
            return total - discountAmount;
        })
        .reduce((sum, curr) => sum + curr, 0);
}

const products: Product[] = [
    { name: 'Pen', price: 10, quantity: 2 },
    { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
    { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

const totalPrice = calculateTotalPrice(products);
