# Use an official Python runtime as the base image
FROM python:3.10-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file to the working directory
COPY requirements.txt .

# Install the dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the backend code to the working directory
COPY . .

# Expose the port on which the backend server will run
EXPOSE 8000

# Run the command to start the backend server
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]