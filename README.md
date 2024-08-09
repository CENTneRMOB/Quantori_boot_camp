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