import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

/**
 * Created by christianuhl on 31.07.15.
 */

class IPRequestsSimulation extends Simulation {

  val boot2dockerHost = "http://192.168.59.103:9000"

  val httpConf = http
    .baseURL(boot2dockerHost) // Here is the root for all relative URLs
    .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8") // Here are the common headers
    .doNotTrackHeader("1")
    .acceptLanguageHeader("en-US,en;q=0.5")
    .acceptEncodingHeader("gzip, deflate")
    .userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:16.0) Gecko/20100101 Firefox/16.0")

  val scn = scenario("IP Requests") // A scenario is a chain of requests and pauses
    .exec(http("request_1")
    .get("/ip/62.245.130.194"))
    .pause(7)

  setUp(scn.inject(constantUsersPerSec(10) during(60 seconds)).protocols(httpConf))
}
