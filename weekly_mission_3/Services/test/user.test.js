const UserService = require('./../app/services/UserService');
describe("Tests for UserService", () => {
  test('1) Create anew user using the UserService', () => {
    const user = UserService.create(1,"oepr", "oepr");
    expect(user.username).toBe("oepr");
    expect(user.id).toBe(1);
    expect(user.name).toBe("oepr")
    expect(user.bio).not.toBeUndefined();
  });
  
  test('2) Get all user data in a list', () => {
    const user2 = UserService.userInfoInList(1,"oepr", "oepr");
    expect(user2[0]).toBe(1);
  });
  
  test('3) Update username', () => {
    const user = UserService.create(1,"oepr2", "oepr2");
    UserService.updateUserName(user, "oepr");
    expect(user.username).toBe("oepr");
  });
  
  test('4) Given a list of users gime the list of usernames', () => {
    const user1 = UserService.create(1,"oepr1", "oepr1");
    const user2 = UserService.create(1,"oepr2", "oepr2");
    const user3 = UserService.create(1,"oepr3", "oepr3");
    const usernames = UserService.gettUsernames([user1, user2, user3]);
    expect(usernames).toContain("oepr1");
  });
})