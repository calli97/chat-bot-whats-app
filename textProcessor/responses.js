const responses = {
  greetings: "Hola soy el bot de Hueney Ruca, como puedo ayudarlo?",
  thanks: "Saludos, espero haberlo ayudado",
  activities:
    "Cerca del complejo hay muchas actividades para realizar, aqui le dejo una pagina con mas especificaciones y donde tambien puede descargar un folleto con mas informacion: https://hueney-ruca-henry.vercel.app/actividades ",
  location:
    "Nos encontramos en Pasaje 3 241, B7540XAA Villa Arcadia,Provincia de Buenos Aires, Argentina. Tambien le dejo el link para vernos en el mapa: https://shorturl.at/hnEV7 ",
  unknown: "Perdon, no entendi la pregunta",
  english_greetings: ["Hi!, i'm Hueney's Ruca Bot, how can i help you today?"],
  english_thanks: ["I hope the information was useful for you"],
  english_activities: [
    "There is a lot of activities to do, you can get all information about it doing click on this link https://hueney-ruca-henry.vercel.app/actividades",
  ],
  english_location: [
    "We are located at Pasaje 3 241, B7540XAA Villa Arcadia,Provincia de Buenos Aires, Argentina, there is also a link where you can see our gps location at google maps https://shorturl.at/hnEV7 ",
  ],
  english_unknown: [
    "Im sorry i did not understand the question, please try again",
  ],
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
