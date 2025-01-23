# ROUND-ABOUT

ROUND-ABOUT is a vacation rental platform inspired by Airbnb. It allows users to **browse, add, view, edit, delete, review,locate using map and search listings**. The project follows the **MVC** design pattern and provides a user-friendly interface for both travelers and hosts.

[ROUND-ABOUT HAS BEEN DEPLOYED ON Render](https://round-about-3pnb.onrender.com)  

For a better user experience, use the following ID:  
**Important:**

**Username:** demoUser  
**Password:** demo123  
Use these credentials to log in and explore the app, or create your own account to start browsing or managing listings.


## Features

- **Browse Listings**: View a wide range of vacation rentals with images, titles, and prices.  
- **Add Listings**: Create a new listing by uploading images and providing details like location, price, and description.  
- **Edit Listings**: Update details of an existing listing.  
- **Delete Listings**: Remove a listing from the platform.  
- **Search Listings**: Quickly search for specific properties.  
- **Reviews**: Add and view reviews for listings.  
- **User Authentication**: Secure login and signup for both travelers and hosts.  

---

## Built With

- **Node.js**: Backend runtime environment  
- **Express.js**: Framework for building web applications  
- **MongoDB**: Database for storing listings and user information  
- **EJS**: Template engine for dynamic rendering  
- **Passport.js**: Authentication middleware  
- **Bootstrap**: Styling and responsive design framework  
- **Multer**: Middleware for handling file uploads  
- **Cloudinary**: Cloud storage for image hosting  
- **Render**: Deployment platform
-  **MAP-BOX**: Integrates map in the website  

---

## Contact

For any questions or feedback, feel free to reach out at [chawlasaksham02@gmail.com](mailto:chawlasaksham02@gmail.com).

## Build Commands

To run the project:

1. Clone the Repository:  
   ```bash
   git clone https://github.com/chawlasaksham/ROUND-ABOUT.git
   
2. Navigate to the Repository:  
   ```bash
   cd ROUND-ABOUT
   
3. Install the Dependencies  
   ```bash
   npm install

4. Run the Application:
   ```bash
   nodemon app.js
   
5. Evironmental Variable
   You will need to create a .env file in the root directory with the following variables:
   ```bash
   CLOUD_NAME=your_cloud_name
   CLOUD_API_KEY=your_cloud_api_key
   CLOUD_API_SECRET=your_cloud_api_secret
   ATLAS_URL_DB=mongodb+srv://<username>:<password>@<clustername>.stgjz.mongodb.net/?retryWrites=true&w=majority&appName=<cluster-name>
   SECRET=any_random_string
   Map-Token=generate at mapbox by creating an account
  
## Contact

For any questions or feedback, feel free to reach out at [chawlasaksham02@gmail.com](mailto:chawlasaksham02@gmail.com).

