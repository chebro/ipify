# ipify

No bullshit express.js app that returns the client ip address.


## Install

```sh
git clone http://github.com/chebro/ipify
npm ci
```

## Run locally

```sh
PORT=8080 HOST=localhost node index.js
```


## Behind a reverse proxy

When behind a reverse proxy, set the `X-Forwarded-For` proxy header to the client IP in the proxy config, for nginx:

```
server {
	...
	location / {
		...
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		...
	}
}
```
