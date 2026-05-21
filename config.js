// Vazifalar ro'yxati
let todos = ["Git o'rganish", "JavaScript mashq qilish"];

// Yangi vazifa qo'shish funksiyasi
function addTodo(task) {
    todos.push(task);
    console.log(`Yangi vazifa qo'shildi: ${task}`);
}

// Barcha vazifalarni ko'rsatish
function showTodos() {
    console.log("Vazifalar ro'yxati:");
    todos.forEach((todo, index) => {
        console.log(`${index + 1}. ${todo}`);
    });
}

function removeTodo(index) {
    if (index > 0 && index <= todos.length) {
        const removed = todos.splice(index - 1, 1);
        console.log(`Vazifa o'chirildi: ${removed[0]}`);
    } else {
        console.log("Noto'g'ri indeks. Iltimos, to'g'ri indeks kiriting.");
    }
}

// Sinab ko'ramiz
addTodo("Git branch'larni o'zlashtirish");
showTodos();