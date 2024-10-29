const app = require('./App');

// Define the port for the service to listen on
const PORT = process.env.PORT || 5002;

const colors = {
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

function log(message) {
  console.log(`${colors.blue}%s${colors.reset}`, message);
}

app.listen(PORT, () => {
  log(`Manager Control Service is running on port ${PORT}`);
});
