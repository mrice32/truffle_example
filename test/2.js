const Migrations = artifacts.require("Migrations");

contract("2", function(accounts) {
  it("Check and Set value", async function() {
    const migrations = await Migrations.deployed();
    console.log(migrations.address);
    assert.equal((await migrations.abc()).toString(), "0");
    await migrations.setAbc(1);
  });
});
