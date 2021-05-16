let search = {

    items_shop: [
        {
            id: 0,
            url: "./photos/trinket_ngnl.jpg",
            title: "Значок Сора NGNL",
            price: "60₽"
        },
        {
            id: 1,
            url: "./photos/DeathNote.jpg",
            title: "Тетрадь death",
            price: "450₽"
        },
        {
            id: 2,
            url: "./photos/gold_key_ft.jpg",
            title: "Ключ Люси Хвост феи",
            price: "250₽"
        },
        {
            id: 3,
            url: "./photos/Rezero_cup.jpg",
            title: "Кружка RE:Zero Рэм",
            price: "300₽"
        },
        {
            id: 4,
            url: "./photos/shirt_girl_for_hour.jpg",
            title: "Футболка Девушка на час",
            price: "1500₽"
        },
        {
            id: 5,
            url: "./photos/shirt_girl_for_hour.jpg",
            title: "Футболка Девушка на час",
            price: "1500₽"
        },
        {
            id: 6,
            url: "./photos/shirt_girl_for_hour.jpg",
            title: "Футболка Девушка на час",
            price: "1500₽"
        },
        {
            id: 7,
            url: "./photos/shirt_girl_for_hour.jpg",
            title: "Футболка Девушка на час",
            price: "1500₽"
        },
        {
            id: 8,
            url: "./photos/shirt_girl_for_hour.jpg",
            title: "Футболка Девушка на час",
            price: "1500₽"
        },
        {
            id: 9,
            url: "./photos/shirt_girl_for_hour.jpg",
            title: "Футболка Девушка на час",
            price: "1500₽"
        }
    ],
    items_main: [
        {
            url: "./photos/trinket_ngnl.jpg",
            title: "Значок Сора NGNL",
            price: "60₽"
        },
        {
            url: "./photos/DeathNote.jpg",
            title: "Тетрадь death",
            price: "450₽"
        },
        {
            url: "./photos/gold_key_ft.jpg",
            title: "Ключ Люси Хвост феи",
            price: "250₽"
        },
        {
            url: "./photos/Rezero_cup.jpg",
            title: "Кружка RE:Zero Рэм",
            price: "300₽"
        },
        {
            url: "./photos/shirt_girl_for_hour.jpg",
            title: "Футболка Девушка на час",
            price: "1500₽"
        }
    ],
    photos: [
        {
            id: 0,
            url: "./photos/art_slider_1.jpg"
        },
        {
            id: 1,
            url: "./photos/art_slider_2.jpg"
        },
        {
            id: 2,
            url: "./photos/art_slider_3.jpg"
        }
    ],
    users: [
        {
            id: 0,
            name: 'Гость',
        },
        {
            id: 1,
            name: 'Михаил',
            rank: 'Мастер',
            date_registration: '06.04.21'
        },
        {
            id: 2,
            name: 'Наиль',
            rank: 'Ветеран',
            date_registration: '05.04.21'
        },
        {
            id: 3,
            name: 'Руслан',
            rank: 'Неопытный',
            date_registration: '04.04.21'
        },
        {
            id: 3,
            name: 'Навальный',
            rank: 'Зэ Бэст',
            date_registration: '04.04.21'
        },
    ]
}
export default search;

export let text = ""

export function cyeta(state = "", action) {
    switch (action.type) {
        case "ON_INPUT":
            const newValue = action.payload
            text = newValue;
            return newValue
        default:
            throw new Error();
    }
}