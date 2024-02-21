const apiKey = "jK1FXMLG8SI1sZmjf7V9rbflBnMrQ8diZpgUdL26";

const getRovers = async () => {
  try {
    const nasaResponse = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=${apiKey}`, {method: 'GET'});
    return await nasaResponse.json();
  }
  catch (error) {
    return `error: ${error}`;
  }
};

export default getRovers;
 