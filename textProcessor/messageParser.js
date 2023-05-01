import { getResponse } from "./responses.js";
import { removeAccents } from "./utils.js";

const tags = {
    greetings: ["hola", "como esta", "buen dia", "como va", "buenas"],
    thanks: ["gracias", "nos vemos", "chau", "adios", "suerte"],
    activities: [
        "actividades",
        "evento",
        "charlas",
        "para hacer",
        "visit",
        "excurs",
        "guia",
        "turis",
        "pasear",
        "paseo",
    ],
    location: ["dond", "lugar", "ubicacion", "como llego", "como llegar"],
};

const getTags = (message) => {
    const tagsDetected = [];
    for (const key in tags) {
        if (checkTag(message, tags[key])) {
            tagsDetected.push(key);
        }
    }
    return tagsDetected;
};

const checkTag = (message, tagValues) => {
    for (let i = 0; i < tagValues.length; i++) {
        if (removeAccents(message.toLowerCase()).includes(tagValues[i])) {
            return true;
        }
    }
    return false;
};

const messageParser = (message) => {
    const tags = getTags(message);
    return getResponse(tags);
};

export default messageParser;
