export const miembrosFamilia: Familia[]=[
{id: 1, 
nombre: 'Sergio',
apellidos: 'Fernadez',
tipoMiembro:'abuelo materno',
descripcion:'Persona que lo que se propone lo logra, se fija una meta y hacia ella va en contra de vientos y marea. Se vida se voy marcada por un accidente de trabajo que lo incapacita para caminar, a pesar de este incidente negativo sigue luchando para vivir lo mejor posible. Siempre esta rodeados de familia y amigos.',
foto:'sergio.jpg',
edad:56
},
{id: 2, 
nombre: 'Angela',
apellidos: 'Gonzalez Martines-Pinillos',
tipoMiembro:'abuela materna',
descripcion:'Ing. mecanización Agrícola, Madre consagrada a su hija, hermana de Martha, Yolanda, Gabriel, Juan y Argel',
foto:'angela.jpg',
edad:60
},
{id: 3, 
nombre: 'Edy',
apellidos: 'Díaz González',
tipoMiembro:'abuelo paterno',
descripcion:'Campesino en cultivos varios, principalmente ajo, también siembra frijoles, cuanta con 1.5 hectáreas de tierra para trabajar. Posee una pareja de bueyes, una vaca y un caballo. En diciembre empezará a recoger la cosecha de plato burro.',
foto:'abueloP.jpg',
edad:56
},
{id: 4, 
nombre: 'Nersy',
apellidos: 'Betancourt Balsalobre',
tipoMiembro:'abuela paterna',
descripcion:'Ama de casa dedicada a su esposo e hijos. Nace en los aguaceros en el año 1963. Tiene tres hermanos que viven en donde nacieron y una hermana que vive en Moa.',
foto:'nersi.jpg',
edad:56
},
{id: 5, 
nombre: 'Edy',
apellidos: 'Díaz Betancourt',
tipoMiembro:'Papá',
descripcion:'Ing. Automático, gradado en la Universidad de Oriente en el 2017. Los  primero años del servicio social los trabajo en la Habana en la refinería Ñico López. En el 2019 se traslada para ETECSA en Banes. En diciembre de 2019 se casa con la EGI Diana Rosa Fernández González...',
foto:'papa.jpg',
edad:31
},
{id: 6, 
nombre: 'Diana Rosa',
apellidos: 'Fernadez Gonzalez',
tipoMiembro:'Mamá',
descripcion:'Se gradúa de estomatología en el 2017. Realiza la especialidad de EGI graduándose en el 2020. En diciembre de 2019 contrae matrimonio con Edy Díaz Betancourt. En estos momentos se encuentra cursando su segunda especialidad Ortodoncia en Holguín.',
foto:'mama.jpg',
edad:30
},
{id: 7, 
nombre: 'Edy Alberto',
apellidos: 'Díaz Fernadez',
tipoMiembro:'Hijo mayor',
descripcion:'Primogénito, nace el 12 de febrero de 2021 en el hospital Lenin de Holguín. Es un niño muy inteligente y atlético',
foto:'hijomayor.jpg',
edad:3
},
{id: 8, 
nombre: 'Sergio Antonio',
apellidos: 'Díaz Fernadez',
tipoMiembro:'Hijo menor',
descripcion:'Nace el 6 de junio de 2022. Es un niño muy inteligente y atlético. Ama a su mamá y a su hermano.',
foto:'hijomenor.jpg',
edad:2
}
]

export interface Familia {
    id: number;
    nombre: string;
    apellidos: string;
    tipoMiembro: string;
    descripcion: string;
    foto: string;
    edad: number;
}