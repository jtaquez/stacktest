# Full stack test:
Protoype Employee information system!

This project will create a database with dummy info, ask for a login and display the info from the databse into a chart,

While this project uses several librarias and framworks, only  docker is necessary, since the docker files and program will build the application for testing on its own.

## Prerequisites

Before you can run this project, you need to have Docker installed on your system. If you don't have Docker installed, follow these steps:


1. Visit the official Docker website: https://www.docker.com/get-started
2. Download the Docker Desktop installer for your operating system.
3. Follow the installation instructions provided by Docker.


## Running the Project
1. First, make sure that the docker app is installed and that the application is running on your desktop, this is important since the application runs an engine neccessary to run this project.

2.Clone this repository to your local machine using the following command:

git clone https://github.com/jtaquez/stacktest.git

Alternatively if you enter this link: https://github.com/jtaquez/stacktest , you can download the Zip file of this repository and extract the files into your computer

3.Navigate to the project directory: once you have copied the repository, you should enter the folder named "stacktest", there if you are on windows, press shit and right click inside the folder, then select the "open PowerShell here" option, it will open a command window


4.Build the Docker images using the following command:

docker-compose build

This command will build the Docker images specified in the docker-compose.yml file.

Once the build process is complete, start the containers using the following command:

docker-compose up

The terminal will take several minutes (possibly) to build the app, when it has finished building and is up, open your browser and go to this link:

localhost:3000 

Which will open the now deployed app.
Any questions or errors ask the Developer!

To-do list:

implement rest of CRUD for database and api endpoints
implement login validation
implement CRUD to add data to database from the webpage 
