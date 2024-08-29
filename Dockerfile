# Use an official Alpine Linux image as a base
FROM node:18-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json file
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the remaining files
COPY . .

# Build the application
RUN npm run build

# Expose the port that the app will use
EXPOSE 3000

# Run the command to start the app
CMD ["npm", "run", "start"]