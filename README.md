# Capstone Project V0.3 

This project was designed to work in conjuction with its dedicated hardware. 
The data destination refers to the subsystem that handles of data after it wase processed by the microcontroller. It includes both a backend server and a user interface.

For the data that was collected by the sensors to be shared on the internet, the data must be first stored in the cloud where other clients can access it via Representational State Transfer Application Programming Interface (REST API). This approach introduces greater flexibility to the number and type of devices that can use the data without affecting the sensor’s or the microcontroller’s operation. The front-end is where the data is displayed and interfaced to a user. The back-end is the man-in-middle between an IoT node and devices that consume the API.

![alt text](https://i.ibb.co/nzjJn65/Screenshot-18.png)


# Front End v0.3
  - Built with ReactJS 
  - Livestream collected data to the user 
  - Consumes the back-end's API

# Back-end v0.3 
  - Built with Django and served on AWS
  - SQlite database
  - Include 5 API end-points: /get-username , $username/get-devices , $username/api/$device_name/get-data,  $username/api/$device_name/get-all-data
  - 
# fakeMCU 
  - Simulate the data being added to the back-end database thorugh an API 
  - External entity to the AWS server
