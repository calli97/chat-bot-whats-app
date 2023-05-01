const responses = {
    greetings: "Hola soy el bot de Hueney Ruca, como puedo ayudarlo?",
    thanks: "Saludos, espero haberlo ayudado",
    activities:
        "Cerca del complejo hay muchas actividades para realizar, aqui le dejo una pagina con mas especificaciones y donde tambien puede descargar un folleto con mas informacion: https://hueney-ruca-henry.vercel.app/actividades ",
    location:
        "Nos encontramos en Pasaje 3 241, B7540XAA Villa Arcadia,Provincia de Buenos Aires, Argentina. Tambien le dejo el link para vernos en el mapa: https://shorturl.at/hnEV7 ",
    unknown: "Perdon, no entendi la pregunta",
};

export const getResponse = (tags) => {
    let response = "";
    if (tags.length === 0) {
        return responses.unknown;
    }
    for (let i = 0; i < tags.length; i++) {
        response = response + responses[tags[i]] + "\n";
    }
    return response;
};
