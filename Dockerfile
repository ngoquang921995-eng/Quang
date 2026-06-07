FROM nginx:alpine

# Copy all static assets into Nginx public directory
COPY . /usr/share/nginx/html

# Expose port 80 (Nginx default)
EXPOSE 80
