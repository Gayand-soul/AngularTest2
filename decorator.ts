

// Dekorator som tar en parameter och sätter id till itemID
function MenuItem(itemID: string = "default-id") {
    return function <T extends new (...args: any[]) => {}>(constructor: T) {
        return class extends constructor {
            id: string = itemID;
        };
    };
}


// Använd decorator på klassen
@MenuItem("pizza-123")
class Pizza {
    id!: string;
}

@MenuItem()//
class Hamburger{
    id!: string;
}

console.log(new Pizza());
console.log(new Hamburger());