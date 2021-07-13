/**Lets get the translation**/

//Link HTML button element to the getTranslation function 
document.getElementById('createSubmit').addEventListener('click', getTranslation);


function getTranslation() {
    //Get word value from the HTML document
    var word = document.getElementById('input').value;

    //Provide immediate translation API with key and word to be translated.
    const spanishURL = 'https://www.dictionaryapi.com/api/v3/references/spanish/json/' + word + '?key=37565506-2a21-4234-ba20-6ef11f65e53e';

    //console.log(spanishURL);

    //Send spanishURL to the fecthWordURL function to parse JSON object. 
    fetchWordURL(spanishURL);

    //Provide immediate translation API with key and word to be translated.
    const DefURL = 'https://www.dictionaryapi.com/api/v3/references/thesaurus/json/' + word + '?key=5e38a54c-1e5b-4756-830e-803d5466e4da';

    //Send spanishURL to the fecthWordURL function to parse JSON object.
    fetchDefURL(DefURL);
}

//Translated word Code

async function fetchWordURL(request) {

    //send request and name under response
    const response = await fetch(request);

    //retrieve response in JSON and place under data const
    const data = await response.json();

    //Get appropriate data from JSON object, shortdef in this case. I chose not to highlight a specific array value as I believe with differing dialects prefer different words.
    console.log(data[0].shortdef);

    //Write to the HTML document.
    document.getElementById('word').innerHTML = data[0].shortdef;
    for (i = 0, i < data[0].shortdef.length; i++;) {
        console.log(data[0].shortdef[i]);
    }

}

//Defintion Code

async function fetchDefURL(request) {
    //Recieve new Defintion URL and fetch promise under const response.
    const response = await fetch(request);
    //Now place JSON object under the const of data.
    const data = await response.json();

    //console.log(data);

    //Once again I have gone against just providing one specific meaning as I belive more would be helpful. 
    console.log(data[0].shortdef);

    //Write to HTML document.
    document.getElementById('definition').innerHTML = data[0].shortdef;

}