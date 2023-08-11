/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

const apiKey = 'bf561fc9d6f52a73aaa67269b86f24e9'; 

const getWeatherData = async (zipCode) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=imperial`;
  

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data); 
  } catch (error) {
    console.log('Error:', error);
  }
};

document.getElementById('generate').addEventListener('click', () => {
  const zipCode = document.getElementById('zip').value;
  getWeatherData(zipCode);
});

async function postData(url = '', data = {}){
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'content-Type': 'aplication/json',
        },
        body: JSON.stringify(data)
    });

    try {
        const newData = await response.json();
        return newData;

    } catch(error){
        console.log('Error:', error);
    }
}
