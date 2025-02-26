const images = [
    
    'https://img.freepik.com/premium-photo/lord-krishna-arjuna-chariot_669954-60306.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE3xEjpYifjSmF7r3ONQe22K04havULAiDjw&s',
    
    'https://preview.redd.it/shri-krishna-and-arjun-v0-6178qx6a2gnc1.png?width=640&crop=smart&auto=webp&s=d0fa3ad53bc8f9c9573fb95e6b40c9fd06080143'
];

// Function to display a random image
document.getElementById('random-btn').addEventListener('click', () => {
    // Get a random image from the array
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];

    // Set the image source and display it
    const imgElement = document.getElementById('random-image');
    imgElement.src = randomImage;
    imgElement.style.display = 'block';  // Make the image visible
});