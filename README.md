# WESTZONE

# Step 1
1. Introduction
2. Install Tools
3. Create React App
4. Create Git Repository

# Step 2 /List Products\
1. Create Products Array
2. Add Product Images
3. Render Products
4. Style Products

# Step 3 /Add Page Routing\
1. |npm i react-router-dom|
2. Create Route For HomeScreen
3. Create Router For ProductScreen

# Step 4 /Create Node.js Server\
1. Run |npm init| In Root Folder
2. Update package.json Set` type: "module"
3. Add .js To Imports
4. |npm install express|
5. Create` server.js File
6. Add Start Command as node backend/server.js
7. Require Express
8. Create Route For / Return Backend is Ready
9. Move` products.js(data.js) From Frontend To Backend
10. Create Route For` /api/products
11. Return Products
12. Run |npm start|
13. From (chrome.google.com) Download` JSON Viewer

# Step 5 /Fetch Products From Backend\
1. Set` proxy In package.json
2. |npm install axios|
3. Use` useState Hook
4. Use` useEffect Hook
5. Use` useReducer Hook

# Step 6 /Manage State By Reducer Hook\
1. Define Reducer
2. Update Fetch Data
3. Get State From useReducer
4. |npm install use-reducer-logger --force|

# Step 7 /Add Bootstrap UI Framework\
1. |npm install react-bootstrap bootstrap|
2. |npm install react-router-bootstrap| for LinkContainer
3. Update` App.js With Using` Layout and Components from react-bootstrap

# Step 8 /Create Product and Rating Component\
1. Create Rating Component
2. Create Product Component
3. Use Rating Component in Product Component

# Step 9 /Create Product Details Screen\
1. Fetch Product from Backend
2. Create 3 Columns for Image, Into and Action
3. Showing Product Name in the Title |npm install react-helmet-async|

# Step 10 /Create Loading and Message Component\
1. Create Loading Component
2. Use Spinner Component
3. Create Message Component
4. Create` utils.js to Define getError Function

# Step 11 /Implement Add to Cart\
1. Create React Context
2. Define Reducer
3. Create Store Provider
4. Implement Add to Cart Button Click Handler

# Step 12 /Complate Add to Cart\
1. Check Exist Item in the Cart
2. Check Count in Stock in Backend

# Step 13 /Create Cart Screen\
1. Create 2 Columns
2. Display Items List
3. Create Action Column

# Step 14 /Complate Cart Screen\
1. Click Handler for inc/dec Item
2. Click Handler for Remove Item
3. Click Handler for Checkout


# I'M GONNA TO IMPROVE MY PROJECT WITH { REDUX } AND BUILD IT FROM SCRATCH...

# *Step 1 /Installing Tools\
1. Install |VS Code| Editor
2. Install |google.com/chrome| Browser
3. Install |node.js|
4. Install |mongoDB.| Database
5. Install |POSTMAN| Platform for API

# *Step 2 /Design Website Template\
1. Create Very Basic Template
2. Create Header, Main and Footer

# *Step 3 /Display Products\
1. Create Products div
2. Add Product Attributes
3. Add Link, Image, Name, Rating and Price

# *Step 4 /Create React App\
1. |npx create-react-app frontend|
2. |npm start|
3. Remove Unused Files
4. Transfer the Items of Initial Folder to React App

# *Step 5 /Create Rating and Product Component\
1. Create Components/Rating.js
2. Create div.rating
3. Style div.rating, span and Last span
4. Create Product Component
5. Use Rating Component

# *Step 6 /Build Product Screen\
1. Install |npm install react-router-dom|
2. Use BrowserRouter and Route for HomeScreen
3. Create HomeScreen.js
4. Adding Product List Code There
5. Create ProductScreen.js
6. Add New Route from Product Details to App.js
7. Create 3 Columns for Product Image, Info and Action

# *Step 7 /Create Node.js Server\
1. Run |npm init| in Root Folder
2. Update` package.json Set` type: "module"
3. Add` .js to Imports
4. Install |npm install express|
5. Create` server.js File
6. Add Start Command as Node backend/server.js
7. Require express
8. Create Route for / Return Backend is Ready.
9. Move` product.js from Frontend to Backend
10. Create Route for /api/products
11. Return Products
12. Run |npm run serverDev| then |npm start|
13. From (chrome.google.com) Download` JSON Viewer
14. Install |npm install --save-dev nodemon|

# *Step 8 /Load Products from Backend\
1. Setting` proxy
2. Edit` HomeScreen.js
3. Define Products, Loading and Error
4. Create` useEffect Hook
5. Define` async fetchData and Call it
6. Install |npm install axios|
7. Get Data from /api/products
8. Show Them in the List
9. Create Loading Component
10. Create Message Box Component
11. Use Them in HomeScreen

# *Step 9 /Install ESlint for Code Linting\
1. Install VS-Code ESlint extension
2. |npm install -D eslint|
3. Run ./node_modules/.bin/eslint --init
4. Create ./frontend/.env
5. Add SKIP_PREFLIGHT_CHECK=true

# *Step 10 /Add Redux to HomeScreen\
1. Install |npm install redux react-redux --force|
2. Install |npm install redux-thunk|
3. Create` store.js
4. InitState = {products: []}
5. Reducer = {state, action} => switch LOAD_PRODUCTS: {products: action.payload}
6. Export default createStore(reducer, initState)
7. /Add to Chrome\ the` Redux DevTools from google.com
8. Edit` HomeScreen.js
9. ShopName = useSelector(state => state.products)
10. Const dispatch = useDispatch()
11. UseEffect(() => dispatch({type: LOAD_PRODUCTS, payload: data}))
12. Add Store to index.js

# *Step 11 /Add Redux to ProductScreen\
1. Create Product Details Constants, Actions and Reducers
2. Add Reducer to store.js
3. Use Action in ProductScreen.js
4. Add` /api/product/:id to Backend api

# *Step 12 /Handle Add to Cart Button\
1. Handle Add to Cart in ProductScreen.js
2. Create` CartScreen.js

# *Step 13 /Implement Add to Cart Action\
1. Create` addToCart Constants, Actions and Reducers
2. Add Reducer to store.js
3. Use Action in CartScreen.js
4. Render` cartItems.length

# *Step 14 /Build Cart Screen\
1. Create 2 Columns for Cart Items and Cart Action
2. CartItems.length === 0 ? cart is empty
3. Show Item Image, Name, Qty and Price
4. Proceed to Checkout Button
5. Implement Remove from Cart Action

# *Step 15 /Implement Remove from Cart Action\
1. Create` removeFromCart Constants, Actions and Reducers
2. Add Reducer to store.js
3. Use Action in CartScreen.js

# *Step 16 /Connect to MongoDB\
1. Install |npm install mongoose| in the Root Folder
2. Install |npm install bcrypt| in the Root Folder
3. Install |npm install express-async-handler| in the Root Folder
4. Connect to MongoDB
5. Create` config.js
6. Install |npm install dotenv|
7. Export MONGODB_URL
8. Create` models/userModel.js
9. Create` userSchema and userModel
10. Create` models/productModel.js
11. Create` productSchema and productModel
12. Create` userRoute
13. Seed Sample Data

# *Step 17 /Create Sample Products in MongoDB\
1. Create` models/productModel.js
2. Create` productSchema and productModel
3. Create` productRoute
4. Seed Sample Data

# *Step 18 /Create Sign-in Backend\
1. Create` /signin api
2. Check Email and Password
3. Generate Token
4. Install` |npm install jsonwebtoken| in the Root Folder
5. Create` utils.js in Backend Folder
6. Install` |npm install dotenv| in the Root Folder
7. Return Token and Data
8. Test it by using Postman

# *Step 19 /Design SignIn Screen\
1. Create` SigninScreen
2. Render` email and password Fields
3. Update` Header Based on User Login

# *Step 20 /Implement SignIn Action\
1. Create` Signin Constants, Actions and Reducers
2. Add Reducer to store.js
3. Use Action in SigninScreen.js

# *Step 21 /Create Register Screen and Backend API\
1. Create` API for /api/users/register
2. Insert New User to Database
3. Return User Info and Token
4. Create` RegisterScreen.js
5. Add Fields
6. Style Fields
7. Add Screen to App.js

# *Step 22 /Create Shipping Screen\
1. Create` CheckoutSteps.js Component
2. Create` Shipping Fields
3. Create` ShippingAddressScreen.js
4. Implement` Shipping Constants, Actions and Reducers

# *Step 23 /Create Payment Screen\
1. Create` Payment Fields
2. Implement` Shipping Constants, Actions and Reducers

# *Step 24 /Design Place Order Screen\
1. Design Order Summary Fields
2. Design Order Action

# *Step 25 /Create Place Order API\
1. Create` order api
2. Create` orderModel
3. Create` orderRouter
4. Create` post order Route

# *Step 26 /Implement PlaceOrder Action\
1. Handle Place Order button click
2. Create` placeOrder Constants, Actions and Reducers

# *Step 27 /Create Order Screen\
1. Build order api for /api/orders/:id
2. Create` OrderScreen.js
3. Dispatch Order Details Action in useEffect
4. Load Data with useSelector
5. Show Data like PlaceOrderScreen
6. Create` order details Constant, Action and Reducer

# *Step 28 /Add PayPal Button\
1. Get Client id from PayPal
2. Set it in .env File
3. Create` Route from /api/paypal/clientId
4. Create` getPaypalClientID in api.js
5. Add PayPal checkout script in OrderScreen.js
6. Show PayPal Button |npm install react-paypal-button-v2| in frontend
7. Change` ReactDOM.render( in index.js from 18 to 17 version for Temporary

# *Step 29 /Implement Order Payment\
1. Update order after payment
2. Create` payOrder in api.js
3. Create` route for /:id/pay in orderRouter.js
4. Rerender after pay order

# *Step 30 /Display User Profile\
1. Create` user details api
2. Show user information

# *Step 31 /Display Orders History\
1. Create` customer orders api
2. Create` api for getMyOrders
3. Show orders in profile screen
4. Style orders

# *Step 32 /Update User Profile\
1. Create` user update api
2. Update user info

# *Step 33 /Create Admin View\
1. Create` Admin Menu
2. Create` Admin Middleware in Backend
3. Create` Admin Route in Frontend

# *Step 34 /List Products\
1. Create` ProductListScreen
2. Add Reducer to Store
3. Show Products on the Screen

# *Step 35 /Create Product\
1. Build create product api
2. Build create product button
3. Define product create Constant, Action and Reducer
4. Use Action in ProductListScreen

# *Step 36 /Build Product Edit Screen\
1. Create` edit screen
2. Define state
3. Create` fields
4. Load product details
5. Add to routes

# *Step 37 /Update Product\
1. Define update api
2. Define product update Constant, Action and Reducer
3. Use action in ProductEditScreen

# *Step 38 /Upload Product Image\
1. Install` |npm install multer| in root Folder
2. Define upload router
3. Create` uploads folder
4. Handle frontend

# *Step 39 /List Orders\
1. Create` order list api
2. Create` OrderListScreen
3. Add reducer to store
4. Show products on the screen

# *Step 40 /Delete Product\
1. Create` delete api in backend
2. Create` delete Constant, Action and Reducer
3. Use it in ProductListScreen

# *Step 41 /Delete Order\
1. Create` delete order Action and Reducer
2. Add order delete Action to order list

# *Step 42 /Deliver Order\
1. Create` Constant, Actions and Reducers for deliver order
2. Add order deliver action to order details screen

# *Step 43 /List Users\
1. Build api for List Users
2. Create` UserListScreen
3. Create` order details Constant, Action and Reducer

# *Step 44 /Delete Users\
1. Build api for delete users
2. Create` order details Constant, Action and Reducer
3. Use action in UserListScreen

# *Step 45 /Edit User\
1. Build api for update users
2. Create` edit screen UI

# *Step 46 /Implement Seller View\
1. Add Seller Menu
2. Create Seller Route
3. List Products for Seller
4. List Orders for Seller
5. Add seller to ProductList and DetailsScreen

# *Step 47 /Create Seller Page and Carousel\
1. Create` Seller Page
2. Create` Seller Carousel

# *Step 48 /Add Top Seller Carousel\
1. Install React Carousel |npm install react-responsive-carousel| in frontend Folder
2. Implement Actions and Reducers for top sellers
3. Use react Carousel with data in HomeScreen

# *Step 49 /Force Order Items From One Seller\
1. Update addToCart action to buy from one seller at an order

# *Step 50 /Create Search Box and Search Screen\
1. Create` Search bar in Header.js
2. Add styles
3. Handle submit form
4. Edit parse URL to get query string
5. Update product list api for search by name

# *Step 51 /Add Advanced Search Filter\
1. Filter by Category
2. Filter by Price Range
3. Filter by Average Rating

# *Step 52 /Complete Advanced Search\
1. Filter by price
2. Filter by Rating
3. Sort by Price, Rating, ...

# *Step 53 /Rate and Review Products\
1. Rate Products
2. Create` Actions and Reducers

# *Step 54 /Choose Address on Google Map\
1. Create` google map credentials from /console.cloud.google.com/
2. Update .env file widh google Api key
3. Create` Api to send google Api to frontend
4. Create` MapScreen
5. Fetch Google Api
6. GetUserLocation
7. Install` |npm install @react-google-maps/api| in frontend Folder
8. Use it in ShippingScreen
9. Apply map to the CheckoutScreen

# *Step 55 /BugFix: Running Locally Without Issue\
1. Add Seller Info to data.js
2. Seed Product data with admin info as seller
3. Fix isSeller and isAdmin on update user
4. Remove Auth from user details

# *Step 56 /Implement Pagination\
1. Add pagination to product Router in backend
2. Apply page number to Actions and Reducers in frontend
3. Show page numbers in SearchScreen

# *Step 57 /Email Order Receipt by Mailgun\
1. Create` mailgun account in https://www.mailgun.com/
2. Add and verify your domain to mailgun
3. Install mailgun-js |npm install mailgun-js| in the root Folder
4. Set api key in .env file
5. Change pay order in orderRouter
6. Send email the

# *Step 58 /Upload Product Images on AWS S3\
1. Create` AWS account
2. Open https://s3.console.aws.amazon.com
3. Create` public bucket as westzone
4. Create` api key and secret
5. Past it into .env as accessKeyId and secretAccessKey
6. Move dotenv to config.js
7. Add accessKeyId and secretAccessKey to config.js
8. Install` |npm install aws-sdk multer-s3| in the root Folder
9. Routes/uploadRoute.js
10. Set aws.config.update to config values
11. Create` s3 from new aws.S3()
12. Create` storageS3 from multerS3 by setting s3, bucket and acl
13. Set uploadS3 as multer({ storage: storageS3 })
14. Router.post('/s3', uploadS3.single('image'))
15. Return req.file.location
16. ProductsScreen.js
17. On handleUploadImage set Axios.post('/api/uploads/s3')

# *Step 59 /Create Dashboard Screen\
1. Create` chart data in backend
2. Build ChartScreen
3. Install` | npm install react-google-charts| in frontend Folder

# *Step 60 /Implement Live Chat With Customers\
1. Use socket io to create backend
2. Create` chatBox component
3. Create` SupportScreen
4. Install` |npm install socket.io| in the root Folder
5. Install` |npm install socket.io-client| in frontend Folder

# *Step 61 /Upgrade To React 17, Router 6, Mongoose 6\
.|||Backend
1. Unistall and install all packages
2. Remove options in mongoose connect
3. Wrap mailgun in try catch in orderRouter
.|||Frontend
4. Unistall and install all packages
5. Remove <Route> in SearchBox
6. Wrap all <Route> in <Routes>
7. Replace <Route component={Screens}> with <Route element={Screens}>
8. Replace <PrivateRoute> with <Route element={<PrivateRoute><Screens/></
PrivateRoute>}/>
9. Replace <AdminRoute> and <SellerRoute> too
10. Update PrivateRoute, AdminRoute and SellerRoute
11. Replace navigate() with navigate() from useNavigate
12. Replace props.match.params.id with const params = useParams();
13. Replace props.location.search with const { search } = useLocation(); and 
URLSearchParams
14. Replace props.match.path with const { pathName } = useLocation();
15. Put userInfo in useEffect in ChatBox, SupportScreen
16. Updates to Client Rendering APIs in index.js by createRoot


# *Step 62 /Publish To Heroku\
1. Create` git repository
2. Create` Heroku account |dashboard.heroku.com/apps|
3. Install Heroku CLI |https://devcenter.heroku.com/articles/heroku-cli|
4. Install |npm install -g heroku| in root Folder
5. Heroku login` run in terminal |heroku login| in the root Folder
6. Heroku apps:create<yourname> |heroku apps:create my-westzone-app| in root Folder
7. Edit package.json for build script
8. Create` Procfile
9. Create` mongodb atlas database` by visit |https://cloud.mongodb.com|
10. Set database connection in Heroku env variables
11. Commit and Push
12. To check website go to this address |https://my-westzone-app.herokuapp.com|