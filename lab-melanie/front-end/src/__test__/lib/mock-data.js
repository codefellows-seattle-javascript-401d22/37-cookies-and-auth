const randomNum = max => { return Math.floor(Math.random() * max); };

export const mockUser = {
  username: `testUsername${randomNum(1000)}`,
  email: `testEmail${randomNum(1000)}@gmail.com`,
  password: '123456789',
};

export const mockProfile = {
  avatar: 'https://s3-us-west-2.amazonaws.com/mbcinstaclonebucket/29ef5e963eaff5dc607ff1955466e6a1.porg.jpg',
  bio: 'hello',
  email: mockUser.email,
  username: mockUser.username,
};