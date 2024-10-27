# Use an official Node.js runtime as a base image
FROM node:16-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy application files
COPY server.js .

# Install dependencies
RUN npm install express

# Expose the port
EXPOSE 3000

# Run the application
CMD ["node", "server.js"]
