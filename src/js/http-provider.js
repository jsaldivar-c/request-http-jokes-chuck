const jokeUrl = 'https://api.chucknorris.io/jokes/random#';

const obtenerChiste = async() => {
    try {
        const response = await fetch(jokeUrl);

        if (!response.ok) throw alert('No se pudo ejecutar la petición');
        const { icon_url, id, value } = await response.json();

        return { icon_url, id, value };

    } catch (error) {
        throw error;
    }
};

export {
    obtenerChiste
}