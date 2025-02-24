# Stage 1: Build the Vite.js app
FROM node:22-alpine AS builder
WORKDIR /app

# Copy dependency manifests and install dependencies
COPY package*.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Load environment variables and build the app
ARG VITE_NEWS_API_BASE_URL
ARG VITE_NEWS_API_API_KEY
ARG VITE_THE_GUARDIAN_BASE_URL
ARG VITE_THE_GUARDIAN_API_KEY
ARG VITE_NY_TIMES_BASE_URL
ARG VITE_NY_TIMES_API_KEY

ENV VITE_NEWS_API_BASE_URL=$VITE_NEWS_API_BASE_URL
ENV VITE_NEWS_API_API_KEY=$VITE_NEWS_API_API_KEY
ENV VITE_THE_GUARDIAN_BASE_URL=$VITE_THE_GUARDIAN_BASE_URL
ENV VITE_THE_GUARDIAN_API_KEY=$VITE_THE_GUARDIAN_API_KEY
ENV VITE_NY_TIMES_BASE_URL=$VITE_NY_TIMES_BASE_URL
ENV VITE_NY_TIMES_API_KEY=$VITE_NY_TIMES_API_KEY

RUN yarn run build

# Stage 2: Serve the static files with Nginx
FROM nginx:stable-alpine

# Set up a custom Nginx configuration to serve on port 4173
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 4173
EXPOSE 4173

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
