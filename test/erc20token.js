var erc20token = artifacts.require('./erc20Token.sol');

contract('erc20token', function(accounts) {
  it("should assert true", function(done) {
    erc20token = erc20token.deployed();
    assert.isTrue(true);
    done();
  });
});
