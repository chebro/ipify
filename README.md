# ipify

No bullshit express.js app that returns the client ip address.


## Install and run

```sh
git clone http://github.com/chebro/ipify
npm ci
```


## Test

```
# plain text
curl 'https://ipify.chebro.studio'

# json
curl 'https://ipify.chebro.studio?json=true'
```


## Behind a reverse proxy

When behind a reverse proxy, set the `X-Forwarded-For` proxy header to the client IP in the proxy config. For example:

```
# nginx server directive
server {
	...
	location / {
		...
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		...
	}
}
```

