pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("Obi-Wan Kenobi");
});

pm.test("Response time is less than 150ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(150);
});
pm.test("Status code name has OK", function () {
    pm.response.to.have.status("OK");
});

pm.test("Successful request", function () {
    pm.expect(pm.response.code).to.be.oneOf([200, 201, 202]);
});

pm.test("Response time is less than 100ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(100);
});
pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});

pm.test("Passengers is 75", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.passengers).to.eql("75");
});