export const popUp = {
    hidden: {
        y: 500,
        //opacity: 0,
        //scale: 3,
    },
    show: {
        y: 100,
        //opacity: 1,
        //scale: 1,
        transition: {
            type: 'spring',
            //ease: 'easeOut',
            bounce: 0.3,
            duration: 1.5,
        },
    },
    exit:{
        y: 900,
        //opacity: 0,
        //scale: 0,
        transition: { 
            duration: 0.75,
        },
    },
};

export const stats = {
    hidden: {
        y: -970,
        zIndex: 20,
        //-370
        //x: 300,
        //350
        opacity: 0,
        //scale: 0,
    },
    show: {
        zIndex: 20,
        y: -750,
        //x: 0,
        opacity: 1,
        //scale: 1,
        transition: {
            type: 'spring',
            //ease: 'easeOut',
            bounce: 0.3,
            duration: 1,
        },
    },
    exit:{
        //x: 900,
        y: -970,
        //opacity: 0,
        //scale: 0,
        transition: { 
            duration: 0.25,
        },
    },
};

export const navSlide = {
    hidden: {
        x: -500,
        //y:-20,
        opacity: 0,
    },
    show: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.75,
            //when:'beforeChildren',
            staggerChildren: 0.5
        },
    },
    exit:{
        x: -500,
        opacity: 0,
        transition: { duration: 0.75 },
    },
};

export const listSlide = {
    hidden: {
        //x: -500,
        y:-20,
        opacity: 0,
    },
    show: {
        //x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.75,
            //when:'beforeChildren',
            staggerChildren: 0.5
        },
    },
    exit:{
        x: -500,
        opacity: 0,
        transition: { duration: 0.75 },
    },
};

export const typeColor = {
    fire: '#eeb7b7',
    grass: '#defde0',
    electric: '#f3e4a0',
    water: '#def3fd',
    ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#c9aae9',
	bug: '#deebb3',
	dragon: '#97b3e6',
	psychic: '#e0a2d0',
	flying: '#c8d9fd',
	fighting: '#cfa1a1',
	normal: '#F5F5F5',
    dark: '#9a9bb1',
    steel: '#bcc4d3',
    ghost: '#a598ca',
    ice: '#c3ebe7'
}