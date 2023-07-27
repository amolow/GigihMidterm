## **Database Structure/Schema**

![Database Schema](https://i.imgur.com/7Awtxvl.jpeg)

3 Collections used, Videos, Comments and Products.

Using Videos \_id as a shared key between Videos and Products and Videos and Comments. It serves as a reference point to call upon specific products thats related to a video or comments that are in a specific video.

## **Install Instructions**

1. Clone the Repository
2. Install Dependencies

```
npm init
```

```
npm i express mongoose dotenv nodemon
```

3. Rename **.env.test** file into **.env**
4. Replace **your_database_url_here** with your cusom database URL
5. Run the server using
   `npm start`
   Or if that doesnt work, use `node server.js`

6. Dummy data will be automatically imported to your database for easier testing ^^

## **API Structure**

I use 3 different endpoints in this project which are:
**`/videos`**
</br>
**`/products`**
</br>
**`/comments`**

Of these 3 endpoints i have made several requests that incluide

```
GET /videos/ : Returns All Videos

GET /videos/:id : Returns One Video based on id parameter

POST /videos : Creates and returns a new video
```
These endpoints is initialized in the server.js where they use the routers to call upon the functions that are made in the controllers.

```
GET /products/ : Returns All Comments

GET /products/:VideoId : Returns All products that references the videoId Parameter
```

```
GET /comments/ : Returns All Comments

GET /products/:VideoId : Returns All products that references the videoId Parameter
```

## **List API Request and Response**

#Videos

- Videos object

```
{
  id: string
  imgUrl: string
  vidUrl: string
  title: string
}
```

## **GET /videos**

Returns all users in the system.

- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
  videos: [
           {<video_object>},
           {<video_object>},
           {<video_object>}
         ]
}
```

## **GET /videos/:id**

Returns the specified video.

- **URL Params**  
  _Required:_ `id=[integer]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:** `{ <user_object> }`
- **Error Response:**
  - **Code:** 404  
    **Content:** `{ error : "Video doesn't exist or videoID is Wrong" }`

## **POST /videos**

Creates a new Video and returns the new object.

- **URL Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Data Params**

```
  {
    imgUrl: string,
    vidUrl: string,
    title: string,
  }
```

- **Success Response:**
- **Code:** 200  
  **Content:** `{ <user_object> }`

---

#Products

- Products object

```
{
  id: string
  name: string
  price: float(2)
  imgUrl: string
  video: ref
}
```

## **GET /products**

Returns all products in the system.

- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
  products: [
           {<product_object>},
           {<product_object>},
           {<product_object>}
         ]
}
```

## **GET /products/:videoID**

Returns all Products associated with a specified Video.

- **URL Params**  
  _Required:_ `videoId=[integer]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
  products: [
           {<product_object>},
           {<product_object>},
           {<product_object>}
         ]
}
```

- **Error Response:**
  - **Code:** 404  
    **Content:** `{ error : "Video doesn't exist" }`  
    OR
  - **Code:** 400  
    **Content:** `{ error :"videoId is invalid" }`

#Comments

- Comments object

```
{
  id: string
  username: string
  message: string
  video: ref
}
```

## **GET /comments**

Returns all comments in the system.

- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
  comments: [
           {<comment_object>},
           {<comment_object>},
           {<comment_object>}
         ]
}
```

## **GET /comments/:videoID**

Returns all comments associated with a specified Video.

- **URL Params**  
  _Required:_ `videoId=[integer]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
  comments: [
           {<comment_object>},
           {<comment_object>},
           {<comment_object>}
         ]
}
```

- **Error Response:**
  - **Code:** 404  
    **Content:** `{ error : "Video doesn't exist" }`  
    OR
  - **Code:** 400  
    **Content:** `{ error :"videoId is invalid" }`

## **POST /comments**

Creates a new Comment based on the current Video ID .

- **URL Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Data Params**

```
  {
    username: string,
    message: string,
    videoId: string,
  }
```

- **Success Response:**
- **Code:** 200  
  **Content:** `{ <user_object> }`
