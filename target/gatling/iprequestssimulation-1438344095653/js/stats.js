var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6000",
        "ok": "4538",
        "ko": "1462"
    },
    "minResponseTime": {
        "total": "43",
        "ok": "166",
        "ko": "43"
    },
    "maxResponseTime": {
        "total": "64291",
        "ok": "57395",
        "ko": "64291"
    },
    "meanResponseTime": {
        "total": "15154",
        "ok": "9045",
        "ko": "34116"
    },
    "standardDeviation": {
        "total": "16603",
        "ok": "10837",
        "ko": "17071"
    },
    "percentiles1": {
        "total": "5597",
        "ok": "4471",
        "ko": "32242"
    },
    "percentiles2": {
        "total": "31645",
        "ok": "8621",
        "ko": "32345"
    },
    "percentiles3": {
        "total": "55524",
        "ok": "36512",
        "ko": "60860"
    },
    "percentiles4": {
        "total": "60872",
        "ok": "52705",
        "ko": "64245"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 28,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 35,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 4475,
        "percentage": 75
    },
    "group4": {
        "name": "failed",
        "count": 1462,
        "percentage": 24
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "52.507",
        "ok": "39.713",
        "ko": "12.794"
    }
},
contents: {
"request-1-46da4": {
        type: "REQUEST",
        name: "request_1",
path: "request_1",
pathFormatted: "request-1-46da4",
stats: {
    "name": "request_1",
    "numberOfRequests": {
        "total": "6000",
        "ok": "4538",
        "ko": "1462"
    },
    "minResponseTime": {
        "total": "43",
        "ok": "166",
        "ko": "43"
    },
    "maxResponseTime": {
        "total": "64291",
        "ok": "57395",
        "ko": "64291"
    },
    "meanResponseTime": {
        "total": "15154",
        "ok": "9045",
        "ko": "34116"
    },
    "standardDeviation": {
        "total": "16603",
        "ok": "10837",
        "ko": "17071"
    },
    "percentiles1": {
        "total": "5597",
        "ok": "4471",
        "ko": "32242"
    },
    "percentiles2": {
        "total": "31645",
        "ok": "8621",
        "ko": "32345"
    },
    "percentiles3": {
        "total": "55524",
        "ok": "36512",
        "ko": "60860"
    },
    "percentiles4": {
        "total": "60872",
        "ok": "52705",
        "ko": "64245"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 28,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 35,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 4475,
        "percentage": 75
    },
    "group4": {
        "name": "failed",
        "count": 1462,
        "percentage": 24
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "52.507",
        "ok": "39.713",
        "ko": "12.794"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
