function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = {id: 1, name: 'John Doe', age: 30};
            resolve(data);
        }, 2000);
    });
}

fetchData()
    .then(data => {
        console.log('Data fetched successfully:', data);
    })
    .catch(error => {
        console.error('Error fetching data:', error.message);
    });

function fetchData2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('Failed to fetch data'));
        }, 2000);
    });
}

fetchData2()
    .then(data => {
        console.log('Data fetched successfully:', data);
    })
    .catch(error => {
        console.error('Error fetching data:', error.message);
    });


// //Real Example Fetching Data from API
// function fetchDataFromAPI(url) {
//     return new Promise((resolve, reject) => {
//         fetch(url)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch data');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 resolve(data);
//             })
//             .catch(error => {
//                 reject(error);
//             });
//     });
// }
//
// // Example usage
// const apiUrl = 'https://api.example.com/data';
// fetchDataFromAPI(apiUrl)
//     .then(data => {
//         console.log('Data fetched successfully:', data);
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error.message);
//     });