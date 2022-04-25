const UserService = require('./../app/services/UserService');
describe("Tests for UserService", () => {
  test('1) Create anew user using the UserService', () => {
    const user = UserService.create(1,"oepr", "oepr");
    expect(user.username).toBe("oepr");
    expect(user.id).toBe(1);
    expect(user.name).toBe("oepr")
    expect(user.bio).not.toBeUndefined();
  });
  
})