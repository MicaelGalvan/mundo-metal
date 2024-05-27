# Use the official Node.js image as a base
FROM node:20.12.0

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port your server will run on
EXPOSE 3000

# Command to run your application
CMD ["npm", "start"]