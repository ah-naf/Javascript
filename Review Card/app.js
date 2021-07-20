const review = [{
        id: 1,
        image: 'man1.jpg',
        name: 'Will Smith',
        profession: 'Web Developer',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab optio assumenda molestiae numquam adipisci! Suscipit numquam praesentium iure cumque quasi!'
    },
    {
        id: 2,
        image: 'man2.jpg',
        name: 'Jonas Smith',
        profession: 'Backend Developer',
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Adipisci ut autem aliquam quaerat dolores soluta sequi officia rem asperiores libero eius fugit laboriosam error cupiditate ? "
    },
    {
        id: 3,
        image: 'man3.jpg',
        name: 'Kevin Paul',
        profession: 'Software Engineer',
        des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit similique, quia laboriosam nulla sequi voluptates doloribus corrupti reprehenderit sapiente assumenda.'
    },
    {
        id: 4,
        image: 'man4.jpg',
        name: 'Aaron Johnson',
        profession: 'UI/UX Designer',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, similique? Sed fugiat temporibus ad voluptatum porro perferendis eos libero fuga, eum quis.'
    },
];

let cur = 0;
const backward = document.getElementById('back');
const forward = document.getElementById('forward');
const button = document.getElementById('button');
const image = document.getElementById('image');
const profession = document.getElementById('profession');
const description = document.getElementById('des');
let Name = document.getElementById('name');


window.addEventListener('DoDOMContentLoadedmEve', () => {
    show(cur);
})
forward.addEventListener('click', () => {
    cur = (cur + 1) % 4;
    show(cur);
});
backward.addEventListener('click', () => {
    cur = ((cur - 1) + 4) % 4;
    show(cur);
});
button.addEventListener('click', () => {
    cur = Math.floor(Math.random() * 4);
    show(cur);
})


const show = ind => {
    image.src = review[ind]['image'];
    Name.innerHTML = review[ind]['name'];
    profession.innerHTML = review[ind]['profession'];
    description.innerHTML = review[ind]['des'];
}