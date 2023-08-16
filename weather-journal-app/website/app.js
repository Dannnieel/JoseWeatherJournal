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
    const temp = data.main.temp;
    var currentFeeling = document.getElementById('feelings').value;

    await postData("http://localhost:3000/data", {
      "temp": temp, 
      "date": d,
      "feelings": currentFeeling
    });

    retrieveData();

    console.log(temp, date, currentFeeling);

  } catch (error) {
    console.log('Error:', error);
  }
};
console.log("register listener", document.getElementById('generate'));
document.getElementById('generate').addEventListener('click', () => {
  console.log("click on generate");
  const zipCode = document.getElementById('zip').value;
  getWeatherData(zipCode);
});

console.log("listener registered")

async function postData(url = '', data){
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
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

// const zipCode = document.getElementById('zip').value;
// const temperature = document.getElementById('temp').value;// Obtiene el valor de temperatura desde algún elemento DOM
// const date = document.getElementById('date').value;// Obtién el valor de fecha desde algún elemento DOM
// const userResponse = document.getElementById('feelings').value; // Obtén el valor de respuesta del usuario desde algún elemento DOM

// const data = {
//   temperature: temperature,
//   date: date,
//   userResponse: userResponse,
// };

// postData('http://localhost:3000/data', data)
//   .then((newData) => {

//     console.log(newData);
//   })
//   .catch((error) => {
//     console.log('Error:', error);
//   });

async function getData(){
  const response = await fetch('/data');
  try {
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error:', error);
  }
}  

//async function updateUI() {
//  const data = await getData();
//  document.getElementById('temp').textContent = data.temp; 
//  document.getElementById('date').textContent = data.date;
//  document.getElementById('feelings').textContent = data.feelings;
//}

//app.post('/postData', (req, res) => {

//  updateUI().then(() => {
//    res.send({ message: 'Datos guardados y UI actualizada' });
//  });
//}); 

const retrieveData = async () => {
  const request = await fetch('http://localhost:3000/data');
  try {
    const table = document.getElementById('myTable');
    table.innerHTML = `<tr>
                      <th>Temp</th>
                      <th>Date</th>
                      <th>Feelings</th>
                    </tr>`;


    const records = await request.json();
    console.log(records);

    for (var i = 0; i < records.length; i++) {
     // const newdiv = document.createElement('div');
      //newdiv.className = "newDiv";
    
      const row = document.createElement("tr");
  
      const tempElement = document.createElement('td');
      tempElement.innerHTML = `Temperature: ${records[i].temp}`;
      const dateElement = document.createElement('td');

      let d = new Date(records[i].date).toLocaleString();
      dateElement.innerHTML = `Date: ${d}`;
      const feelingsElement = document.createElement('td');
      feelingsElement.innerHTML = `Feelings: ${records[i].feelings}`;
      
      row.appendChild(tempElement);
      row.appendChild(dateElement);
      row.appendChild(feelingsElement);

      table.appendChild(row);
      
    }
  
  }
  catch(error) {
    console.log('Error', error);
    
  }
 }
 



 retrieveData();
