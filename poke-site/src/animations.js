export const popUp = {
    hidden: {
        y: 500,
        //opacity: 0,
        scale: 0.5,
    },
    show: {
        y: 70,
        //opacity: 1,
        scale: 1,
        transition: {
            duration: 0.75,
        },
    },
    exit:{
        y:700,
        //opacity: 0,
        scale: 0,
        transition: { duration: 0.75 },
    },
};

export const listSlide = {
    hidden: {
        x: -500,
        //opacity: 0,
    },
    show: {
        x: 0,
        //opacity: 1,
        transition: {
            duration: 0.75,
        },
    },
    exit:{
        x: -500,
        opacity: 0,
        transition: { duration: 0.75 },
    },
};

export const typeColor = {
    fire: '#fddfdf',
    grass: '#defde0',
    electric: '#fcf7de',
    water: '#def3fd',
    ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}