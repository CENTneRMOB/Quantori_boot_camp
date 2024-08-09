### Quantori JS Boot Camp Backend

#### How to startup:

1. Docker and docker-compose needed locally
2. Download this repository

#### Use below terminal commands in directory with the repository source code:

1. Start containers:

```bash
docker-compose up --build
```
2. Wait until this log appears:
```text
LOG [NestApplication] Nest application successfully started
```

3. Go to browser or any other app you prefer to test API. the application will be available on http://localhost:8080

#### There are 5 users in database. Use any one for requests:
```json
{
  "email": "andrew@example.io",
  "username": "Andrew",
  "password": "andrewPassword1"
}
```
```json
{
  "email": "bob@example.io",
  "username": "Bob",
  "password": "bobPassword1"
}
```
```json
{
  "email": "denis@example.io",
  "username": "Denis",
  "password": "denisPassword1"
}
```
```json
{
  "email": "john@example.io",
  "username": "John",
  "password": "johnPassword1"
}
```
```json
{
  "email": "kate@example.io",
  "username": "Kate",
  "password": "katePassword1"
}
```

#### Description

Use POST requests to get tokens. Use tokens in GET requests.

#### Examples

##### POST request to get token:
```bash
curl -X POST http://localhost:8080/login -d '{"email": "andrew@example.io", "password": "andrewPassword1"}' -H "Content-Type: application/json"
```
##### Received token
```text
$2b$10$25zGleOJ2Evkr1XDqwyhAOJcK5ZXpkbPRAz0hvb8jdQGkE43QPHlG
```
##### GET request to get profile('\\' are for escaping $):
```bash
curl -X GET http://localhost:8080/profile -H "Authorization: Bearer \$2b\$10\$25zGleOJ2Evkr1XDqwyhAOJcK5ZXpkbPRAz0hvb8jdQGkE43QPHlG" -H "Accept: application/json"
```
##### Full GET request:
```bash
> GET /profile HTTP/1.1
> Host: localhost:8080
> User-Agent: curl/7.81.0
> Accept: */*
> Authorization: Bearer $2b$10$25zGleOJ2Evkr1XDqwyhAOJcK5ZXpkbPRAz0hvb8jdQGkE43QPHlG
```
##### Received data:
```json
{"email":"andrew@example.io","username":"Andrew"}
```