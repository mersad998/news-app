# Stage 1: Build the Vite.js app
FROM node:22-alpine AS builder
WORKDIR /app

# Copy dependency manifests and install dependencies
COPY package*.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy the rest of the application code and build the app
COPY . .
RUN yarn run build

# Stage 2: Serve the static files with Nginx
FROM nginx:stable-alpine
# Copy the built files from the builder stage to the Nginx html directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose Nginx default port
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
