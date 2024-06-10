# Use an official Node.js runtime as the base image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the frontend code to the working directory
COPY . .

# Build the Node application
RUN npm run build

#Copy the NextJS files 
COPY .next ./.next 

# Expose the port on which the frontend server will run
EXPOSE 3000

# Run the command to start the frontend server, nextjs runs via npm run dev
CMD ["npm", "run", "dev"]