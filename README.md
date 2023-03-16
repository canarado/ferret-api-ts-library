# Ferret-API TS Library
This is a very smol library used to communicate with the REST API located at https://ferret-api.canarado.xyz/

## Install
`npm i canarado-ferret-api`

## Usage

Get a random ferret
```ts
import { getRandomFerret } from "canarado-ferret-api";

let data = getRandomFerret();

let cdnUri = data.url; // https://ferret-api.canarado.xyz/cdn/some-uuid-string.<jpg | png>
```

Submit a random ferret: requires an API key, not really a public feature, but is there for completeness
```ts
import { submitFerret, setToken } from "canarado-ferret-api";
import image from "some-image.jpg";

let response = submitFerret(image, "token");

// or

setToken("token");

let response = submitFerret(image);
```