# Akka HTTP microservice example

This project demonstrates how a small microservice can be load tested in a CI pipeline.
To not distract anyone with business logic this project is based upon the [Akka http Template](https://www.typesafe.com/activator/template/akka-http-microservice)


## Usage

Start services with sbt:

```
$ sbt
> ~re-start
```

With the service up, you can start sending HTTP requests:

```
$ curl http://localhost:9000/ip/8.8.8.8
{
  "city": "Mountain View",
  "ip": "8.8.8.8",
  "latitude": 37.386,
  "country": "United States",
  "longitude": -122.0838
}
```

```
$ curl -X POST -H 'Content-Type: application/json' http://localhost:9000/ip -d '{"ip1": "8.8.8.8", "ip2": "8.8.4.4"}'
{
  "distance": 2201.448386715217,
  "ip1Info": {
    "city": "Mountain View",
    "ip": "8.8.8.8",
    "latitude": 37.386,
    "country": "United States",
    "longitude": -122.0838
  },
  "ip2Info": {
    "ip": "8.8.4.4",
    "country": "United States",
    "latitude": 38.0,
    "longitude": -97.0
  }
}
```

### Docker

build a docker image with the `docker:publishLocal` command and run the container on your shell with `docker run`.
Do not forget to expose the Port 9000

### Loadtesting

Execute tests using `gatling-it:test` command:

```
$ sbt
> gatling-it:test
```

This will execute the IPRequestsSimulation 

## Author & license

If you have any questions regarding this project contact:

Christian Uhl <christian.uhl@codecentric.de> from [codecentric](codecentric.de)
For licensing info see LICENSE file in project's root directory.
