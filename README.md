# GIF Finder
Find GIF's by just enter word and see word related GIF's images, And ability to copy GIF's images links directly into clipboard

## How to setup locally
 - First fork the repo
[! Here](https://github.com/mnamesujit/gif_finder)

 - Then clone this repository
```bash
git clone https://github.com/mnamesujit/GIF-Finder.git
```

 - After that go inside project directory
```bash
cd GIF-Finder
```
 - And install the dependencies that are need
```bash
npm install
```

 - Create ```.env``` file in project directory to store API-KEY
```bash
    # In linux
    touch .env
```

 - Inside ```.env``` file write your Giphy API-KEY
 ```bash
    VITE_API_KEY = ""
 ```

 - Run the following command to run GIF-Finder app
 ```bash
 npm run dev
 ```