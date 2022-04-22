const MissionCommander = require('./../app/missionCommander');

describe("Unit Tests for Mission Commander Class", () => {
  test('1) Create a mission commander objet', () => {
    const myMissionCommander = new MissionCommander("oepr")
    expect(myMissionCommander.name).toBe("Woopa");
    
  });
})
