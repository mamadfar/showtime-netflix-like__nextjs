# 🔌 Getting start
1. Make sure that you have [Node](https://nodejs.org/) on your machine (**LTS is recommended**)
2. First you need to install dependencies by using following command:
```shell
npm install

# OR

yarn

# OR

pnpm install
```
3. This app needs an API Key from this [**website** (sign up)](http://www.omdbapi.com/apikey.aspx), please sign up and use your own API Key. For doing this, you need
   to change the [.env.example](./.env.example) to `.env.local` and put your API Key in the `NEXT_APP_API_KEY`.


4. To run the app on development mode, you can use one of the commands below:
```shell
npm dev

# OR

yarn dev

# OR

pnpm dev
```
---
## 📝 Change Log
In the [change-log.md](./change-log.md) you can find the all information about the creation cycle. By click
on the file name, you will redirect to that file to see the structure of that file.

---
## 🚢 Deploy with SSR mode
If you want to use **Docker** to deploy on **SSR** mode on **VPS**, you can use this command:

```shell
docker-compose up
```

---
### 🚩 NVM
On Mac OS or Linux, you can use command below to install the exact node version which is used to create this app.
```shell
nvm use
```
### 🎬 Preview
![Showtime Preview](./src/assets/showtime-preview.gif)
