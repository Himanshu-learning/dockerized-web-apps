FROM node:18-alpine    
# take reference from docker-desktop---goto search and find your choice


WORKDIR /app
COPY package*.json   ./
RUN npm install
COPY . .	
# Copy from my current directory to my working directory


EXPOSE 8080
CMD [ "npm", "start" ]


