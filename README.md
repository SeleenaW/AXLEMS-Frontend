
# AXLEMS Frontend Microservices

This project consists of multiple React microservices using Tailwind CSS, running within a single Node.js environment for shared dependencies.

## Prerequisites

1. **Node.js**: Ensure Node.js is installed. You can download it from [nodejs.org](https://nodejs.org/).
2. **NPM**: Make sure npm is available for dependency management.

## Project Setup

1. Clone the repository.
2. Navigate to the root directory of the project.

3. **Install Dependencies**:
   Run the following command in the root directory to install all required dependencies:

   ```bash
   npm install
   ```

## Running the Microservices

Each microservice is configured with its own start script, or you can start all of them at once. 

### Start All Services

To start all services concurrently:

```bash
npm run start:all
```

This command will use `concurrently` to run all services simultaneously.

### Start Individual Services

To start each microservice independently, navigate to the root directory and use the following commands:

1. **Admin Dashboard Service**:
   ```bash
   npm run start:admin-dashboard
   ```

2. **User Login Service**:
   ```bash
   npm run start:user-login
   ```

3. **Booking Service**:
   ```bash
   npm run start:booking
   ```

4. **Manager Control Service**:
   ```bash
   npm run start:manager-control
   ```

### Running from Each Service Directory

Alternatively, you can navigate into each service's directory and run it separately:

1. **Admin Dashboard Service**:
   ```bash
   cd admin-dashboard-service
   npm start
   ```

2. **User Login Service**:
   ```bash
   cd user-login-service
   npm start
   ```

3. **Booking Service**:
   ```bash
   cd booking-service
   npm start
   ```

4. **Manager Control Service**:
   ```bash
   cd manager-control-service
   npm start
   ```

## Tailwind CSS Setup

Each microservice uses Tailwind CSS for styling. Tailwind is configured globally in the `tailwind.config.js` file located in the root directory. Tailwind CSS will automatically build whenever you start a service.

## Project Structure

- **admin-dashboard-service**: Contains the Admin Dashboard.
- **user-login-service**: Contains the User Login component.
- **booking-service**: Contains the Booking component.
- **manager-control-service**: Contains the Manager Control panel.
- **shared**: Contains reusable components, utilities, and services.

## Notes

- Each service is independently responsible for its frontend functionality, allowing modularity and scalability.
- The shared dependencies in `node_modules` are utilized across services, so each service does not maintain a separate `node_modules` directory.

## Troubleshooting

1. **Missing `node_modules` error**:
   Run `npm install` in the root directory to ensure all dependencies are installed.

2. **Nodemon errors**:
   If you encounter issues with `nodemon`:
   ```bash
   npx nodemon
   ```

## License

This project is licensed under the MIT License.
