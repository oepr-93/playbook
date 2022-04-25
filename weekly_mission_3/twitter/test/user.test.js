const User = require('./../app/User');
describe("Unit Tests for User class", () => {
  test('1) Create an User object', () => {
    const user1 = new User(1,"oepr", "oepr", "Bio");
    expect(user1.id).toBe(1);
    expect(user1.username).toBe("oepr");
    expect(user1.name).toBe("oepr");
    expect(user1.bio).toBe("Bio");
    expect(user1.dateCreated).not.toBeUndefined();
    expect(user1.lastUpdated).not.toBeUndefined();
  });
  
  test('2) Add getters', () => {
    const user2 = new User(1,"oepr", "oepr", "Bio");
    expect(user2.getUsername).toBe("oepr");
    expect(user2.getBio).toBe("Bio");
    expect(user2.getDateCreated).not.toBeUndefined();
    expect(user2.getlastUpdated).not.toBeUndefined();
  });
  
})