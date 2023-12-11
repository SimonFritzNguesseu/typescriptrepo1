import { getGroups } from './getGroups';

describe('getGroups Tests', () => {
  it('returns a list of groups', async () => {
    const expectedGroups = [
      { "id": 1, "groupName": "Hajarna" },
      { "id": 2, "groupName": "Valarna" },
      { "id": 3, "groupName": "Zebrorna" }
    ];

    await expect(getGroups()).resolves.toEqual(expectedGroups);
  });
});
