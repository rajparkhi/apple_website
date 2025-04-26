# Step 1: Build the React app
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm run build

# --------------------------------------------------------

# Step 2: Create the final image
FROM node:20-alpine

RUN npm install -g serve

WORKDIR /app

COPY --from=builder /app/dist ./dist

# Expose port 5173
EXPOSE 5173

# Serve the build folder on port 5173
CMD ["serve", "-s", "dist", "-l", "5173"]
