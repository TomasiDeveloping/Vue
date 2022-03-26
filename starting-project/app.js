Vue.createApp({
    data() {
        return {
            goals: [],
            entredValue: ''
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.entredValue);
            this.entredValue = '';
        }
    }
}).mount('#app');

// ####################
// PURE JAVASCRIPT
// #####################
// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
//     const entredValue = inputEl.value;
//     const listItemEl = document.createElement('li');
//     listItemEl.textContent = entredValue;
//     listEl.appendChild(listItemEl);
//     inputEl.value = '';
// }

// buttonEl.addEventListener('click', addGoal);