const randomNum = max => { return Math.floor(Math.random() * max); };

export const mockUser = {
  username: `testUsername${randomNum(1000)}`,
  email: `testEmail${randomNum(1000)}@gmail.com`,
  password: '123456789',
};

export const mockProfile = {
  avatar: 'https://mbcinstaclonebucket.s3.us-west-2.amazonaws.com/51017a25b7d61bfcb78d17a9cee58351.porg.jpg',
  bio: 'hello',
  email: mockUser.email,
  username: mockUser.username,
};